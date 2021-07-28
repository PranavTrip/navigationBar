import React from "react";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import { Route, Switch } from "react-router";
import Navbar from "./Navbar";
import Error from "./Error";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/contact" component={Contact} />
        <Route component={Error} />
      </Switch>
    </>
  );
};

export default App;
