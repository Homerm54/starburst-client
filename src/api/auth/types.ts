type SignInState = boolean | undefined;
type GenericFunction = () => unknown;
type AuthListener = (authState: SignInState) => unknown;

enum SesionSetting {
  YES = '1',
  NO = '0',
}

/**
 * Type of object that will be stored in the Client Database, and that
 * will have all the data needed to persist session.
 */
type DBSession = {
  // User data
  uid: string;
  display_name: string;
  email: string;
  updated_at: Date;
  created_at: Date;

  // Session details
  auth_method: string;
  
  // Tokens
  refresh_token: string;
  access_token: string;
}

// ---------- Function arguments
interface SignInArgs {
  email: string;
  password: string;
}

interface SignUpArgs {
  email: string;
  password: string;
  secret: string;
}

interface RecoverPasswordArgs {
  code: string;
  password: string;
}

export type {
  SignInArgs,
  SignUpArgs,
  SignInState,
  GenericFunction,
  AuthListener,
  RecoverPasswordArgs,
  DBSession
};
