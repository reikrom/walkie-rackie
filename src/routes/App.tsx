import React from 'react'
import {useAnimationFrame} from '../components/hooks/useAnimationFrame'

import '../styles/dino.css'
import sprites from './dino.png'

function App() {
  const dinoRef = React.useRef<HTMLImageElement>(null)
  const statsRef = React.useRef({
    speed: 3,
    isFacingRight: true,
    currentAnimation: '',
    position: {
      x: 0,
      y: 0,
    },
  })
  const controller = React.useRef<{
    inputs: Record<string, boolean>
    axis: {
      horizontal: number
      vertical: number
    }
  }>({
    inputs: {
      KeyD: false,
      KeyA: false,
      KeyW: false,
      KeyS: false,
    },
    axis: {horizontal: 0, vertical: 0},
  })

  const addPosition = (
    x: number,
    y: number,
    multiplier = 1,
    position: {
      x: number
      y: number
    },
  ): void => {
    position.x += x * multiplier
    position.y += y * multiplier
  }

  const isAcceptedKey = (key: string) => {
    return key === 'KeyW' || key === 'KeyS' || key === 'KeyA' || key === 'KeyD'
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (isAcceptedKey(e.code)) {
      controller.current.inputs[e.code] = true
    }
  }

  const handleKeyUp = (e: KeyboardEvent) => {
    if (isAcceptedKey(e.code)) {
      controller.current.inputs[e.code] = false
    }
  }

  useAnimationFrame(() => {
    const {axis, inputs} = controller.current
    let {currentAnimation} = statsRef.current
    const {position} = statsRef.current

    axis.horizontal = inputs.KeyD ? 1 : inputs.KeyA ? -1 : 0
    axis.vertical = inputs.KeyS ? 1 : inputs.KeyW ? -1 : 0

    addPosition(axis.horizontal, axis.vertical, 6, position)

    if (
      (axis.horizontal < 0 && statsRef.current.isFacingRight) ||
      (axis.horizontal > 0 && !statsRef.current.isFacingRight)
    ) {
      statsRef.current.isFacingRight = !statsRef.current.isFacingRight
    }

    if (axis.horizontal || axis.vertical != 0) {
      currentAnimation = 'running'
    } else {
      currentAnimation = 'idle'
    }

    if (dinoRef.current) {
      dinoRef.current.style.transform = `matrix(${
        statsRef.current.isFacingRight ? 1 : -1
      },0,0,1, ${position.x}, ${position.y})`

      dinoRef.current.setAttribute('data-animation-state', currentAnimation)
    }
  })

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="App flex h-screen w-full items-center justify-center bg-blue-500">
      <header className="App-header">
        <a
          className="App-link text-4xl"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div ref={dinoRef} className="dino relative overflow-hidden">
          <img className="sprite" src={sprites} />{' '}
        </div>

        <p>pumpkinseed starter project</p>
      </header>
    </div>
  )
}

export default App
