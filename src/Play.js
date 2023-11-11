import React, { useState } from 'react';
import './Play.css'; // Import the CSS file

function Play({ boardSize, isXNext, setIsXNext }) {
  const [over, setOver] = useState(false);
  const arrayer = Array.from({ length: boardSize }, (_, i) =>
    Array.from({ length: boardSize }, (_, j) => `${i}-${j}`)
  );

  const [Matrik, setMatrik] = useState(arrayer);
  
 
  const [val, setVal] = useState('X');

  function invigilator() {
    const isMatrixFilled = Matrik.every(row => row.every(cell => cell === 'X' || cell === 'O'));
  
    if (isMatrixFilled) {
     
      setOver(true);
      setOver(true);
     
    }
  }
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
      setIsXNext(isXNext === true? false : true);
      
      invigilator();
    }
    invigilator();
    
  };
  

  function createMatrix() {
    return ( 
      <div className="matrix-container">
        {Matrik.map((row, rowIndex) => (
          <div key={rowIndex} className="matrix-row">
            {row.map((cell, colIndex) => {
              const cellValue = Matrik[rowIndex][colIndex].toString();
              const isXorO = cellValue === 'X' || cellValue === 'O';

              const cellClassName = `cell ${isXorO ? cellValue : 'hidden'}`;

              return (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  className={cellClassName}
                  onClick={() => {
                    handleInputChange(cell);
                  }}
                  
                >
                  {isXorO && <span>{cellValue}</span>}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="play-wrapper">
      <h1 className="game-title">Tic Tac Toe</h1>
      { over ? <><p>GameOver</p> <button onClick={() => window.location.reload()}> Reset</button> </>: createMatrix()}
    </div>
  );
}

export default Play;
