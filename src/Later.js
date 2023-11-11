import React from 'react';


function Later({ gameData,  setConfirmed }) {
    function handleConfirm () {
        setConfirmed(true);
    }
 
  return (
   
      <div>
        <hr></hr>
        <p>Name of the Player 1 is: {gameData['player1']}</p>
        <p>Name of the Player 2 is: {gameData['player2']}</p>
        <p>Size of the grid is {gameData['grid']} x {gameData['grid']}</p>
        <button onClick={handleConfirm}>Confirm</button>
      </div>
   
  );
}

export default Later;
