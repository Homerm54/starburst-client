import api from "api";
import { Button, Link, Typography } from "components/ui";

const SignOutScreen = (): JSX.Element => {

  const handleSignOut = () => {
    api.auth.SignOut();
  };

  return(
    <div>
      <Typography variant="h4" component="h2">
        You are already signed in!
      </Typography>

      <div>
        <Button onClick={handleSignOut}>
        SIGN OUT
        </Button>

        <Link to="/dashboard">
        Back to Dashboard
        </Link>
      </div>
    </div>
  );
};


export { SignOutScreen };
