import './App.css';
import { useState, useEffect } from 'react';
import { playerDown, playerUp, playerLeft, playerRight } from './assets/player'
import Level1 from './levels/Level1'
import { Chip, ChipDoor, Floor } from './tiles'
import RedDoor from "./tiles/RedDoor";
import RedKey from "./tiles/RedKey";
import YellowKey from "./tiles/YellowKey";
import YellowDoor from "./tiles/YellowDoor";
import BlueKey from "./tiles/BlueKey";
import BlueDoor from "./tiles/BlueDoor";
import GreenKey from "./tiles/GreenKey";
import GreenDoor from "./tiles/GreenDoor";

const tiles = Level1.getLayout()

function App() {
  const [chip, setChip] = useState({row: 7, col: 8})
  const [chipImage, setChipImage] = useState(playerDown)
  const [numberOfChips, setNumberOfChip] = useState(0)
  const [keys, setKeys] = useState({
    red: 0,
    green: 0,
    blue: 0,
    yellow: 0
  })


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

      if (tile instanceof RedKey) {
        setKeys((prev) => {
          return { ...prev, red: prev.red + 1}
        })
        tiles[nextPosition.row][nextPosition.col] = new Floor()
      }

      if (tile instanceof RedDoor) {
        if (!keys.red) {
          return
        }
        setKeys((prev) => {
          return { ...prev, red: prev.red - 1}
        })
        tiles[nextPosition.row][nextPosition.col] = new Floor()
      }

      if (tile instanceof YellowKey) {
        setKeys((prev) => {
          return { ...prev, yellow: prev.yellow + 1}
        })
        tiles[nextPosition.row][nextPosition.col] = new Floor()
      }

      if (tile instanceof YellowDoor) {
        if (!keys.yellow) {
          return
        }
        setKeys((prev) => {
          return { ...prev, yellow: prev.yellow - 1}
        })
        tiles[nextPosition.row][nextPosition.col] = new Floor()
      }

      if (tile instanceof BlueKey) {
        setKeys((prev) => {
          return { ...prev, blue: prev.blue + 1}
        })
        tiles[nextPosition.row][nextPosition.col] = new Floor()
      }

      if (tile instanceof BlueDoor) {
        if (!keys.blue) {
          return
        }
        setKeys((prev) => {
          return { ...prev, blue: prev.blue - 1}
        })
        tiles[nextPosition.row][nextPosition.col] = new Floor()
      }

      if (tile instanceof GreenKey) {
        setKeys((prev) => {
          return { ...prev, green: prev.green + 1}
        })
        tiles[nextPosition.row][nextPosition.col] = new Floor()
      }

      if (tile instanceof GreenDoor) {
        if (!keys.green) {
          return
        }
        tiles[nextPosition.row][nextPosition.col] = new Floor()
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
      <div>Keys Collected: { JSON.stringify(keys) }</div>
    </div>

  );
}

export default App;
