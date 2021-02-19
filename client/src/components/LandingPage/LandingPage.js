import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer.js";
import GridContainer from "./components/Grid/GridContainer.js";
import GridItem from "./components/Grid/GridItem.js";
import Button from "./components/CustomButtons/Button.js";
import HeaderLinks from "./components/Header/HeaderLinks.js";
import Parallax from "./components/Parallax/Parallax.js";
import styles from "./jss/material-kit-react/views/landingPage";
import {Link} from 'react-router-dom';


// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
//import Carosell from "./Sections/Carosell"

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        brand="University of Malaya Campus Election"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax filter image={require("./img/7456.png")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>University of Malaya Campus Election</h1>
              <h4>A Voting System with integrated Blockchain Environment!</h4>
              <br />
              <Link to="/Login" style={{ textDecoration: 'none' }}>
                <Button color="danger" size="lg" className={classes.navLink}>
                  Start Voting!
                </Button>
              </Link>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          {/* <Carosell /> */}
          <ProductSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
