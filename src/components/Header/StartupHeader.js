/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";


// @material-ui/icons
import { Apps,Home,PersonAdd,CheckBox,Money,People, Create, Person, ViewAgenda} from "@material-ui/icons";

// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function StartupHeader(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="/startup"
          color="transparent"
          className={classes.navLink}
        >
         <Home className={classes.icons} /><b>Home</b>
        </Button>
      </ListItem>
      
      <ListItem className={classes.listItem}>
        <Button
          href="startup-about"
          color="transparent"
          className={classes.navLink}
        >
         <Apps className={classes.icons} /><b>About</b> 
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="startup-eligibility"
          color="transparent"
          className={classes.navLink}
        >
         <CheckBox className={classes.icons} /><b>Eligibility Criteria</b> 
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/startup-application-procedure"
          color="transparent"
          className={classes.navLink}
        >
          <PersonAdd className={classes.icons} /><b>Registration</b>
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/startup-investors-and-partners"
          color="transparent"
          className={classes.navLink}
        >
          <People className={classes.icons} /><b>Investors & Partners</b>
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/startup-agenda"
          color="transparent"
          className={classes.navLink}
        >
          <ViewAgenda className={classes.icons} /><b>Agenda</b>
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/contact-us"
          color="transparent"
          className={classes.navLink}
        >
          <People className={classes.icons} /><b>Contact Us</b>
        </Button>
      </ListItem>
    </List>
  );
}
