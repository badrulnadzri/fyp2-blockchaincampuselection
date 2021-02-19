import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Container,Typography} from '@material-ui/core/';
import Electionabi from "../../../contracts/Election.json";
import Web3 from "web3";
import {PieChart, Pie, Legend, Tooltip, Cell} from 'recharts'

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


  const [Candidate1votecount, setCandidate1votecount] = useState();
  const [Candidate2votecount, setCandidate2votecount] = useState();
  const [Candidate3votecount, setCandidate3votecount] = useState();
  const [Candidate4votecount, setCandidate4votecount] = useState();

  var totalvote = Number(Candidate1votecount)+Number(Candidate2votecount)+Number(Candidate3votecount)+Number(Candidate4votecount)
  var notvoted = 50-totalvote;

 const data01 = [{name: 'Voted', value: totalvote}, {name: 'Not Vote', value: notvoted}]
 const COLORS = ['#0088FE', '#8884d8'];

  


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
        const canidate1votecount = canidate1.voteCount;
        const canidate2 = await election.methods.candidates(2).call();
        const canidate2votecount = canidate2.voteCount;
        const canidate3 = await election.methods.candidates(3).call();
        const canidate3votecount = canidate3.voteCount;
        const canidate4 = await election.methods.candidates(4).call();
        const canidate4votecount = canidate4.voteCount;
        setCandidate1votecount(canidate1votecount);
        setCandidate2votecount(canidate2votecount);
        setCandidate3votecount(canidate3votecount);
        setCandidate4votecount(canidate4votecount);
    } else {
      window.alert("the smart contract is not deployed current network");
    } 
  };
  return (
    <Container className = {classes.centerized}>
            <Typography variant ="h5">
                Voter Turnout
            </Typography>
        <PieChart width={350} height={250}>
        <Pie dataKey="value" isAnimationActive={false} data={data01}  outerRadius={90} fill="#8884d8" label>
            {data01.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)}
        </Pie>
        <Tooltip />
        <Legend verticalAlign="bottom" height={36}/>
      </PieChart>
      <Typography align="center" >
                Current Total Voter: 50
            </Typography>
    </Container>
  );
}