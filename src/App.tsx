import './App.css';
import { useState, useEffect } from 'react';
import { playerDown, playerUp, playerLeft, playerRight } from './assets/player'
import Level1 from './levels/Level1'
import { Floor } from './tiles'


const tiles = Level1.getLayout()

function App() {
  const [chip, setChip] = useState({row: 7, col: 8})
  const [chipImage, setChipImage] = useState(playerDown)
  const [numberOfChips, setNumberOfChips] = useState(0)
  const [numberOfChipsRequired, setNumberOfChipsRequired] = useState(11)
  const [keys, setKeys] = useState({ red: 0, green: 0, blue: 0, yellow: 0 })

  const getters = { chip, chipImage, numberOfChips, keys, numberOfChipsRequired }
  const setters = { setChip, setChipImage, setNumberOfChips, setKeys, setNumberOfChipsRequired }


  const generateCell = (rowIndex: number, colIndex: number, chip: { row: number; col: number; }) => {
    if (chip.row === rowIndex && chip.col === colIndex) {
      return <img src={ chipImage } alt="player-down"/>
    }

    const html = tiles[rowIndex][colIndex].html()

    return <div>{ html}</div>
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

      try {
        const tile = tiles[nextPosition.row][nextPosition.col]
        tile.enter(getters, setters)
      } catch (e) {
        return
      }

      tiles[nextPosition.row][nextPosition.col] = new Floor()
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
      <div>Keys Collected: { JSON.stringify(keys) }</div>
    </div>

  );
}

export default App;
