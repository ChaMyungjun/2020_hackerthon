import React from "react";
import Appbar from "../public/Appbar/AppBar";
import Footer from "../public/footer/footer";
import {Typography} from '@material-ui/core'

class Foodrecipe extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Appbar />
        <Typography>
            Testing Recipe process
        </Typography>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Foodrecipe;
