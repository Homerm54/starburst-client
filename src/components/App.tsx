import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import routes from 'lib/routes';
import GlobalStyle from 'assets/style/global';
import { dark as darktheme, light as lighttheme } from 'assets/style/theme';
import SideBarMenu from 'components/shared/sidebar';
import Loading from 'components/shared/Loading';


function App(): JSX.Element {
  return (
    <ThemeProvider theme={darktheme}>
      <GlobalStyle />
      <Router>

        <SideBarMenu />
        <Switch>
          <Route exact path={routes.main}>
            <Loading />
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
