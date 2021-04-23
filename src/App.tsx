import './App.css';
import { useState, useEffect } from 'react';
import { playerDown, playerUp, playerLeft, playerRight } from './assets/player'
import Level1 from './levels/Level1'
import { Floor } from './tiles'
import Level2 from './levels/Level2'
import IPosition from './interfaces/IPosition'

function updateChipImage(event: KeyboardEvent, setChipImage: any) {
  switch (event.code) {
    case 'ArrowLeft':
      setChipImage(playerLeft)
      break;
    case 'ArrowRight':
      setChipImage(playerRight)
      break;
    case 'ArrowDown':
      setChipImage(playerDown)
      break;
    case 'ArrowUp':
      setChipImage(playerUp)
      break;
    default:
      break;
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

const generateCell = (rowIndex: number, colIndex: number, chip: { row: number; col: number; }, chipImage: string, tiles) => {
  if (chip.row === rowIndex && chip.col === colIndex) {
    return <img src={ chipImage } alt=''/>
  }

  return tiles[rowIndex][colIndex].html()
}

function App() {

  let currentLevel = new Level1()

  const [level, setLevel] = useState(currentLevel)
  const [tiles, setTiles] = useState(level.getLayout())
  const [playerPosition, setPlayerPosition] = useState<IPosition>(level.startingPosition)
  const [chipImage, setChipImage] = useState(playerDown)
  const [numberOfChips, setNumberOfChips] = useState<number>(0)
  const [numberOfChipsRequired, setNumberOfChipsRequired] = useState<number>(level.requiredChips)
  const [keys, setKeys] = useState({ red: 0, green: 0, blue: 0, yellow: 0 })

  const getters = { playerPosition, chipImage, numberOfChips, keys, numberOfChipsRequired }
  const setters = { setPlayerPosition, setChipImage, setNumberOfChips, setKeys, setNumberOfChipsRequired }

  useEffect(() => {
    function updateGame(event: KeyboardEvent) {
      updateChipImage(event, setChipImage)
      const nextPosition = calculateNextPosition(playerPosition, event)

      try {
        const tile = tiles[nextPosition.row][nextPosition.col]
        tile.enter(getters, setters)
      } catch (e) {
        return
      }

      tiles[nextPosition.row][nextPosition.col] = new Floor()
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
            return generateCell(rowIndex, colIndex, playerPosition, chipImage, tiles)
          })
        })}
      </div>
      <div>Chips Collected: { numberOfChips }</div>
      <div>Keys Collected: { JSON.stringify(keys) }</div>
    </div>
  );
}

export default App;
