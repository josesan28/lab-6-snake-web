import Snake from './Snake.jsx'
import Food from './Food'
import './Board.css'

const GRID_SIZE = 20

function Board({ snake, food }) {
  return (
    <div className="board">
      <Snake segments={snake} />
      <Food position={food} />
    </div>
  )
}

export default Board
export { GRID_SIZE }
