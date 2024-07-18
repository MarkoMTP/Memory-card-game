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
    }
  }
  setId(newIds);
};

useEffect(() => {
  randomFunc();
}, []);


  return (
    <div className='container'>

      <Card id={ids[0]} >2</Card>
      <Card id={ids[1]} >2</Card>
      <Card id={ids[2]} >2</Card>
      <Card id={ids[3]} >2</Card>
      <Card id={ids[4]} >2</Card>
      <Card id={ids[5]} >2</Card>
      <Card id={ids[6]} >2</Card>
      <Card id={ids[7]} >2</Card>
      <Card id={ids[8]} >2</Card>
      <Card id={ids[9]} >2</Card>

     

    </div>
  )
}

export default App;
