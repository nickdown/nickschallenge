import './App.css';
import { useState, useEffect } from 'react';
import { playerDown, playerUp, playerLeft, playerRight } from './assets/player'
import Level1 from './levels/Level1'
import { Chip, ChipDoor, Floor } from './tiles'

const tiles = Level1.getLayout()

function App() {
  const [chip, setChip] = useState({row: 1, col: 1})
  const [chipImage, setChipImage] = useState(playerDown)
  const [numberOfChips, setNumberOfChip] = useState(0)

  const generateCell = (rowIndex: number, colIndex: number, chip: { row: any; col: any; }) => {
    const html = tiles[rowIndex][colIndex].html()

    let chipHtml
    if (chip.row === rowIndex && chip.col === colIndex) {
      chipHtml = <img src={chipImage} alt="player-down"/>
    }

    return <div>{chipHtml ?? html}</div>
  }

  useEffect(() => {
    function updateGame(event: KeyboardEvent) {
      const nextPosition = {...chip}
      switch (event.code) {
        case 'ArrowLeft':
          setChipImage(playerLeft)
          nextPosition.col = nextPosition.col - 1
          break;
        case 'ArrowRight':
          setChipImage(playerRight)
          nextPosition.col = nextPosition.col + 1
          break;
        case 'ArrowDown':
          setChipImage(playerDown)
          nextPosition.row = nextPosition.row + 1
          break;
        case 'ArrowUp':
          setChipImage(playerUp)
          nextPosition.row = nextPosition.row - 1
          break;
        default:
          return
      }

      let tile
      try {
        tile = tiles[nextPosition.row][nextPosition.col]
      } catch (e) {
        return
      }

      if (!tile) {
        return
      }

      if (!tile.canBeEntered(numberOfChips)) {
        return
      }

      if (tile instanceof Chip) {
        setNumberOfChip((numberOfChips) => numberOfChips + 1)
        tiles[nextPosition.row][nextPosition.col] = new Floor()
      }

      if (tile instanceof ChipDoor) {
        tiles[nextPosition.row][nextPosition.col] = new Floor()
      }

      setChip(nextPosition)
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
            return generateCell(rowIndex, colIndex, chip)
          })
        })}
      </div>
      <div>Chips Collected: { numberOfChips }</div>
    </div>

  );
}

export default App;
