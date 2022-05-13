import { AppBar, IconButton, Paper, Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import SortIcon from "@mui/icons-material/Sort";

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "none",
  },
  //   //   icon: {
  //   //     color: "#fff",
  //   //     fontSize: "2rem",
  //   //   },
  //   //   appTitle: {
  //   //     flexGrow: "1",
  //   //   },
  container: {
    background: "#f99",
    marginTop: "5em",
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.appbar} elevation={0}>
        <Toolbar>
          <h1>MyFood.</h1>
          <IconButton>
            <SortIcon />
          </IconButton>
        </Toolbar>
      </Paper>
      <Paper></Paper>
    </div>
  );
}
