import { Floor, Wall, Chip, ChipDoor } from '../tiles'
import GreenDoor from "../tiles/GreenDoor";
import BlueDoor from "../tiles/BlueDoor";
import RedDoor from "../tiles/RedDoor";
import YellowDoor from "../tiles/YellowDoor";
import Gate from "../tiles/Gate";

const level1 = [
  ['F','F','F','F','F','F','F','F','F','F','F','F','F','F','F','F','F'],
  ['F','F','F','W','W','W','W','W','F','W','W','W','W','W','F','F','F'],
  ['F','F','F','W','F','F','F','W','W','W','F','F','F','W','F','F','F'],
  ['F','F','F','W','F','C','F','W','Z','W','F','C','F','W','F','F','F'],
  ['F','W','W','W','W','W','G','W','D','W','G','W','W','W','W','W','F'],
  ['F','W','F','F','F','B','F','F','F','F','F','R','F','F','F','W','F'],
  ['F','W','F','C','F','W','F','F','F','F','F','W','F','C','F','W','F'],
  ['F','W','W','W','W','W','C','F','F','F','C','W','W','W','W','W','F'],
  ['F','W','F','C','F','W','F','F','F','F','F','W','F','C','F','W','F'],
  ['F','W','F','F','F','R','F','F','C','F','F','B','F','F','F','W','F'],
  ['F','W','W','W','W','W','W','Y','W','Y','W','W','W','W','W','W','F'],
  ['F','F','F','F','F','W','F','F','W','F','F','W','F','F','F','F','F'],
  ['F','F','F','F','F','W','F','C','W','C','F','W','F','F','F','F','F'],
  ['F','F','F','F','F','W','F','F','W','F','F','W','F','F','F','F','F'],
  ['F','F','F','F','F','W','W','W','W','W','W','W','F','F','F','F','F'],
  ['F','F','F','F','F','F','F','F','F','F','F','F','F','F','F','F','F'],
]
export default class Level1 {
  static getLayout() {
    return level1.map((row:string[]) => {
      return row.map((cell:string) => {
        switch (cell) {
          case 'W':
            return new Wall()
          case 'F':
            return new Floor()
          case 'C':
            return new Chip()
          case 'D':
            return new ChipDoor()
          case 'G':
            return new GreenDoor()
          case 'B':
            return new BlueDoor()
          case 'R':
            return new RedDoor()
          case 'Y':
            return new YellowDoor();
          case 'Z':
            return new Gate();
          default:
            throw new Error('Tile type not found')
        }
      })
    })
  }
}