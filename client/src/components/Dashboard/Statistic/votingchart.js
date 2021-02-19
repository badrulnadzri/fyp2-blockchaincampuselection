import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Container,Typography} from '@material-ui/core/';
import Electionabi from "../../../contracts/Election.json";
import Web3 from "web3";
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'

const useStyles = makeStyles({
  centerized: {
    margin:"auto",
  },
});

export default function CurrentTime() {
    const classes = useStyles();

  useEffect(() => {
    loadWeb3();
    LoadBlockchaindata();
  }, []);

  const [Candidate1name, setCandidate1name] = useState();
  const [Candidate1votecount, setCandidate1votecount] = useState();
  const [Candidate2name, setCandidate2name] = useState();
  const [Candidate2votecount, setCandidate2votecount] = useState();
  const [Candidate3name, setCandidate3name] = useState();
  const [Candidate3votecount, setCandidate3votecount] = useState();
  const [Candidate4name, setCandidate4name] = useState();
  const [Candidate4votecount, setCandidate4votecount] = useState();

  var totalvote = Number(Candidate1votecount)+Number(Candidate2votecount)+Number(Candidate3votecount)+Number(Candidate4votecount)
  var notvoted = 50-totalvote;

  const data = [
    {name: Candidate1name,  votecount: Candidate1votecount,},
    {name: Candidate2name,  votecount: Candidate2votecount,},
    {name: Candidate3name,  votecount: Candidate3votecount,},
    {name: Candidate4name,  votecount: Candidate4votecount,},
    {name: "Not Voted" ,  votecount: notvoted,},

];

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
    const web3 = window.web3;
    const networkId = await web3.eth.net.getId();
    const networkData = Electionabi.networks[networkId];
        if (networkData) {
        const election = new web3.eth.Contract(
            Electionabi.abi,
            networkData.address
        );
        const canidate1 = await election.methods.candidates(1).call();
        const canidate1name = canidate1.name;
        const canidate1votecount = canidate1.voteCount;
        const canidate2 = await election.methods.candidates(2).call();
        const canidate2name = canidate2.name;
        const canidate2votecount = canidate2.voteCount;
        const canidate3 = await election.methods.candidates(3).call();
        const canidate3name = canidate3.name;
        const canidate3votecount = canidate3.voteCount;
        const canidate4 = await election.methods.candidates(4).call();
        const canidate4name = canidate4.name;
        const canidate4votecount = canidate4.voteCount;
        setCandidate1name(canidate1name);
        setCandidate1votecount(canidate1votecount);
        setCandidate2name(canidate2name);
        setCandidate2votecount(canidate2votecount);
        setCandidate3name(canidate3name);
        setCandidate3votecount(canidate3votecount);
        setCandidate4name(canidate4name);
        setCandidate4votecount(canidate4votecount);
    } else {
      window.alert("the smart contract is not deployed current network");
    } 
  };

  return (
    <Container className = {classes.centerized}>
            <Typography variant ="h5">
                Current Standing
            </Typography>
            <BarChart width={700} height={300} data={data}
            margin={{top: 40, right: 30, left: 20, bottom: 5}}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name"/>
            <YAxis domain={[0, 25]} />
            <Tooltip/>
            <Legend />
            <Bar dataKey="votecount" fill="#8884d8" />
            </BarChart>
    </Container>
  );
}