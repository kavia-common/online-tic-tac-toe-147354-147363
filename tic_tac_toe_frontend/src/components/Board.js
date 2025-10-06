import React from 'react';
import Square from './Square';

/**
 * Board renders a 3x3 grid of Square components
 * and highlights the winning line when present.
 */
export default function Board({ squares, onSquareClick, winningLine = [], gameOver }) {
  return (
    <div
      className="board"
      role="grid"
      aria-label="Tic Tac Toe grid"
      aria-readonly={gameOver ? 'true' : 'false'}
    >
      {squares.map((value, idx) => {
        const isWinning = winningLine.includes(idx);
        return (
          <Square
            key={idx}
            value={value}
            index={idx}
            onClick={() => onSquareClick(idx)}
            isWinning={isWinning}
            disabled={Boolean(value) || gameOver}
          />
        );
      })}
    </div>
  );
}
