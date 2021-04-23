import './App.css';
import { useState, useEffect } from 'react';

import Level2 from './levels/Level2'
import IPosition from './interfaces/IPosition'

function getDirection(event: KeyboardEvent, playerDirection) {
  switch (event.code) {
    case 'ArrowLeft':
      return 'LEFT'
    case 'ArrowRight':
      return 'RIGHT'
    case 'ArrowDown':
      return 'DOWN'
    case 'ArrowUp':
      return 'UP'
    default:
      return playerDirection;
  }
}

function calculateNextPosition(chip: { col: number; row: number }, event: KeyboardEvent) {
  const nextPosition = { ...chip }
  switch (event.code) {
    case 'ArrowLeft':
      nextPosition.col = nextPosition.col - 1
      break;
    case 'ArrowRight':
      nextPosition.col = nextPosition.col + 1
      break;
    case 'ArrowDown':
      nextPosition.row = nextPosition.row + 1
      break;
    case 'ArrowUp':
      nextPosition.row = nextPosition.row - 1
      break;
    default:
      break
  }
  return nextPosition
}

function App() {
  type direction =  'UP' | 'DOWN' | 'LEFT' | 'RIGHT'

  let currentLevel = new Level2()

  const [level, setLevel] = useState(currentLevel)
  const [tiles, setTiles] = useState(level.getLayout())
  const [playerPosition, setPlayerPosition] = useState<IPosition>(level.startingPosition)
  const [chipDirection, setChipDirection] = useState<direction>('DOWN')
  const [numberOfChips, setNumberOfChips] = useState<number>(0)
  const [numberOfChipsRequired, setNumberOfChipsRequired] = useState<number>(level.requiredChips)
  const [keys, setKeys] = useState({ red: 0, green: 0, blue: 0, yellow: 0 })
  const [shoes, setShoes] = useState({ flippers: false, suctionBoots: false, skates: false, fireBoots: false })

  const getters = { playerPosition, chipDirection, numberOfChips, keys, numberOfChipsRequired, tiles, shoes }
  const setters = { setPlayerPosition, setChipDirection, setNumberOfChips, setKeys, setNumberOfChipsRequired, setTiles, setShoes }

  useEffect(() => {
    function updateGame(event: KeyboardEvent) {
      setChipDirection(getDirection(event, chipDirection))
      const nextPosition = calculateNextPosition(playerPosition, event)

      try {
        const tile = tiles[nextPosition.row][nextPosition.col]
        tile.enter(getters, setters, nextPosition)
      } catch (e) {
        return
      }

      setPlayerPosition(nextPosition)
    }

    document.addEventListener('keyup', updateGame)
    return () => {
      document.removeEventListener('keyup', updateGame);
    }
  })

  return (
    <div>
      <div id='board'>
        {tiles.map((row, rowIndex) => {
          return row.map((cell, colIndex) => {
            return getters.tiles[rowIndex][colIndex].html(rowIndex, colIndex, getters)
          })
        })}
      </div>
      <div>Chips Collected: { numberOfChips }</div>
      <div>Keys Collected: { JSON.stringify(keys) }</div>
      <div>Shoes Collected: { JSON.stringify(shoes) }</div>
    </div>
  );
}

export default App;
