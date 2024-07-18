import React, { useState, useEffect } from 'react';
import Card from './child';
import '../styles/App.css'


function App() {
const [ids, setId] = useState([])

const randomFunc = () => {
  const newIds = [];
  while (newIds.length < 10) {
    const randomNum = Math.floor(Math.random() * 11);
    if (!newIds.includes(randomNum)) {
      newIds.push(randomNum);
    } else continue
  }
  setId(newIds);
  console.log(ids)

};
  


useEffect(() => {
  randomFunc();
}, []);


  return (  
    <>
    <div className='Heading'>
    <h1>Memory Card Game</h1>
    <p>Score:{ids[4]}</p>
    <p>Best Score:</p>

    </div>
    <div className='container'>

{ids.map((id, index) => (
  <Card key={index} id={id} onClick={randomFunc}></Card>
))}
     

    </div>
    </>
  )
}

export default App;
