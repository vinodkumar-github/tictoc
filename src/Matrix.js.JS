import React, { useState } from 'react';
import './Play.css';

function Play({ boardSize }) {
  const arrayer = Array.from({ length: boardSize }, () => Array(boardSize).fill('.'));


  const [Matrik, setMatrik] = useState(arrayer);
  const [val, setVal] = useState('X');

  const handleInputChange = (rowIndex, colIndex) => {
    if (Matrik[rowIndex][colIndex] === '.') {
      setMatrik((prevMatrix) => {
        const newMatrix = [...prevMatrix.map((row) => [...row])];
        newMatrix[rowIndex][colIndex] = val;
        setVal(val === 'X' ? 'O' : 'X');
        return newMatrix;
      });
    }
  };
  

  function createMatrix() {
    return (
      <div className="matrix-container">
        {arrayer.map((j) => (
          <div key={j} className="matrix-row">
            {arrayer[j].map( (i) => (
              <p 
                key={i}
                
                
              >
                { Matrik[j][i] }
                
              </p>
            ))}
          </div>
        ))}
      </div>
    );
  }
  

  return (
    <div className="play-wrapper">
      <h1>Tic Tac Toe</h1>
      {createMatrix()}
    </div>
  );
}

export default Play;
