import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
import LinkIcon from '@material-ui/icons/Link';
// core components
import GridContainer from "../components/Grid/GridContainer";
import GridItem from "../components/Grid/GridItem.js";
import InfoArea from "../components/InfoArea/InfoArea.js";

import styles from "../jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Blockchain Campus Election</h2>
          <h5 className={classes.description}>
            The peer-to-peer technology that employs encryption and a write-once,
            append-many electronic ledger to allow private and secure registration information and
            ballots to be transmitted over the internet.
            more.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Smart Contract"
              description="Admin do not have the ability as everything will be control by Smart Contract"
              icon={LinkIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Vote Verification"
              description="A transaction is generated as soon as the vote is mined by the miners which is unique for each vote, then the voter can track his vote in the ledger using the unique hash provided."
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Security"
              description="The chain that contain the vote is replicated, cryptographically signed and publicly verifiable at every transaction so that no-one can tamper with the data that has been written onto the blockchain
              "
              icon={Fingerprint}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
