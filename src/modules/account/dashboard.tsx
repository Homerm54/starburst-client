import { Link } from "components/ui";
import routes from "router/routes";

const Main = (): JSX.Element => {

  return(
    <>
      <h3>Main</h3>
      <br />
      <Link to={routes.accountModule.fileStorage} type="primary">
        Go to File Storage Settings
      </Link>
    </>
  );
};


export { Main };
