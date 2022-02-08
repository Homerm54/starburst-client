import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import routes from 'router/routes';
import GlobalStyle from 'assets/style/global';
import { dark as darktheme, light as lighttheme } from 'assets/style/theme';
import Loading from 'components/shared/Loading';
import { useGlobalContext } from './shared/context';
import ServerError from 'pages/500';
import NotFound from 'pages/404';
import { useEffect, useState, Suspense } from 'react';
import Dashboard from 'pages/dashboard';
import Console from 'lib/Console';
import PrivateRoute from 'router/PrivateRoute';
import Auth from 'pages/auth';
import api from 'api';
import ScreenSizeWatcher from 'components/ScreenSizeWatcher';

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
  )
}

function App(): JSX.Element {
  const context = useGlobalContext();
  const [serverError, setServerError] = useState(false);
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
        setServerError(true);
      })
      .finally(() => setInitialLoading(false));
  };
  useEffect(initRoutine, []);

  return (
    <ThemeProvider theme={context.state.theme === 'dark' ? darktheme : lighttheme}>
      <GlobalStyle />

      <ScreenSizeWatcher />
      {
        initialLoading
          ? <Loading global hint="Reaching server..." />
          : serverError
            ? <ServerError retry={process.env.NODE_ENV === 'development' ? initRoutine : undefined} />
            : <PagesRouter />
      }
    </ThemeProvider>
  );
}

export default App;
