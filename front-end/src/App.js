import { AppBar } from "@material-ui/core";
import React from "react";
import Main from "./components/mainPage/main";
import Appbar from "./components/public/Appbar/AppBar";
import Footer from "./components/public/footer/footer";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Main />
      </React.Fragment>
    );
  }
}

export default App;
