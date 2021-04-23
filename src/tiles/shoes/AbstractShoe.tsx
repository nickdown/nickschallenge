import { Floor } from '../index'

export default abstract class AbstractShoe {
  abstract shoe

  enter(getters, setters, nextPosition) {
    setters.setShoes((prev) => {
      const copy = { ...prev}
      copy[this.shoe] = true

      return copy
    })

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