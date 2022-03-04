import { axios, isAxiosError } from 'api/fetcher';
import { RecoverPasswordArgs, SignInArgs, SignUpArgs } from './types';
import Console from "lib/Console";
import { AuthService } from '.';
import { AuthError } from './client-errors';

/**
 * Sign the user into the Auth service, using the credentials required.
 * @param email The email of the user.
 * @param password The new password of the user.
 */
async function SignIn(this: AuthService, { email, password }: SignInArgs): Promise<void> {
  try {
    Console.log(`Signing in with credentials: ${email} - ${password}`);
    const res = await axios.post('/auth/signin', { email, password });

    this.accessToken = res.data.accessToken;
    this.refresh_token = res.data.refreshToken;

    Console.log('User data:', res.data);
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response) {
        const { code } = error.response.data;
        const isAuthError = AuthError.isAuthError(code);
        if (isAuthError) throw new AuthError(code);

        Console.error(error.response.data);
        throw error;
      }
    }

    Console.error(error);
    throw error;
  }
}

/**
 * Enroll the user into the API Auth service, using the email + password credential.
 * @param email The email of the user.
 * @param password The new password of the user.
 * @param secret The secret code that the user must provide in order to log in.
 */
async function SignUp(this: AuthService, { email, password, secret }: SignUpArgs): Promise<void> {
  Console.log(`Signing up with credentials: ${email} - ${password} - ${secret}`);

  try {
    const res = await axios.post('/auth', { email, password, secret_signup_code: secret });
    this.accessToken = res.data.accessToken;
    this.refresh_token = res.data.refreshToken;
    Console.log('User data:', res.data);
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response) {
        const { code } = error.response.data;
        const isAuthError = AuthError.isAuthError(code);
        if (isAuthError) throw new AuthError(code);

        Console.error(error.response.data);
        throw error;
      }
    }

    Console.error(error);
    throw error;
  }
}

/**
 * Sign the user out of the Auth service.
 */
async function SignOut (this: AuthService): Promise<void> {
  const res = await axios.post('/auth/signout', {});
  Console.log(res.data);

  this.accessToken = null;
  this.refresh_token = null;
}

/**
 * Generate a new pair of refresh / access token, per Token Rotation system.
 * @param refreshToken The refresh token that will be used to generate a new pair.
 * @return  The token pairs, in the access token , refresh token pair.
 */
async function refreshAccessToken(refreshToken: string): Promise<[string, string]> {
  const res = await axios.post('/auth/refresh-access-token', { refreshToken });
  return [res.data.accessToken, res.data.refreshToken];
}

// Auth util functions
async function recoverPassword(
  this: AuthService,
  { code, password }: RecoverPasswordArgs
): Promise<void> {
  try {
    await axios.post('/auth/recover-password', { code, password });
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response) {
        const { code } = error.response.data;
        const isAuthError = AuthError.isAuthError(code);
        if (isAuthError) throw new AuthError(code);

        Console.error(error.response.data);
        throw error;
      }
    }

    Console.error(error);
    throw error;
  }
}

async function askForRecoverEmail(
  this: AuthService,
  { email }: { email: string; }
): Promise<void> {
  try {
    await axios.post('/auth/recover-password', { email });
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response) {
        const { code } = error.response.data;
        const isAuthError = AuthError.isAuthError(code);
        if (isAuthError) throw new AuthError(code);

        Console.error(error.response.data);
        throw error;
      }
    }

    Console.error(error);
    throw error;
  }
}

export { SignIn, SignUp, SignOut, refreshAccessToken, recoverPassword, askForRecoverEmail };