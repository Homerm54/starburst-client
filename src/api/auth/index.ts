/**
 * @file Authentication Related Services Available for the Client
 * @author Omer Marquez <omer.marquezt@gmail.com>
 * 
 * Check the README.md file inside this folder for details, metodologies and strategies.
 */
import { authDB, AuthenticationKey } from 'api/db';
import { axios } from 'api/fetcher';
import { AxiosRequestConfig } from 'axios';
import Console from 'lib/Console';
import { AuthError } from './client-errors';
import { AuthorizartionErrorCodes, ErrorCodesThatRequireRefresh } from './server-errors';
import { AuthListener, DBSession, RecoverPasswordArgs, SignInArgs, SignUpArgs, User } from './types';

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
  /** The current active session of the authenticated user, or null if not authenticated */
  private _session: DBSession | null = null;
  /** Array of functions that are subscribed to the session observer */
  private _authStateListeners: Array<AuthListener> = [];

  constructor() { }

  // Getter / Setter
  /** Return whether or not the user is signed in */
  get isSignedIn() { return Boolean(this.session); }
  /** Return the data of the authenticated user, or null if nor signed in */
  get currentUser(): User | null {
    if (this.session) {
      return {
        email: this.session.email,
        display_name: this.session.display_name,
        uid: this.session.uid,
      };
    }

    return null;
  }

  // ---------- [NEW SECTION] Token Section
  private get access_token(): string | null {
    if (this.session) return this.session.access_token;
    return null;
  }

  private get refresh_token(): string | null {
    if (this.session) return this.session.refresh_token;
    return null;
  }

  // Methods
  /** Generate a new pair of refresh / access token, and save them on the session. */
  private async updateTokens() {
    try {
      if (this.session) {
        const res = await axios.post(
          '/auth/refresh-access-token',
          { refreshToken: this.refresh_token }
        );

        this.updateSession({
          refresh_token: res.data.refreshToken,
          access_token: res.data.accessToken,
        });
      }
    } catch (error) {
      Console.error('Error generating new access token derived from refresh token');
      Console.error(error);
      this.destroySession();
    }
  }

  private handleError(error: any) {
    if (error.response) {
      const { code } = error.response.data;
      const isAuthError = AuthError.isAuthError(code);
      if (isAuthError) throw new AuthError(code);

      Console.error(error.response.data);
      throw error;
    }
    Console.error(error);
    throw error;
  }
  // ---------- [END OF SECTION]

  // ---------- [NEW SECTION] Session Handlers
  // This getter and setter will allow to call the listeners on any update
  get session(): DBSession | null { return this._session; }
  set session(s: DBSession | null) { this._session = s; }

  private async updateSession(value: Partial<DBSession>) {
    // Value will override all the keys of data, hence, updating as needed
    Console.log(value);
    const newData = { ...this.session, ...value, updated_at: new Date() };
    this.session = newData as DBSession;
    await authDB.setItem(AuthenticationKey, newData);
    this.callListeners();
  }

  private async destroySession() {
    this.session = null;
    await authDB.removeItem(AuthenticationKey);
    this.callListeners();
  }

  // ---------- [NEW SECTION] Public Methods
  /**
   * Sign the user into the Auth service, using the credentials required.
   * @param email The email of the user.
   * @param password The new password of the user.
   */
  async SignIn(this: AuthService, { email, password }: SignInArgs): Promise<void> {
    try {
      Console.log(`Signing in with credentials: ${email} - ${password}`);
      const res = await axios.post('/auth/signin', { email, password });
      Console.log('User data:', res.data);

      this.updateSession({
        refresh_token: res.data.refreshToken,
        access_token: res.data.accessToken,
        display_name: res.data.username,
        auth_method: 'password',
        created_at: new Date(),
        email: res.data.email,
        uid: res.data.uid,
        updated_at: new Date(),
      });
    } catch (error) { this.handleError(error); }
  }
  
  /**
   * Enroll the user into the API Auth service, using the email + password credential.
   * @param email The email of the user.
   * @param password The new password of the user.
   * @param secret The secret code that the user must provide in order to log in.
   */
  async SignUp(this: AuthService, { email, password, secret }: SignUpArgs): Promise<void> {
    Console.log(`Signing up with credentials: ${email} - ${password} - ${secret}`);

    try {
      const res = await axios.post('/auth', { email, password, secret_signup_code: secret });
      Console.log('User data:', res.data);

      await this.updateSession({
        refresh_token: res.data.refreshToken,
        access_token: res.data.accessToken,
        display_name: res.data.username,
        auth_method: 'password',
        created_at: new Date(),
        email: res.data.email,
        uid: res.data.uid,
        updated_at: new Date(),
      });
    } catch (error) { this.handleError(error); }
  }

  /**
   * Sign the user out of the Auth service.
   */
  async SignOut() {
    const res = await axios.post('/auth/signout', {});
    Console.log(res.data);

    this.destroySession();
  }

  private callListeners() {
    this._authStateListeners.forEach((fn) => { fn(this.currentUser); });
  }
  onAuthStateChange(fn: AuthListener): () => void {
    this._authStateListeners.push(fn);

    // Unsubcribe function
    return () => { 
      this._authStateListeners.filter((test_fn) => test_fn !== fn);
    };
  }

  // ---------- Auth utils function
  async recoverPassword({ code, password }: RecoverPasswordArgs): Promise<void> {
    try {
      await axios.post('/auth/recover-password', { code, password });
    } catch (error) { this.handleError(error); }
  }

  async askForRecoverEmail({ email }: { email: string; }): Promise<void> {
    try {
      await axios.post('/auth/recover-password', { email });
    } catch (error) { this.handleError(error); }
  }

  async init(): Promise<void> {
    Console.log(`AuthService class constructor called, starting db...`);
    await authDB.ready(); // Wait for the database to be ready
    Console.log(`Using DB ${authDB.driver()} for auth module`);
    this.session = await authDB.getItem(AuthenticationKey);

    if (this.session) {
      Console.log('About to request new refresh token here!');
      await this.updateTokens();
      axios.interceptors.request.use(AuthService.authHeader(this));
      axios.interceptors.response.use(undefined, AuthService.errorInterceptor(this));
    }
  }
  // ---------- [END OF SECTION]


  // ---------- [INTERCEPTORS] Interceptors for the axios instance

  static errorInterceptor = (instance: AuthService) => async function (error: any): Promise<unknown> {
    const originalConfig = error.config;
    Console.error(error.response, originalConfig);

    if (!error.response) return Promise.reject(error);
    if (originalConfig._retry || !instance.session) {
      // Already retried or not refresh token, better ask for log in again
      await instance.destroySession();
      return Promise.reject(error);
    }

    // Check error code to see if corresponding with Auth Business
    if (ErrorCodesThatRequireRefresh.includes(error.response.data.code)) {
      originalConfig._retry = true;
      await instance.updateTokens();
      return axios(originalConfig);
    }

    if (AuthorizartionErrorCodes.INVALID_REFRESH_TOKEN === error.response.data.code) {
      await instance.destroySession();
      return Promise.reject(error);
    }

    // Default case, return error since the error code provided isn't related to core auth
    return Promise.reject(error);
  };

  /** Add authentication header, **if present** to all the requests */
  static authHeader = (instance: AuthService) => function (config: AxiosRequestConfig<any>) {
    if (!instance.access_token) return config;
    if (!config.headers) config.headers = {};
    config.headers.Authorization = `Bearer ${instance.access_token}`;
    return config;
  };
  // ---------- [END OF INTERCEPTORS]
}

export { AuthService };
