import Console from "lib/Console";
import { Route, Switch } from "react-router-dom";
import routes from "router/routes";
import { FileStorageScreen } from './file-storage';
import NotFound from 'pages/404';
import { Main } from "./dashboard";

const Router = (): JSX.Element => {
  return(
    <Switch>
      <Route exact path={routes.accountModule.index}>
        <Main />
      </Route>

      <Route exact path={routes.accountModule.fileStorage}>
        <FileStorageScreen />
      </Route>

      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
};


export default Router;
