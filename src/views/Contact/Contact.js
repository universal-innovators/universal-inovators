import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography } from "@material-ui/core";
import { LocationOn, Email, Language, Person } from "@material-ui/icons"; // icons

import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import StartupHeader from "components/Header/StartupHeader";
import Parallax from "components/Parallax/Parallax.js";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import CharPose from "../LandingPage/Sections/CharPose.js";
import ParticlesContainer from "components/Particle/Particle.js";
import rocket from "assets/img/rocket2.gif";
import HeaderLinks from "components/Header/HeaderLinks.js";

const dashboardRoutes = [];
const useStyles = makeStyles(styles);

export default function Contact(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const flex = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "info",
        }}
        {...rest}
      />

      <Parallax filter responsive style={{ backgroundColor: "#28a796" }}>
        <ParticlesContainer />
        <div className={classes.container}>
          <GridContainer style={flex}>
            <GridItem xs={12} sm={12} md={6}>
              <br />
              <h2 className={classes.title}>
                <CharPose text="Contact Us" />
              </h2>
              <br />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <br />
              <img
                src={rocket}
                style={{
                  maxWidth: "100%",
                  opacity: "0.8",
                  borderRadius: "100% 100% 0% 0%",
                }}
              />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main)}>
        <div className={classes.container}>
          <div
            className={classes.section}
            style={{ display: "flex", flexDirection:"column",justifyContent: "center" }}
          >
            <h3
              className={classes.title}
              style={{ textAlign: "center", color: "black" }}
            >
              Reach Out To Us
            </h3>

            <GridContainer justify="center" style={{ marginTop: "20px" }}>
              <GridItem xs={12} sm={10} md={8}>
                <Card
                  style={{
                    borderRadius: "16px",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                    padding: "20px",
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="body1"
                      style={{ color: "#000", marginBottom: "12px" }}
                    >
                      <Person style={{ verticalAlign: "middle" }} />{" "}
                      <b>Name:</b> Ashish Khanna (Director)
                    </Typography>

                    <Typography
                      variant="body1"
                      style={{ color: "#000", marginBottom: "12px" }}
                    >
                      <LocationOn style={{ verticalAlign: "middle" }} />{" "}
                      <b>Address:</b> H-1/56-57, First Floor, Sector-16,
                      Rohini, Rohini Sector 15, North West Delhi, Delhi-110089
                    </Typography>

                    <Typography
                      variant="body1"
                      style={{ color: "#000", marginBottom: "12px" }}
                    >
                      <Language style={{ verticalAlign: "middle" }} />{" "}
                      <b>Web:</b>{" "}
                      <a
                        href="https://universal-inovators.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#28a796", fontWeight: "500" }}
                      >
                        universal-inovators.com
                      </a>
                    </Typography>

                    <Typography
                      variant="body1"
                      style={{ color: "#000" }}
                    >
                      <Email style={{ verticalAlign: "middle" }} />{" "}
                      <b>Email:</b>{" "}
                      <a
                        href="mailto:chair@universal-inovators.com"
                        style={{ color: "#28a796", fontWeight: "500" }}
                      >
                        chair@universal-inovators.com
                      </a>
                    </Typography>
                  </CardContent>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
          <br />
        </div>

        <Footer />
      </div>
    </div>
  );
}
