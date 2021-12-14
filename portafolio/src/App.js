import { Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";


function App() {
  return (
    <>
        <Navbar/>
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/sobre" exact>
            <Sobre/>
          </Route>
        </Switch>
    </>
  );
}

export default App;
