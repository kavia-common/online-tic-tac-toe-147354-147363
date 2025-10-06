import React from 'react';
import './styles.css';
import Game from './components/Game';

// PUBLIC_INTERFACE
function App() {
  /**
   * High-level app wrapper that applies the Ocean Professional background
   * and centers the Game component.
   */
  return (
    <div className="app-root">
      <main className="app-container" aria-label="Tic Tac Toe Game">
        <header className="app-header">
          <h1 className="app-title">Tic Tac Toe</h1>
          <p className="app-subtitle">Ocean Professional</p>
        </header>
        <Game />
        <footer className="app-footer" aria-hidden="true">
          <span>Built with React</span>
        </footer>
      </main>
    </div>
  );
}

export default App;
