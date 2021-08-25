import { Route, Switch } from "react-router-dom";
import AllMeetup from "./pages/AllMeetup";
import Favourites from "./pages/Favourites";
import NewMeetups from "./pages/NewMeetups";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetup />
        </Route>

        <Route path="/new-meetup">
          <NewMeetups />
        </Route>
        <Route path="/favourites">
          <Favourites />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
