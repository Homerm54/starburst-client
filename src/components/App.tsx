import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'assets/style/ThemeProvider';
import routes from 'router/routes';
import GlobalStyle from 'assets/style/global';
import { dark as darktheme, light as lighttheme } from 'assets/style/theme';
import { Loading } from 'components/ui';
import { useGlobalContext } from './shared/context';
import NotFound from 'pages/404';
import { useEffect, Suspense } from 'react';
import FileExplorer from 'modules/dashboard';
import Console from 'lib/Console';
import PrivateRoute from 'router/PrivateRoute';
import AuthModule from 'modules/auth';
import api from 'api';
import ScreenSizeWatcher from 'components/ScreenSizeWatcher';
import { NetworkWatcher } from 'components/NetworkWatcher';
import AccountModule from 'modules/account';
import { ErrorBoundary } from './ErrorBoundary';
import { Management } from 'modules/management';
import { useSafeState } from '@react-hookz/web';

import 'assets/icons/faIcons';

const PagesRouter = (): JSX.Element => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Switch>
          <PrivateRoute exact path={routes.dashboard}>
            <FileExplorer />
          </PrivateRoute>

          <Route exact path={routes.authentication}>
            <AuthModule />
          </Route>

          <Route exact path={routes.management}>
            <Management />
          </Route>

          <PrivateRoute path={routes.accountModule.index}>
            <AccountModule />
          </PrivateRoute>

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
  const [initialLoading, setInitialLoading] = useSafeState(true);
  
  const initApp = () => {
    setInitialLoading(true);
    api.build()
      .then(() => {
        if (!api.isAPIOnline) throw new Error("API not online!");
        Console.log(`Auth state: ${api.auth.isSignedIn}`);
      })
      .catch((error) => {
        Console.error(error);
        throw new Error(error);
      })
      .finally(() => setInitialLoading(false));
  };
  useEffect(initApp, []);

  return (
    <ThemeProvider theme={context.state.theme === 'dark' ? darktheme : lighttheme}>
      <GlobalStyle />

      <ErrorBoundary>
        <ScreenSizeWatcher />
        <NetworkWatcher />

        {
          initialLoading
            ? <Loading global hint="Reaching server..." />
            : <PagesRouter />
        }
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
