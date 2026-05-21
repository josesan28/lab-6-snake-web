import './Food.css'

const CELL = 24

function Food({ position }) {
  return (
    <div
      className="food"
      style={{
        left: position.x * CELL,
        top: position.y * CELL,
        width: CELL,
        height: CELL,
      }}
    />
  )
}

export default Food