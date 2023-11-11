import React, { useState } from 'react';
import Later from './Later';
import Game from './Game';
import './Initial.css'
function Initial() {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [grid, setGrid] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [gameData, setGameData] = useState({
    player1: '',
    player2: '',
    grid: '',
  });

  const handleProp = () => {
    if (gameData.player1 !== '' && gameData.player2 !== '' && gameData.grid !== '') {
      return <Later gameData={gameData} 
                    
                    setConfirmed={setConfirmed}
      />;
    }
    return null;
  };

  const handleSubmit = () => {
    setGameData({
      player1: name1,
      player2: name2,
      grid: grid,
    });
  };

  return (
    confirmed? <Game gameData={gameData} /> : (
   
    <div className='container-main'>
      <label htmlFor="player1">Player 1 Name:</label>
      <input
        id="player1"
        className="input-field"
        value={name1}
        onChange={(e) => setName1(e.target.value)}
        required
      />

      <label htmlFor="player2">Player 2 Name:</label>
      <input
        id="player2"
        className="input-field"
        value={name2}
        onChange={(e) => setName2(e.target.value)}
        required
      />

      <label htmlFor="grid">Grid Size:</label>
      <input
        type='number'
        min={3}
        id="grid"
        className="input-field"
        value={grid}
        onChange={(e) => (e.target.value > 2 )? setGrid(e.target.value): alert("Please set Grid value to 3 or more")}
        required
      />
    <div className='container-button'>
      <button onClick={handleSubmit}>Submit</button>
     
    </div>
    {handleProp()}
    </div>)
    
    
  );
}

export default Initial;
