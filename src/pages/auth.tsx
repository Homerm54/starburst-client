import Console from "lib/Console";
import { useLocation } from 'react-router-dom';

const Auth = () : JSX.Element => {
  const state = useLocation().state as { redirectTo: string | null };
  const redirectTo = state?.redirectTo || '';
  Console.log(`When done, will redirect to: ${redirectTo}`);

  return (
    <>
      <h1>auth</h1>
    </>
  )
}


export default Auth;
