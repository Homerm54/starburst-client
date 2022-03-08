type GenericFunction = () => unknown;
type AuthListener = (authState: User | null) => unknown;

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

type User = {
  /** Email of the user authenticated */
  email: string;
  /** 
   * The uid of the user authenticated
   * Stored in case that some operations requires it.
   */
  uid: string;
  /** Like username, the human readable user identifier */
  display_name: string;
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
  GenericFunction,
  AuthListener,
  RecoverPasswordArgs,
  DBSession,
  User,
};
