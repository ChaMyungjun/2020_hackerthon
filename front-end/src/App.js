import { AppBar } from "@material-ui/core";
import React from "react";
import Main from "./components/infoPage/info";
import { Route } from "react-router-dom";
import Foodrecipe from "./components/recipePage/Foodrecipe";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={Main} />
        <Route path="/recipe" component={Foodrecipe} />
      </React.Fragment>
    );
  }
}

export defualt App
