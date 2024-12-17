import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Button from "./components/commons/Button";
import Blogposts from "./components/Blogposts";


const App = () => {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={Blogposts} />
          {/* <Route exact path="/dashboard" component={Blogposts} /> */}
        </Switch>
      </Router>
  );
};

export default App;
