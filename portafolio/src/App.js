import { Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Portafolio from "./pages/Portafolio";
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
          <Route path="/portafolio" exact>
            <Portafolio/>
          </Route>
        </Switch>
    </>
  );
}

export default App;
