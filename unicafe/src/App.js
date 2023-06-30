import { useState } from "react";

const Statistic = ({arrVal}) => {
  console.log("arrVal", arrVal);
  let all = arrVal[0] + arrVal[1] + arrVal[2];
  let average = (arrVal[0] - arrVal[2])/all;
  let positive = (arrVal[0]*100)/all;

  if(arrVal[0] === 0 && arrVal[1] === 0 && arrVal[2] === 0) {
    return (

      <div>
        <h4>No feedback given.</h4>
      </div>
      
    )
}else{
  return (
    <div>

      <Statisticline text='good' val={arrVal[0]} />
      <Statisticline text='neutral' val={arrVal[1]} />
      <Statisticline text='bad' val={arrVal[2]} />
      <Statisticline text='all' val={all} />
      <Statisticline text='average' val={average} />
      <Statisticline text='positive' val={positive} />
      
    </div>
  )
}
}

const Statisticline = ({text,val}) => {
  return (
    
      <table>
        <thead>
          <tr>
            <td>{text}</td>
            <td>{val} {text === "positive"? "%" : " "}</td>
          </tr>
        </thead>
            
      </table>  
        
      
       
    
  )
}

function App() {
  const [good,setGood] = useState(0);
  const [neutral,setNeutral] = useState(0);
  const [bad,setBad] = useState(0);
  const val = [good,neutral,bad];
  console.log("val",val);
  const handleClickgood = () => setGood(good + 1);
  const handleClickneutral = () => setNeutral(neutral + 1);
  const handleClickbad = () => setBad(bad + 1);
  console.log("good", good + " neutral", neutral + " bad", bad);
  
  
  return (
    <div>
      <h1>Give Feedback.</h1>
      <button onClick={handleClickgood}>good</button>
      <button onClick={handleClickneutral}>neutral</button>
      <button onClick={handleClickbad}>bad</button>
      <h2>Statistic</h2>
      <Statistic arrVal={val}/>
    </div>
  );
}

export default App;
