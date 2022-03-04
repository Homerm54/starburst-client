/**
 * @file Authentication Related Services Available for the Client
 * @author Omer Marquez <omer.marquezt@gmail.com>
 * 
 * Check the README.md file inside this folder for details, metodologies and strategies.
 */
import Console from 'lib/Console';
import { SignIn, SignUp, SignOut, refreshAccessToken, recoverPassword, askForRecoverEmail } from './functions';
import { setupInterceptors } from './interceptors';
import { AuthListener, SignInState } from './types';

// ---------- CONSTANTS
const LOCALSTORAGE_RT_KEY = 'rt_key';
const SESION_STATE_KEY = 'keep_sesion';

/**
 * Authentication module to connect with the API Authentication service.
 * This class provides methods and properties to:
 * 
 * - Keep track of authentication state in every moment
 * - Interact with the authentication service
 * - Configure the application to handle further interactions in an authenticated
 *   way
 * 
 * To init the module, first you must call the `.init()` function, to get the current auth
 * state, from there, the module can be used.
 * **NOTE:** Not calling the `.init()` function will result in a undefined auth state.
 * Calling the `.init()` function more than once yields no problem.
 */
class AuthService {
  // Properties
  private _refresh_token: string | null = null;
  private access_token: string | null | undefined = undefined;
  private _authStateListeners: Array<AuthListener> = [];
  keepSesionActive = true;

  constructor() {
    try {
      const refresh_token = localStorage.getItem(LOCALSTORAGE_RT_KEY);
      this._refresh_token = refresh_token;
    } catch (error) {
      Console.error(error);
    }
  }

  // Methods
  SignIn = SignIn;
  SignUp = SignUp;
  SignOut = SignOut;
  recoverPassword = recoverPassword;
  askForRecoverEmail = askForRecoverEmail;

  // Getter / Setter
  get isSignedIn(): SignInState {
    if (this.access_token === null) return false;
    if (typeof this.access_token === 'string') return true;
    if (this.access_token === undefined) return undefined;
    return false;
  }

  get accessToken(): string | null | undefined { return this.access_token; }
  set accessToken(token: string | null | undefined) {
    Console.log(`Setting access token to: ${token}`);
    this.access_token = token;
    this._notifyAuthStateChange();
  }

  get refresh_token(): string | null { return this._refresh_token; }
  set refresh_token(token: string | null) { 
    Console.log(`Setting refresh token to: ${token}`);
    this._refresh_token = token;
    if (this.keepSesionActive) {
      if (token) localStorage.setItem(LOCALSTORAGE_RT_KEY, token);
      else localStorage.removeItem(LOCALSTORAGE_RT_KEY);
    }
  }

  onAuthStateChange(fn: AuthListener): () => void {
    this._authStateListeners.push(fn);

    // Unsubcribe function
    return () => { 
      this._authStateListeners.filter((test_fn) => test_fn !== fn);
    };
  }

  private _notifyAuthStateChange(): void {
    this._authStateListeners.forEach((fn) => {
      fn(this.isSignedIn);
    });
  }


  // INIT METHOD TO START THE MODULE
  async init(): Promise<void> {
    Console.log(`AuthService class constructor called, current refresh token: ${this.refresh_token}`);
    if (this.refresh_token) {
      Console.log('About to request new refresh token here!');
      await refreshAccessToken(this.refresh_token)
        .then(([access_token, refresh_token]) => {
          this.accessToken = access_token;
          this.refresh_token = refresh_token;
        })
        .catch((error) => {
          Console.error('Error generating new access token derived from refresh token');
          Console.error(error);
          this.accessToken = null;
          this.refresh_token = null;
        })
        .finally(() => setupInterceptors(this));
    } else {
      this.accessToken = null;
    }
  }
}

export { AuthService };
