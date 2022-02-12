import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "components/ui/Button";
import Console from "lib/Console";
import { useLocation } from 'react-router-dom';

const Auth = () : JSX.Element => {
  const state = useLocation().state as { redirectTo: string | null };
  const redirectTo = state?.redirectTo || '';
  Console.log(`When done, will redirect to: ${redirectTo}`);

  const mode = 'primary';
  const variant = 'outlined';

  return (
    <div className="ml-2">
      <h1>auth</h1>
      <Button mode={mode} variant={variant}>
        Click here!
      </Button>

      <div className="mb-4"></div>

      <Button icon={<FontAwesomeIcon icon="circle-xmark" />} mode={mode} variant={variant}>
        Click here!
      </Button>

      <div className="mb-4"></div>

      <Button mode={mode} variant={variant}>
        Click here!
      </Button>
    </div>
  );
};


export default Auth;
