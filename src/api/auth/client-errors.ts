type AuthorizationErrorCodes =
  | 'invalid-credentials'
  | 'invalid-recovery-code'
  | 'unable-to-send-email'
  | 'email-in-use'
  | 'invalid-password'
  | 'user-not-found'
  | 'unauthorized'
  | 'forbidden';

const AuthorizartionErrorCodes = {
  /** The code used is invalid, either was already used, or doesn't exist in database */
  INVALID_RECOVERY_CODE: 'invalid-recovery-code' as AuthorizationErrorCodes,

  /** Unable to send the email, either the service is unavailable of email is bad */
  UNABLE_TO_SEND_EMAIL: 'unable-to-send-email' as AuthorizationErrorCodes,

  /** The email has already been used by another user, and hence, no new user can be created  */
  EMAIL_IN_USE: 'email-in-user' as AuthorizationErrorCodes,

  /** The credentials supplied doens't match the database records  */
  INVALID_CREDENTIALS: 'invalid-credentials' as AuthorizationErrorCodes,

  /** The user searched couldn't be found  */
  USER_NOT_FOUND: 'user-not-found' as AuthorizationErrorCodes,

  /** The user is not authorized to perform the request  */
  UNAUTHORIZED: 'unauthorized' as AuthorizationErrorCodes,

  /** The request is forbidden  */
  FORBIDDEN: 'forbidden' as AuthorizationErrorCodes,
};

/** Custom Error Class, to ease check in catch statements  */
class AuthError extends Error {
  readonly code: AuthorizationErrorCodes;

  constructor(codeArg: AuthorizationErrorCodes) {
    super();
    this.code = codeArg;
  }

  static isAuthError(code: string): code is AuthorizationErrorCodes {
    const ix = Object.values(AuthorizartionErrorCodes).indexOf(code as AuthorizationErrorCodes);
    return Boolean(ix);
  }
}


export { AuthorizartionErrorCodes, AuthError };
