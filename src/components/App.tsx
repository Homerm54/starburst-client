import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import routes from 'lib/routes';
import GlobalStyle from 'assets/style/global';
import { dark as darktheme, light as lighttheme } from 'assets/style/theme';
import SideBarMenu from 'components/shared/sidebar';
import Loading from 'components/shared/Loading';
import { useGlobalContext } from './shared/context';

// Check the Authentication Flow used here
// https://v5.reactrouter.com/web/example/auth-workflow
function App(): JSX.Element {
  const context = useGlobalContext();

  return (
    <ThemeProvider theme={context.state.theme === 'dark' ? darktheme : lighttheme}>
      <GlobalStyle />
      
      <Loading show global />
      <SideBarMenu />

      <Router>
        <Switch>
          <Route exact path={routes.main}>
          </Route>

          <Route exact path={routes.signSection}>
            <div>Auth</div>
          </Route>

          <Route path="/">
            <div>404</div>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
