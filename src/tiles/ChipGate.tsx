import chipDoor from "../assets/tiles/chipDoor.png";
import { Floor } from './index'

export default class ChipGate {
  html() {
    return <img src={chipDoor} alt='chip door'/>
  }

  enter(getters, setters, nextPosition) {
    if (getters.numberOfChips < getters.numberOfChipsRequired) {
      throw new Error()
    }

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