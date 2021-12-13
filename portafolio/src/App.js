import { Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";


function App() {
  return (
    <>
        <Navbar/>
        <Switch>
          <Route pacth="/" exact>
            <Home/>
          </Route>
        </Switch>
    </>
  );
}

export default App;
