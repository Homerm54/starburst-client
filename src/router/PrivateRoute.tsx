import { Redirect, Route, RouteProps } from "react-router";
import routes from "./routes";

// Mock Up in the meanwile
const useAuth = () => ({ user: false });

/**
 * A wrapper of <Route />, that redirects to the login screen if the user is not yet authenticated.
 * @see https://v5.reactrouter.com/web/example/auth-workflow for more information on auth flow
 */
const PrivateRoute = ({ children, ...rest } : RouteProps): JSX.Element => {
  const auth = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user
          ? children
          : (
            <Redirect
              to={{
                pathname: routes.authSection,
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
