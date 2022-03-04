import PasswordScreen from "components/account/management/PasswordScreen";
import { useLocation } from "react-router-dom";

const Management = (): JSX.Element => {
  const location = useLocation();
  const type = new URLSearchParams(location.search).get('mode');

  switch (type) {
  case 'password-recovery':
    return <PasswordScreen />;
  
  default:
    return <h3>No match</h3>;
  }
};


export { Management };
