import { useSnakeGame } from '../hooks/useSnakeGame'
import Board from './Board'
import Score from './Score'
import './Game.css'

function Game() {
  const { snake, food, score, highScore, status, level, speed, restart } = useSnakeGame()
  const snakeIconSrc = `${import.meta.env.BASE_URL}snake-icon.png`

  return (
    <div className="game-wrapper">
      <div className="game-header">
        <h1 className="game-title">SNAKE</h1>
      </div>

      <Score score={score} highScore={highScore} level={level} />

      <div className="board-container">
          <Board snake={snake} food={food} speed={speed} />

        {status === 'idle' && (
          <div className="overlay">
            <div className="overlay-content">
              <div className="overlay-logo">
                <img 
                  src={snakeIconSrc} 
                  alt="Snake icon"
                  className="snake-icon"
                />
              </div>
              <p className="overlay-hint">presiona una tecla de flecha para comenzar</p>
              <p className="overlay-keys">← ↑ ↓ → &nbsp;o&nbsp; W A S D</p>
            </div>
          </div>
        )}

        {status === 'dead' && (
          <div className="overlay overlay-dead">
            <div className="overlay-content">
              <p className="overlay-title">GAME OVER</p>
              <p className="overlay-score">puntaje final: <span>{score}</span></p>
              {score > 0 && score >= highScore && (
                <p className="overlay-record">★ nuevo record! ★</p>
              )}
              <button className="restart-btn" onClick={restart}>
                JUGAR OTRA VEZ
              </button>
            </div>
          </div>
        )}
      </div>

      <p className="controls-hint">usa las teclas de flecha o WASD · come galletas para crecer · evita las paredes</p>
    </div>
  )
}

export default Game
