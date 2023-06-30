import { useState } from "react";


function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  //console.log("length of anecdotes",anecdotes.length);
  
  const [selected, setSelected] = useState(null);
  const [vote, setVote] = useState([0,0,0,0,0,0,0,0]);
  //const [mostVote, setMostvote] = useState(" ");
  console.log("vote" ,vote);
  let idex = null;
  if(selected != null){
    let voteSort = [...vote];
    voteSort.sort((a,b) => a-b);
    console.log("voteSort",voteSort)
    idex = vote.indexOf(voteSort[7]);
    console.log('index of large', idex);
    //setMostvote(()=>anecdotes[idex]);
  }
    
  



const onhandleRandom = () => {
  const randOfAnecdotes = Math.floor(Math.random()*(anecdotes.length));
  //console.log(randOfAnecdotes);
  //console.log(anecdotes[randOfAnecdotes]);
  return setSelected(randOfAnecdotes);
}
const handleVote = () => {
  const newVote = [...vote];
  console.log('newVote', newVote);
  newVote[selected] += 1;
  return setVote(newVote);
}

  return (
    <div>
      <h1>App component.</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {vote[selected]} votes</p>
      <button onClick={handleVote}>Vote</button>
      <button onClick={onhandleRandom}>next anecdote</button>
      <h2>anecdote with most votes</h2>
      <p>{anecdotes[idex]}</p>
      <p>has {vote[idex]} votes</p>
    </div>
  );
}

export default App;
