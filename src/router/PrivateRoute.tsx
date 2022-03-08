import api from "api";
import Console from "lib/Console";
import { useEffect, useState } from "react";
import { Redirect, Route, RouteProps } from "react-router";
import routes from "./routes";

/**
 * A wrapper of <Route />, that redirects to the login screen if the user is not yet 
 * authenticated.
 * @see https://v5.reactrouter.com/web/example/auth-workflow for more information on auth flow.
 */
const PrivateRoute = ({ children, ...rest } : RouteProps): JSX.Element => {
  const [isAuth, setIsAuth] = useState(api.auth.isSignedIn);
  
  // NOTE: This will eject the user from the current screen as soon as the auth state changes
  useEffect(() => {
    const unsub = api.auth.onAuthStateChange((state) => {
      Console.warn(`Authentication state changed to: ${state}`);
      setIsAuth(api.auth.isSignedIn);
    });

    return unsub;
  }, []);
  

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuth === true
          ? children
          : (
            <Redirect
              to={{
                pathname: routes.authentication,
                state: {
                  redirectTo: location.pathname
                }
              }}
            />
          )
      }
    />
  );
};


export default PrivateRoute;
