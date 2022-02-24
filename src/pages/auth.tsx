import { SigninForm } from "components/auth/signin";
import { Typography, Divider, Tab, Card } from "components/ui";
import { Container } from "components/ui/Container";
import { useLocation } from 'react-router-dom';

const Auth = (): JSX.Element => {  
  const state = useLocation().state as { redirectTo: string | null };
  const redirectTo = state?.redirectTo || '';
 
  return (
    <Container maxWidth="sm" style={{ margin: 'auto', height: '100%', display: 'flex' }}>
      <Card style={{ width: '100%', margin: 'auto' }}>
        <Typography variant="h3">Starburst</Typography>
        <Divider />
      
        <Tab.Group initialActiveTab="signin" alignment="center">
          <Tab.Item
            tabKey="signin"
            label="Sign In"
          >
            <SigninForm />
          </Tab.Item>

          <Tab.Item
            label="Sign Up"
            tabKey="signup"
          >
            Tab #2 aquí
          </Tab.Item>
        </Tab.Group>
      </Card>
    </Container>
  );
};


export default Auth;
