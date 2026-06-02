import './Food.css'

const CELL = 24

function Food({ position }) {
  const cookieSrc = `${import.meta.env.BASE_URL}cookie.svg`

  return (
    <img
      src={cookieSrc}
      alt="Cookie"
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