import React, { useMemo, useState } from 'react';
import Board from './Board';

/**
 * Calculate winner for Tic Tac Toe.
 * Returns an object { winner: 'X'|'O', line: number[] } or null if no winner.
 */
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], // rows
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], // cols
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], // diagonals
    [2, 4, 6],
  ];

  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: [a, b, c] };
    }
  }
  return null;
}

/**
 * Determine if the board is in a draw state (all filled and no winner)
 */
function isDrawState(squares) {
  return squares.every(Boolean) && !calculateWinner(squares);
}

// PUBLIC_INTERFACE
export default function Game() {
  /**
   * Manages game state for Tic Tac Toe.
   * - squares: array of 9 cells with 'X'|'O'|null
   * - xIsNext: boolean indicating next player
   */
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const result = useMemo(() => calculateWinner(squares), [squares]);
  const draw = useMemo(() => isDrawState(squares), [squares]);

  const nextPlayer = xIsNext ? 'X' : 'O';

  // PUBLIC_INTERFACE
  const handleSquareClick = (index) => {
    // Prevent move on occupied cell or after game over
    if (squares[index] || result || draw) return;

    const next = squares.slice();
    next[index] = nextPlayer;
    setSquares(next);
    setXIsNext(!xIsNext);
  };

  // PUBLIC_INTERFACE
  const restart = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  let statusText = `Next player: ${nextPlayer}`;
  let statusClass = 'status';
  if (result) {
    statusText = `Winner: ${result.winner}`;
    statusClass += ' status--winner';
  } else if (draw) {
    statusText = 'It’s a draw';
    statusClass += ' status--draw';
  }

  return (
    <section className="game-card" aria-label="Tic Tac Toe Board">
      <div className={statusClass} role="status" aria-live="polite">
        {statusText}
      </div>

      <Board
        squares={squares}
        onSquareClick={handleSquareClick}
        winningLine={result ? result.line : []}
        gameOver={Boolean(result) || draw}
      />

      <div className="controls">
        <button
          type="button"
          className="btn-primary"
          onClick={restart}
          aria-label="Restart game"
        >
          Restart
        </button>
      </div>
    </section>
  );
}

export { calculateWinner };
