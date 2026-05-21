import './Snake.css'

const CELL = 24

function Snake({ segments }) {
  return (
    <>
      {segments.map((seg, index) => {
        const isHead = index === 0
        return (
          <div
            key={index}
            className={`snake-segment ${isHead ? 'snake-head' : 'snake-body'}`}
            style={{
              left: seg.x * CELL,
              top: seg.y * CELL,
              width: CELL,
              height: CELL,
            }}
          />
        )
      })}
    </>
  )
}

export default Snake