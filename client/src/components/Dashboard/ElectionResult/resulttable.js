import React, { useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Electionabi from "../../../contracts/Election.json";
import Web3 from "web3";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});


export default function CustomizedTables() {

  const classes = useStyles();
  useEffect(() => {
    loadWeb3();
    LoadBlockchaindata();
  }, []);

  const [Candidate1id, setCandidate1id] = useState();
  const [Candidate1name, setCandidate1name] = useState();
  const [Candidate1votecount, setCandidate1votecount] = useState();
  const [Candidate2id, setCandidate2id] = useState();
  const [Candidate2name, setCandidate2name] = useState();
  const [Candidate2votecount, setCandidate2votecount] = useState();
  const [Candidate3id, setCandidate3id] = useState();
  const [Candidate3name, setCandidate3name] = useState();
  const [Candidate3votecount, setCandidate3votecount] = useState();
  const [Candidate4id, setCandidate4id] = useState();
  const [Candidate4name, setCandidate4name] = useState();
  const [Candidate4votecount, setCandidate4votecount] = useState();

  const highestVote = Math.max(Number(Candidate1votecount),Number(Candidate2votecount),Number(Candidate3votecount),Number(Candidate4votecount))


  function createData(id, name, votecount) {
    return { id, name, votecount };
  }
  
  const rows = [
    createData(Candidate1id,Candidate1name,Candidate1votecount),
    createData(Candidate2id,Candidate2name,Candidate2votecount),
    createData(Candidate3id,Candidate3name,Candidate3votecount),
    createData(Candidate4id,Candidate4name,Candidate4votecount),
  ];

  console.log("testcandidate ID = " + Candidate1id)

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
      const canidate1id = canidate1.id;
      const canidate1name = canidate1.name;
      const canidate1votecount = canidate1.voteCount;
      const canidate2 = await election.methods.candidates(2).call();
      const canidate2id = canidate2.id;
      const canidate2name = canidate2.name;
      const canidate2votecount = canidate2.voteCount;
      const canidate3 = await election.methods.candidates(3).call();
      const canidate3id = canidate3.id;
      const canidate3name = canidate3.name;
      const canidate3votecount = canidate3.voteCount;
      const canidate4 = await election.methods.candidates(4).call();
      const canidate4id = canidate4.id;
      const canidate4name = canidate4.name;
      const canidate4votecount = canidate4.voteCount;
      setCandidate1id(canidate1id);
      setCandidate1name(canidate1name);
      setCandidate1votecount(canidate1votecount);
      setCandidate2id(canidate2id);
      setCandidate2name(canidate2name);
      setCandidate2votecount(canidate2votecount);
      setCandidate3id(canidate3id);
      setCandidate3name(canidate3name);
      setCandidate3votecount(canidate3votecount);
      setCandidate4id(canidate4id);
      setCandidate4name(canidate4name);
      setCandidate4votecount(canidate4votecount);
    } else {
      window.alert("the smart contract is not deployed current network");
    } 
  };

  return (
      <div>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Candidate ID</StyledTableCell>
            <StyledTableCell >Name</StyledTableCell>
            <StyledTableCell >Vote Count</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell >{row.name}</StyledTableCell>
              <StyledTableCell >{row.votecount}</StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Typography>
      Highest Majority Vote : Khairul Syahirah : {highestVote} vote
    </Typography>
     </div>
  );
}