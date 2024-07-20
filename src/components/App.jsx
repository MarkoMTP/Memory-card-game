import React, { useState, useEffect } from 'react';
import Card from './child';
import '../styles/App.css';

function App() {
  const [ids, setIds] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const handleClick = (id) => {
    if (!id.isClicked) {
      setCurrentScore((prevScore) => {
        const newScore = prevScore + 1;
        if (newScore > bestScore) {
          setBestScore(newScore);
        }
        return newScore;
      });

      setIds((prevIds) =>
        prevIds.map((item) =>
          item.randomNum === id.randomNum ? { ...item, isClicked: true } : item
        )
      );

      setIds((prevIds) => shuffleArray(prevIds));
    } else {
      randomFunc();
      setCurrentScore(0);
    }
  };

  const randomFunc = () => {
    const newIds = [];
    while (newIds.length < 10) {
      const randomNum = Math.floor(Math.random() * 10) + 1; // IDs from 1 to 10
      if (!newIds.some(idObj => idObj.randomNum === randomNum)) {
        newIds.push({ randomNum, isClicked: false });
      }
    }
    setIds(newIds);
    console.log("randomized");
  };

  function shuffleArray(array) {
    const newArray = array.slice();
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }

    // Ensure no item is in its original position
    for (let k = 0; k < newArray.length; k++) {
      if (newArray[k].randomNum === array[k].randomNum) {
        const swapIndex = (k + 1) % newArray.length;
        [newArray[k], newArray[swapIndex]] = [newArray[swapIndex], newArray[k]];
      }
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
        <p>Score: {currentScore}</p>
        <p>Best Score: {bestScore}</p>
      </div>
      <div className='container'>
        {ids.map((id, index) => (
          <Card key={index} id={id.randomNum} onClick={() => handleClick(id)} />
        ))}
      </div>
    </>
  );
}

export default App;
