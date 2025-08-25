/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";


// @material-ui/icons
import { Apps, School,Home,Book,GroupAdd,Money,Pages } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="/"
          color="transparent"
          className={classes.navLink}
        >
         <Home className={classes.icons} /> Home
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Events"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/conferences" className={classes.dropdownLink}>
            Conferences
            </Link>,
            <Link to="/workshops" className={classes.dropdownLink}>
            FDPs/WorkShops/Seminars
            </Link>,
            <Link to="/journals" className={classes.dropdownLink}>
            Journals
            </Link>,
            <Link to="/patent" className={classes.dropdownLink}>
            Patents & Research
            </Link>,
            
          ]}
        />
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button
          href="/startup"
          color="transparent"
          className={classes.navLink}
        >
         <Money className={classes.icons} />StartUp Meet Investor
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button
          href="/uischool"
          color="transparent"
          className={classes.navLink}
        >
         <School className={classes.icons} />UI School
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/books"
          color="transparent"
          className={classes.navLink}
        >
         <Book className={classes.icons} /> Book Series
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/uimembership"
          color="transparent"
          className={classes.navLink}
        >
          <GroupAdd  className={classes.icons} />UI Membership
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="https://merchant.razorpay.com/policy/PJD9VRcXz7xeb7/privacy"
          color="transparent"
          className={classes.navLink}
        >
          <Pages className={classes.icons} />Policies
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/contact-us"
          color="transparent"
          className={classes.navLink}
        >
          <Pages  className={classes.icons} />Contact Us
        </Button>
      </ListItem>
      {/* <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Policies"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <a href="https://merchant.razorpay.com/policy/PJD9VRcXz7xeb7/terms" className={classes.dropdownLink} target="_blank">
            Terms and Conditions
            </a>,
            <a to="https://merchant.razorpay.com/policy/PJD9VRcXz7xeb7/refund" className={classes.dropdownLink} target="_blank">
            Cancellation & refund policy
            </a>,
            <a to="https://merchant.razorpay.com/policy/PJD9VRcXz7xeb7/privacy" className={classes.dropdownLink} target="_blank">
            Privacy Policy
            </a>
            
          ]}
        />
      </ListItem> */}
      
    </List>
  );
}
