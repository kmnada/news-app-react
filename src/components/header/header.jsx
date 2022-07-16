import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import { useStyles } from "../header/styles";
import { useHistory } from "react-router-dom";
import { logout } from "../../store/login/action";
import { useDispatch } from "react-redux";

const Header = () => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const onClickLogout = () => {
        logout(history, dispatch);
    };

    return (
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={() => history.push("/home")}
              >
                <HomeIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                New York Times
              </Typography>
    
              <Button color="inherit" onClick={() => onClickLogout()}>Logout</Button>
            </Toolbar>
          </AppBar>
        </div>
      );
};

export default Header;