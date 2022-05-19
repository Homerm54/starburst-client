import { Loading } from "components/ui";
import { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from "./PrivateRoute";
import { routes_array } from "./routes";
import NotFound from 'pages/404';

const RouteRenderer = (): JSX.Element => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Switch>
          {
            routes_array.map((route) => {
              if (route.private) {
                return (
                  <PrivateRoute
                    exact={route.exact}
                    path={route.route}
                    key={route.route}
                  >
                    <route.component />
                  </PrivateRoute>
                );
              } 

              return (
                <Route
                  exact={route.exact}
                  path={route.route}
                  key={route.route}
                >
                  <route.component />
                </Route>
              );
            })
          }

          <Route><NotFound /></Route>
        </Switch>
      </Suspense>
    </Router>
  );
};

export default RouteRenderer;
