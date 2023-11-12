import React from 'react';
import { useState } from 'react';

import './Game.css';
import Play from './Play';

function Game({ gameData }) {
  const [isXNext, setIsXNext] = useState(true);
  const boardSize = gameData['grid'];

  return (
    <>
    <br /><br /><br /><br /><br />
    <div>
    <div className='GameContainer'>
    
      <div className={`Game ${isXNext ? 'active' : ''}`}>
        <svg>
          <rect className={`Player1 ${isXNext ? 'active' : ''}`}></rect>
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="black">
          "X": {gameData['player1']}
          </text>
        </svg>
      </div>
      
      <div className={`Game ${isXNext ? '' : 'active'}`}>
        <svg>
          <rect className={`Player2 ${isXNext ? '' : 'active'}`}></rect>
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="black">
          "O": {gameData['player2']}: 
            
            
          </text>
          
        </svg>
    
      </div>
      
    </div>
    </div>
    <div className='Play'>
        <Play gameData ={gameData} boardSize={boardSize} isXNext={isXNext} setIsXNext={setIsXNext} />
      </div>
    </>
  );
}

export default Game;
