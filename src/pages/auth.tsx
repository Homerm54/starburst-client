import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "components/ui/Button";
import Console from "lib/Console";
import { useLocation } from 'react-router-dom';

const Auth = () : JSX.Element => {
  const state = useLocation().state as { redirectTo: string | null };
  const redirectTo = state?.redirectTo || '';
  Console.log(`When done, will redirect to: ${redirectTo}`);

  const type = 'unstyled';
  return (
    <div className="ml-2">
      <h1>auth</h1>
      <Button type={type}>
        Click here!
      </Button>

      <div className="mb-4"></div>

      <Button icon={<FontAwesomeIcon icon="circle-xmark" />} type={type}>
        Click here!
      </Button>

      <div className="mb-4"></div>

      <Button type={type} loading={true}>
        Click here!
      </Button>
    </div>
  );
};


export default Auth;
