import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import routes from 'lib/routes';
import GlobalStyle from 'assets/style/global';
import { darkTheme } from 'assets/style/darkTheme';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path={routes.main}>
            <div> :D </div>
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
