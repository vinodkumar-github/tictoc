import React from 'react';

function Cell({ value, onClick }) {
  const cellClassName = 'cell' +
    (value === 'X' ? ' X' : '') +
    (value === 'O' ? ' O' : '');

  return (
    <div className={cellClassName} onClick={onClick}>
      {value && <span>{value}</span>}
    </div>
  );
}

export default Cell;
