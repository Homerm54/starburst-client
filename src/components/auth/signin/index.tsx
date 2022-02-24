import { Divider, Link } from "components/ui";
import { SigninForm } from "./form";

const SignInScreen = (): JSX.Element => {

  return(
    <div className="mt-3 px-3">
      <strong>Hello! let&apos;s get started</strong>
      <br />
      Sign in to continue.

      <div className="mb-4">
        <SigninForm />
      </div>

      <div style={{ textAlign: 'center'}}>
        <Link to="/haha-to-chile">
        Forgot your password?
        </Link>
        
        <Divider type="vertical" />

        No account? <Link to="/auth?tab=signup" type="primary">Create one here.</Link>
      </div>
    </div>
  );
};

export { SignInScreen };
