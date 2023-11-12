import React, { useState } from 'react';
import './Play.css'; // Import the CSS file

function Play({ gameData, boardSize, isXNext, setIsXNext }) {
  const [over, setOver] = useState(false);
  const [xwins,setXwins] = useState(false);
  const [owins, setOwins] = useState(false);
  const arrayer = Array.from({ length: boardSize }, (_, i) =>
    Array.from({ length: boardSize }, (_, j) => `${i}-${j}`)
  );

  const [Matrik, setMatrik] = useState(arrayer);
  
 
  const [val, setVal] = useState('X');
  function transpose(matrix) {
    const n = matrix.length;
    const MatriK1 = matrix;
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
      
        [MatriK1[i][j], MatriK1[j][i]] = [MatriK1[j][i], MatriK1[i][j]];
      }
    }
  
    return MatriK1;
  }


  function invigilator() {
    const isMatrixFilled = Matrik.every(row => row.every(cell => cell === 'X' || cell === 'O'));
  
    const isVerticalwinX = Matrik.some(row => row.every(cell => cell === 'X'));
    const isVerticalwinO = Matrik.some(row => row.every(cell => cell === 'O'));
  
    const isdiagonal1winX = Matrik.every((row, index) => row[index] === 'X');
    const isdiagonal1winO = Matrik.every((row, index) => row[index] === 'O');
  
    const isdiagonal2winX = Matrik.every((row, index) => row[Matrik.length - 1 - index] === 'X');
    const isdiagonal2winO = Matrik.every((row, index) => row[Matrik.length - 1 - index] === 'O');
  
    const isHorizontalwinX = transpose(Matrik).some(row => row.every(cell => cell === 'X'));
    const isHorizontalwinO = transpose(Matrik).some(row => row.every(cell => cell === 'O'));
  
    if (isMatrixFilled) {
      setOver(true);
    }
  
    if (isVerticalwinX || isdiagonal1winX || isdiagonal2winX || isHorizontalwinX) {
      setXwins(true);
    }
  
    if (isVerticalwinO || isdiagonal1winO || isdiagonal2winO || isHorizontalwinO) {
      setOwins(true);
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

  function endHandler () {
    if(xwins) { return <div> <p className='Xwins'>{gameData['player1']} won the Match</p> <button onClick={() => window.location.reload()}> Reset </button> </div> };
    if(owins){ return <div> <p className='Owins'>{gameData['player2']} won the Match</p> <button onClick={() => window.location.reload()}> Reset </button> </div> }
    if(over) { return <><p className='Gameover'> Oops! Match is a Tie. Game Over.</p> <button onClick={() => window.location.reload()}> Reset</button> </>}
    else { return createMatrix()}
  }
  

  function createMatrix() {
    return ( 
       over ? (<> <p>GameOver</p> <button onClick={() => window.location.reload()}> Reset</button> </>) : 
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
      {endHandler()}
    </div>
  );
}

export default Play;
