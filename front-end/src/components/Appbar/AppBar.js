import React from "react";
import {AppBar, Toolbar, Typography, InputBase} from '@material-ui/core'
import {LocalDiningOutlinedIcon, SearchIcon} from '@material-ui/icons'

class AppBar extends React.Component {
  render() {
    return (
      <AppBar position="relative">
        <Toolbar>
          <LocalDiningOutlinedIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Home
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default AppBar
