type SignInState = boolean | undefined;
type GenericFunction = () => unknown;
type AuthListener = (authState: SignInState) => unknown;

enum SesionSetting {
  YES = '1',
  NO = '0',
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

export type { SignInArgs, SignUpArgs, SignInState, GenericFunction, AuthListener, RecoverPasswordArgs };
