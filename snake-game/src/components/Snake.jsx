import './Snake.css'

const CELL = 24

function getDirection(from, to) {
  if (!from || !to) return 'right'
  if (to.x > from.x) return 'right'
  if (to.x < from.x) return 'left'
  if (to.y > from.y) return 'down'
  return 'up'
}

function Snake({ segments }) {
  const headDirection = getDirection(segments[1], segments[0])
  const tailIndex = segments.length - 1
  const tailDirection = getDirection(segments[tailIndex - 1], segments[tailIndex])

  return (
    <>
      {segments.map((seg, index) => {
        const isHead = index === 0
        const isTail = index === tailIndex
        let bodyClass = 'snake-body'

        if (index >= 1 && index <= 8) bodyClass += ` seg-${index}`
        else if (index > 8) bodyClass += ' seg-far'

        return (
          <div
            key={index}
            className={[
              'snake-segment',
              isHead ? `snake-head dir-${headDirection}` : bodyClass,
              isTail ? `snake-tail dir-${tailDirection}` : '',
            ].join(' ').trim()}
            style={{
              left: seg.x * CELL,
              top: seg.y * CELL,
              width: CELL,
              height: CELL,
            }}
          >
            {isHead && (
              <>
                <span className="snake-eye snake-eye-left" />
                <span className="snake-eye snake-eye-right" />
              </>
            )}
          </div>
        )
      })}
    </>
  )
}

export default Snake
