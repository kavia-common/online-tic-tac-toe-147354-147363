import React from 'react';

/**
 * A single square cell for Tic Tac Toe.
 * Uses a button for accessibility, with aria-pressed to indicate selection.
 */
export default function Square({ value, index, onClick, isWinning, disabled }) {
  const label = value ? `Cell ${index + 1}, ${value}` : `Cell ${index + 1}, empty`;
  const classes = [
    'square',
    value ? 'square--filled' : 'square--empty',
    isWinning ? 'square--winner' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type="button"
      className={classes}
      onClick={onClick}
      aria-label={label}
      aria-pressed={Boolean(value)}
      role="gridcell"
      disabled={disabled}
    >
      <span className="mark" data-mark={value || ''}>
        {value}
      </span>
    </button>
  );
}
