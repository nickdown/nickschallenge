import chip from "../assets/tiles/chip.png";
import { Floor } from './index'

export default class Chip {
  html() {
    return <img src={chip} alt='chip'/>
  }

  enter(getters, setters, nextPosition) {
    setters.setNumberOfChips((numberOfChips) => numberOfChips + 1)
    setters.setTiles((prev) => {
      const newTiles:any[] = []
      prev.forEach((row) => {
        const newRow:any[] = []
        row.forEach(tile => {
          newRow.push(tile)
        })
        newTiles.push(newRow)
      })

      newTiles[nextPosition.row][nextPosition.col] = new Floor()

      return newTiles
    })
  }
}