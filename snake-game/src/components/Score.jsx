import './Score.css'

function Score({ score, highScore, level }) {
  return (
    <div className="score-bar">
      <div className="score-item">
        <span className="score-label">PUNTAJE</span>
        <span className="score-value">{String(score).padStart(4, '0')}</span>
      </div>
      <div className="score-divider">|</div>
      <div className="score-item">
        <span className="score-label">MEJOR</span>
        <span className="score-value score-best">{String(highScore).padStart(4, '0')}</span>
      </div>
      <div className="score-divider">|</div>
      <div className="score-item">
        <span className="score-label">NIVEL</span>
        <span className="score-value score-level">{level.label}</span>
      </div>
    </div>
  )
}

export default Score