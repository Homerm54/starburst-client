import api from "api";
import { SignInScreen } from "components/auth/signin";
import { SignUpScreen } from "components/auth/signup";
import { SignOutScreen } from "components/auth/singout";
import { Typography, Divider, Tab, Card } from "components/ui";
import { Container } from "components/ui/Container";
import Console from "lib/Console";
import { useEffect, useState } from "react";
import { useLocation, useHistory } from 'react-router-dom';
import routes from "router/routes";

const Auth = (): JSX.Element | null => {
  const [isSignedIn, setIsSignedIn] = useState<boolean | undefined>(undefined);
  
  const location = useLocation<{ redirectTo?: string }>();
  const history = useHistory();
  const tab = new URLSearchParams(location.search).get("tab") || 'signin';

  Console.log(location, tab);

  const handleTabChange = (key?: string) => {
    Console.log(`handleTabChange called with: ${key}`);
    if (key) history.push(`/auth?tab=${key}`, location.state); // Preserve location state
  };

  const onFinish = () => {
    history.push(`${location.state?.redirectTo || routes.dashboard}`);
  };

  useEffect(() => {
    const unsub = api.auth.onAuthStateChange(() => {
      setIsSignedIn(api.auth.isSignedIn);
    });

    setIsSignedIn(api.auth.isSignedIn);

    return unsub;
  }, []);

  if (isSignedIn === undefined) return null;
  
  if (api.auth.isSignedIn) {
    return (
      <Container maxWidth="sm" style={{ margin: 'auto', height: '100%', display: 'flex' }}>
        <SignOutScreen />
      </Container>
    );
  }

  return (
    <Container maxWidth="sm" style={{ margin: 'auto', height: '100%', display: 'flex' }}>
      <Card style={{ width: '100%', margin: 'auto' }}>
        <Typography variant="h3">Starburst</Typography>
        <Divider />
      
        <Tab.Group forcedTab={tab} alignment="center" onChange={handleTabChange}>
          <Tab.Item
            tabKey="signin"
            label="Sign In"
          >
            <SignInScreen onFinish={onFinish} />
          </Tab.Item>

          <Tab.Item
            label="Sign Up"
            tabKey="signup"
          >
            <SignUpScreen onFinish={onFinish} />
          </Tab.Item>
        </Tab.Group>
      </Card>
    </Container>
  );
};


export default Auth;
