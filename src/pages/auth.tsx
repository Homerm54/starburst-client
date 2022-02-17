import { Card } from "components/ui/Card";
import Console from "lib/Console";
import { useLocation } from 'react-router-dom';

const Auth = () : JSX.Element => {
  const state = useLocation().state as { redirectTo: string | null };
  const redirectTo = state?.redirectTo || '';
  Console.log(`When done, will redirect to: ${redirectTo}`);

  return (
    <div className="m-4">
      <Card
        title="Testing a card"
        actionsTop={<a href="#a">Test this</a>}
        actionsBottom={[<div key="1">Hola</div>, <div key="2">Hola 2</div>, <div key="3">Hola 3</div>]}
        // actionsBottom={[<div key="1">Hola</div>]}
      >
        <div>Hello, I am a <span className="text-success">Card</span></div>
        <div>Hello, I am a <span className="text-success">Card</span></div>
        <div>Hello, I am a <span className="text-success">Card</span></div>
      </Card>
    </div>
  );
};


export default Auth;
