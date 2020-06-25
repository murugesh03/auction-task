import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./Components/Navbar/NavBar";
import Project from "./Components/Project/Project";
import DashBoard from "./Components/Dashboard/Dashboard";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Project} />
        <Route path="/dashboard" component={DashBoard} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
