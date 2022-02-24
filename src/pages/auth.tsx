import { SignInScreen } from "components/auth/signin";
import { SignUpScreen } from "components/auth/signup";
import { Typography, Divider, Tab, Card } from "components/ui";
import { Container } from "components/ui/Container";
import { useLocation, useHistory } from 'react-router-dom';

const Auth = (): JSX.Element => {  
  const location = useLocation();
  const history = useHistory();
  const tab = new URLSearchParams(location.search).get("tab") || 'signin';
  const handleTabChange = (key?: string) => key && history.push(`/auth?tab=${key}`);
 
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
            <SignInScreen />
          </Tab.Item>

          <Tab.Item
            label="Sign Up"
            tabKey="signup"
          >
            <SignUpScreen />
          </Tab.Item>
        </Tab.Group>
      </Card>
    </Container>
  );
};


export default Auth;
