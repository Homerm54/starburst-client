import api from "api";
import { Typography } from "components/ui";
import Console from "lib/Console";

const Dashboard = (): JSX.Element => {
  Console.log(api.auth.currentUser);

  return(
    <Typography variant="h2">
      File Explorer! Coming soon
    </Typography>
  );
};


export default Dashboard;
