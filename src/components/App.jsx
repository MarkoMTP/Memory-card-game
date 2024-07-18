import React, { useState, useEffect } from 'react';
import Card from './child';
import '../styles/App.css'


function App() {
const [ids, setIds] = useState([])
const [currentScore, setCurrentScore] = useState(0)
const [bestScore, setBestScore] = useState(0)

const handleClick = (id) => {
if(!id.isClicked) {

setCurrentScore((prevScore) => prevScore + 1) 
if(currentScore > bestScore) {
  setBestScore(currentScore)
  
}
id.isClicked = true;
setIds((prevIds) => shuffleArray(prevIds));
console.log(ids)

} else {
  randomFunc()
  if(currentScore > bestScore) {
    setBestScore(currentScore)
  }
  setCurrentScore(0) 
}
}

const randomFunc = () => {
  const newIds = [];
  while (newIds.length < 10) {
    const randomNum = Math.floor(Math.random() * 10);
    if (!newIds.some(idObj => idObj.randomNum === randomNum)) {
      newIds.push({ randomNum, isClicked: false });
    }
  }
  setIds(newIds);
  console.log()
};

function shuffleArray(array) {
  const newArray = array.slice();
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}
  


useEffect(() => {
  randomFunc();
}, []);


  return (  
    <>
    <div className='Heading'>
    <h1>Memory Card Game</h1>
    <p>Score:{currentScore}</p>
    <p>Best Score:{bestScore}</p>

    </div>
    <div className='container'>

{ids.map((id, index) => (
  <Card key={index} id={id.randomNum} onClick={() => handleClick(id)}></Card>
))}
     

    </div>
    </>
  )
}




export default App;
