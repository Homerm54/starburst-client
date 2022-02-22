import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography, Divider, Tab, Card } from "components/ui";
import { useLocation } from 'react-router-dom';

const Auth = (): JSX.Element => {
  
  const state = useLocation().state as { redirectTo: string | null };
  const redirectTo = state?.redirectTo || '';
 
  return (
    <div className="m-4">
      <Card style={{ width: '90vw' }}>
        <Typography variant="h3">Starburst</Typography>
        <Divider />
      
        <Tab.Group initialActiveTab="signin" alignment="center">
          <Tab.Item
            icon={<FontAwesomeIcon icon="user-plus" />}
            tabKey="signin"
            label="Sign In"
          >
            Hola, soy el contenido del tab #1
          </Tab.Item>
          <Tab.Item
            label="Sign Up"
            tabKey="signup"
          >
            Tab #2 aquí
          </Tab.Item>
        </Tab.Group>
      </Card>
    </div>
  );
};


export default Auth;
