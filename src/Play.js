import React, { useState } from 'react';
import './Play.css'; // Import the CSS file

function Play({ boardSize }) {
  const arrayer = Array.from({ length: boardSize }, (_, i) =>
    Array.from({ length: boardSize }, (_, j) => `${i}-${j}`)
  );

  const [Matrik, setMatrik] = useState(arrayer);
 
  const [val, setVal] = useState('X');

  const handleInputChange = (a) => {
    
    const regex = /(\d+)-(\d+)/;
    if (regex.test(a)){
    const match1 = regex.exec(a);
    const row = Number(match1[1]);
    const column = Number(match1[2]);
  
    
      const newMatrix = Matrik.map((row) => row.slice());
      newMatrix[row][column] = val;
      setMatrik(newMatrix);
      setVal(val === 'X' ? 'O' : 'X');
    
    }
  };
  

  function createMatrix() {
    return (
      <div className="matrix-container">
        {Matrik.map((row, rowIndex) => (
          <div key={rowIndex} className="matrix-row">
            {row.map((cell, colIndex) => (
              <p
                key={`${rowIndex}-${colIndex}`}
                onClick={() => {
                  handleInputChange(cell);
                }}
              >
                {Matrik[rowIndex][colIndex].toString()}
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
