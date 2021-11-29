import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import routes from 'lib/routes';
import GlobalStyle from 'assets/style/global';
import { dark as darktheme, light as lighttheme } from 'assets/style/theme';
import Loading from 'components/shared/Loading';
import { useGlobalContext } from './shared/context';
import ServerError from 'pages/500';
import NotFound from 'pages/404';
import { useEffect, useState, Suspense } from 'react';
import Dashboard from 'pages/dashboard';

const PagesRouter = (): JSX.Element => {
  return (
    <Router>
      <Suspense fallback={<Loading show />}>
        <Switch>
          <Route exact path={routes.main}>
            <Dashboard />
          </Route>

          <Route exact path={routes.signSection}>
            <div>Auth</div>
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  )
}


// Check the Authentication Flow used here
// https://v5.reactrouter.com/web/example/auth-workflow
function App(): JSX.Element {
  const context = useGlobalContext();
  const [serverError, setServerError] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  
  useEffect(() =>{
    // Check API and authentication status
    setTimeout(() => {
      setInitialLoading(false);
    }, 1500);
  }, []);
  

  return (
    <ThemeProvider theme={context.state.theme === 'dark' ? darktheme : lighttheme}>
      <GlobalStyle />
      
      {
        initialLoading
          ? <Loading global />
          : serverError
            ? <ServerError />
            : <PagesRouter />
      }
    </ThemeProvider>
  );
}

export default App;
