import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import routes from 'router/routes';
import GlobalStyle from 'assets/style/global';
import { dark as darktheme, light as lighttheme } from 'assets/style/theme';
import { Loading } from 'components/ui';
import { useGlobalContext } from './shared/context';
import NotFound from 'pages/404';
import { useEffect, useState, Suspense } from 'react';
import Dashboard from 'pages';
import Console from 'lib/Console';
import PrivateRoute from 'router/PrivateRoute';
import Auth from 'pages/auth';
import api from 'api';
import ScreenSizeWatcher from 'components/ScreenSizeWatcher';

import 'assets/icons/faIcons';
import { ErrorBoundary } from './ErrorBoundary';

const PagesRouter = (): JSX.Element => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Switch>
          <PrivateRoute exact path={routes.dashboard}>
            <Dashboard />
          </PrivateRoute>

          <Route exact path={routes.authSection}>
            <Auth />
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
};

function App(): JSX.Element {
  const context = useGlobalContext();
  const [initialLoading, setInitialLoading] = useState(true);
  
  const initRoutine = () => {
    // Check API status adn initial routine
    setInitialLoading(true);
    api.wakeUpServer()
      .then((ok) => {
        if (!ok) throw new Error("Server Response not OK");
        // TODO: Check auth status here
      })
      .catch((error) => {
        Console.error(error);
        throw new Error(error);
      })
      .finally(() => setInitialLoading(false));
  };
  useEffect(initRoutine, []);

  return (
    <ThemeProvider theme={context.state.theme === 'dark' ? darktheme : lighttheme}>
      <GlobalStyle />

      <ErrorBoundary>
        {
          initialLoading
            ? <Loading global hint="Reaching server..." />
            : (
              <>
                <ScreenSizeWatcher />
                <PagesRouter />
              </>
            )
        }
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
