import Snake from './Snake'
import Food from './Food'
import './Board.css'

const GRID_SIZE = 20

function Board({ snake, food, speed }) {
  return (
    <div className="board">
      <Snake segments={snake} speed={speed} />
      <Food position={food} />
    </div>
  )
}

export default Board
export { GRID_SIZE }
