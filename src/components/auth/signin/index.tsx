import { Button, Divider, Link } from "components/ui";
import { useState } from "react";
import { SigninForm } from "./form";
import { EmailRecoverModal } from "./EmailRecoverModal";

const SignInScreen = ({ onFinish }: { onFinish: () => unknown }): JSX.Element => {
  const [showModal, setShowModal] = useState(false);
  
  return(
    <div className="mt-3 px-3">
      <EmailRecoverModal
        display={showModal}
        onClose={() => setShowModal(false)}
      />

      <strong>Hello! let&apos;s get started</strong>
      <br />
      Sign in to continue.

      <div className="mb-4">
        <SigninForm onFinish={onFinish} />
      </div>

      <div style={{ textAlign: 'center'}}>
        <Button
          variant="text"
          type="unstyled"
          style={{ display: 'inline' }}
          onClick={() => setShowModal(true)}
        >
          Forgot your password?
        </Button>
        
        <Divider type="vertical" />

        No account? <Link to="/auth?tab=signup" type="primary">Create one here.</Link>
      </div>
    </div>
  );
};

export { SignInScreen };
