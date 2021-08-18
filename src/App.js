import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Galery from "./components/Galery";
import Contact from "./components/Contact";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/onas">
          <About />
        </Route>
        <Route exact path="/galeria">
          <Galery />
        </Route>
        <Route exact path="/kontakt">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
