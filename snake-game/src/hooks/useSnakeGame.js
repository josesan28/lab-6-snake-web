import { useState, useEffect, useCallback, useRef } from 'react'

const GRID_SIZE = 20

const DIRECTIONS = {
  ArrowUp:    { x: 0,  y: -1 },
  ArrowDown:  { x: 0,  y:  1 },
  ArrowLeft:  { x: -1, y:  0 },
  ArrowRight: { x: 1,  y:  0 },
  w: { x: 0,  y: -1 },
  s: { x: 0,  y:  1 },
  a: { x: -1, y:  0 },
  d: { x: 1,  y:  0 },
}

const OPPOSITE = {
  ArrowUp: 'ArrowDown', ArrowDown: 'ArrowUp',
  ArrowLeft: 'ArrowRight', ArrowRight: 'ArrowLeft',
  w: 's', s: 'w', a: 'd', d: 'a',
}

export const LEVELS = [
  { label: 'I',   speed: 180, threshold: 0   },
  { label: 'II',  speed: 140, threshold: 30  },
  { label: 'III', speed: 110, threshold: 70  },
  { label: 'IV',  speed: 85,  threshold: 120 },
  { label: 'V',   speed: 65,  threshold: 180 },
]

function getLevel(score) {
  let level = LEVELS[0]
  for (const l of LEVELS) {
    if (score >= l.threshold) level = l
  }
  return level
}

function randomFood(snake) {
  let pos
  do {
    pos = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    }
  } while (snake.some(s => s.x === pos.x && s.y === pos.y))
  return pos
}

const INITIAL_SNAKE = [
  { x: 10, y: 10 },
  { x: 9,  y: 10 },
  { x: 8,  y: 10 },
]
const INITIAL_FOOD = { x: 15, y: 10 }

export function useSnakeGame() {
  const [snake, setSnake] = useState(INITIAL_SNAKE)
  const [food, setFood] = useState(INITIAL_FOOD)
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [status, setStatus] = useState('idle')

  const directionRef = useRef({ x: 1, y: 0 })
  const currentKeyRef = useRef('ArrowRight')
  const snakeRef = useRef(INITIAL_SNAKE)
  const foodRef = useRef(INITIAL_FOOD)
  const scoreRef = useRef(0)

  const handleKeyDown = useCallback((e) => {
    const key = e.key
    if (!DIRECTIONS[key]) return
    e.preventDefault()
    if (OPPOSITE[currentKeyRef.current] === key) return
    currentKeyRef.current = key
    directionRef.current = DIRECTIONS[key]
    setStatus(prev => prev === 'idle' ? 'playing' : prev)
  }, [])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  const speed = getLevel(score).speed

  useEffect(() => {
    if (status !== 'playing') return

    const interval = setInterval(() => {
      const dir = directionRef.current
      const prev = snakeRef.current
      const head = prev[0]
      const newHead = { x: head.x + dir.x, y: head.y + dir.y }

      // Colisión con paredes
      if (newHead.x < 0 || newHead.x >= GRID_SIZE || newHead.y < 0 || newHead.y >= GRID_SIZE) {
        setStatus('dead')
        return
      }

      // Colisión con sí mismo
      if (prev.some(s => s.x === newHead.x && s.y === newHead.y)) {
        setStatus('dead')
        return
      }

      const ateFood = newHead.x === foodRef.current.x && newHead.y === foodRef.current.y

      const newSnake = ateFood ? [newHead, ...prev] : [newHead, ...prev.slice(0, -1)]
      snakeRef.current = newSnake
      setSnake([...newSnake])

      if (ateFood) {
        const newScore = scoreRef.current + 10
        scoreRef.current = newScore
        setScore(newScore)
        setHighScore(h => Math.max(h, newScore))

        const newFood = randomFood(newSnake)
        foodRef.current = newFood
        setFood(newFood)
      }
    }, speed)

    return () => clearInterval(interval)
  }, [status, speed])

  const restart = useCallback(() => {
    snakeRef.current = INITIAL_SNAKE
    foodRef.current = INITIAL_FOOD
    directionRef.current = { x: 1, y: 0 }
    currentKeyRef.current = 'ArrowRight'
    scoreRef.current = 0

    setSnake(INITIAL_SNAKE)
    setFood(INITIAL_FOOD)
    setScore(0)
    setStatus('idle')
  }, [])

  return { snake, food, score, highScore, status, level: getLevel(score), speed, restart }
}
