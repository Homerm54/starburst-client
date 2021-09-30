import { ReactElement } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import routes from 'lib/routes';
import { Button } from 'carbon-components-react';

function App(): ReactElement {
  return (
    <ThemeProvider theme={{}}>
      <Router>
        <Switch>
          <Route exact path={routes.main}>
            <div> :D </div>
            <Button>Primary</Button>
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
