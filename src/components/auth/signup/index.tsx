import { Link } from "components/ui";
import { SignUpForm } from "./form";

const SignUpScreen = (): JSX.Element => {

  return(
    <div className="mt-3 px-3">
      <strong>Hello! let&apos;s get started</strong>
      <br />
      Sign up to continue.

      <div className="mb-4">
        <SignUpForm />
      </div>

      <div style={{ textAlign: 'center'}}>
        Already have an account? <Link to="/auth?tab=signin" type="primary">Sign in here.</Link>
      </div>
    </div>
  );
};

export { SignUpScreen };
