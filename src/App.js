import React from "react";
import HomePage from "./Page/HomePage";
import AboutPage from "./Page/AboutPage";
import WorkPage from "./Page/WorkPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./assets/css/main.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/about">
          <AboutPage />
        </Route>
        <Route exact path="/project">
          <WorkPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
