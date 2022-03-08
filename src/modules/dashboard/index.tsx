import api from "api";
import { Typography } from "components/ui";
import Console from "lib/Console";
import { useUser } from "lib/hooks/useUser";

const Dashboard = (): JSX.Element => {
  const user = useUser();
  Console.log(api.auth.currentUser);

  return(
    <Typography variant="h2">
      Username: {user?.display_name}
    </Typography>
  );
};


export default Dashboard;
