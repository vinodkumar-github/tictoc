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
            {gameData['player1']}: "X"
          </text>
        </svg>
      </div>
      
      <div className={`Game ${isXNext ? '' : 'active'}`}>
        <svg>
          <rect className={`Player2 ${isXNext ? '' : 'active'}`}></rect>
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="black">
            {gameData['player2']}: "O"
            
            
          </text>
          
        </svg>
    
      </div>
      
    </div>
    </div>
    <div className='Play'>
        <Play boardSize={boardSize} isXNext={isXNext} setIsXNext={setIsXNext} />
      </div>
    </>
  );
}

export default Game;
