import PasswordScreen from "components/management/PasswordScreen";
import { useLocation } from "react-router-dom";

const Management = (): JSX.Element => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const type = params.get('mode');
  const code = params.get('code');

  if (!code) return <h3>No code, invalid</h3>;

  switch (type) {
  case 'password-recovery':
    return <PasswordScreen code={code} />;
  default:
    return <h3>No match</h3>;
  }
};


export default Management;
