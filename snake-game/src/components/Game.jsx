import Board from './Board'
import Score from './Score'
import './Game.css'

function Game() {

  return (
    <div className="game-wrapper">
      <div className="game-header">
        <h1 className="game-title">SNAKE</h1>
      </div>

      <Score score={score} highScore={highScore} level={level} />

      <div className="board-container">
        <Board snake={snake} food={food} />

        {status === 'idle' && (
          <div className="overlay">
            <div className="overlay-content">
              <div className="overlay-logo">🐍</div>
              <p className="overlay-hint">Presiona una tecla de flecha para comenzar</p>
              <p className="overlay-keys">← ↑ ↓ → &nbsp;o&nbsp; W A S D</p>
            </div>
          </div>
        )}

        {status === 'dead' && (
          <div className="overlay overlay-dead">
            <div className="overlay-content">
              <p className="overlay-title">GAME OVER</p>
              <p className="overlay-score">puntuación final: <span>{score}</span></p>
              {score > 0 && score >= highScore && (
                <p className="overlay-record">★ nuevo record! ★</p>
              )}
              <button className="restart-btn" onClick={restart}>
                [ JUGAR DE NUEVO ]
              </button>
            </div>
          </div>
        )}
      </div>

      <p className="controls-hint">usa las teclas de flecha o WASD · come el alimento para crecer · evita las paredes</p>
    </div>
  )
}

export default Game