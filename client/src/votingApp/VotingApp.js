import React, { useEffect, useState } from "react";
import Web3 from "web3";
import { makeStyles } from '@material-ui/core/styles';
import Electionabi from "../contracts/Election.json";
import Navbar from "../components/Navbar";
import Body from "./Body";
import { Backdrop, CircularProgress,} from '@material-ui/core';
import {Button, Paper, Typography, Container,Box} from '@material-ui/core/';
import {Link} from 'react-router-dom';
//import emailjs from 'emailjs-com';


const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

function App() {
  useEffect(() => {
    loadWeb3();
    LoadBlockchaindata();
  }, []);
  
  const [open, setOpen] = React.useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };



  const [Currentaccount, setCurrentaccount] = useState("");
  const [loader, setloader] = useState(true);
  const [Electionsm, SetElectionsm] = useState();
  const [Candidate1, setCandidate1] = useState();
  const [Candidate2, setCandidate2] = useState();
  const [Candidate3, setCandidate3] = useState();
  const [Candidate4, setCandidate4] = useState();
  const [voteState, setVoteStatus] = useState(false);
  const [receipthash, setReceipt] = useState("");
  

  const classes = useStyles();
  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  };

  const LoadBlockchaindata = async () => {
    setloader(true);
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    setCurrentaccount(account);
    const networkId = await web3.eth.net.getId();
    const networkData = Electionabi.networks[networkId];

    if (networkData) {
      const election = new web3.eth.Contract(
        Electionabi.abi,
        networkData.address
      );
      const canidate1 = await election.methods.candidates(1).call();
      // const canidate1id = canidate1.id;
      // const canidate1name = canidate1.name;
      // const canidate1votecount = canidate1.voteCount;
      const canidate2 = await election.methods.candidates(2).call();
      const canidate3 = await election.methods.candidates(3).call();
      const canidate4 = await election.methods.candidates(4).call();
      // const canidate2id = canidate1.id;
      // const canidate2name = canidate2.name;
      // const canidate2votecount = canidate2.voteCount;
      setCandidate1(canidate1);
      setCandidate2(canidate2);
      setCandidate3(canidate3);
      setCandidate4(canidate4);
      SetElectionsm(election);
      setloader(false);
    } else {
      window.alert("the smart contract is not deployed current network");
    } 
  };

  const votecanidate = async (canidateid) => {
    setloader(true);
    await Electionsm.methods
      .vote(canidateid)
      .send({ from: Currentaccount })
      .on('transactionHash', function(hash){
        console.log("transactionhash = " + hash);
        setReceipt(hash);
      })
    //console.log("checking transactionreceipt");  
    setloader(false);
    setVoteStatus(true)
    handleToggle();  
  };
  
  console.log('donevote = ' + voteState)


  if (voteState===true) {
    // history.push("/doneVote", { from: "VotingApp" })
  //   function sendEmail() {
  //   var templateParams = {
  //   hash: receipthash
  //   };
  //   emailjs.sendForm('service_da2j519', 'template_igneob5', templateParams, 'user_HKvitM4ntkcQNYn6ktu48') 
  // }
   
    return(
      <Backdrop className={classes.backdrop} open={open}>
        <Container maxWidth="xl">
            <Paper style={{padding:"50px" }}>
                <Typography variant="h3" align="center" className={classes.textspacing}>
                    Congratulation, you have completed the voting process!
                </Typography>
                <Typography variant="h5" align="center" className={classes.textspacing}>
                    Below are your Transaction Receipt:
                </Typography>
                <Typography variant="h4" align="center" style={{paddingTop:"30px", paddingBottom:"30px" }}>
                    {receipthash}
                </Typography>
                <Typography variant="body1" align="center" style={{ paddingBottom:"10px" }}>
                    Copy the transaction hash to website such as etherscan.io to verify your vote!<br/>
                    Please keep the transaction receipt for your future reference!
                </Typography>
                <Link to="/" style={{ textDecoration: 'none' , color:"#808080" }}>
                <Box display="flex" flexDirection="column" >
                  
                    <Button variant="contained" color="primary" >
                        Log Out
                    </Button>

                </Box>
                </Link>
                {/* <Button variant="contained" color="primary" onClick={sendEmail}   >
                      Send Receipt To Email
                  </Button> */}
                
            </Paper>
        </Container>
      </Backdrop>
    )
  }



  if (loader) {
    return (
    <div>loading blockchain data...
     
     <Backdrop className={classes.backdrop}>
        <CircularProgress color="inherit" />
    </Backdrop>
    </div>
    )
  }
  
  return (
    
    <div>
      <Navbar account={Currentaccount} />
      <Body
        canidate1={Candidate1}
        canidate2={Candidate2}
        canidate3={Candidate3}
        canidate4={Candidate4}
        votecanidate={votecanidate}
        account={Currentaccount}
        doneVote={voteState}
      />
    </div>
  );
}

export default App;
