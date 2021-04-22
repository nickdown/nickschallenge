import { Floor, Wall, Chip, ChipDoor } from '../tiles'
import GreenDoor from "../tiles/doors/GreenDoor";
import BlueDoor from "../tiles/doors/BlueDoor";
import RedDoor from "../tiles/doors/RedDoor";
import YellowDoor from "../tiles/doors/YellowDoor";
import Finish from "../tiles/Finish";
import GreenKey from "../tiles/keys/GreenKey";
import BlueKey from "../tiles/keys/BlueKey";
import RedKey from "../tiles/keys/RedKey";
import YellowKey from "../tiles/keys/YellowKey";

const level1 = [
  ['F','F','F','F','F','F','F','F','F','F','F','F','F','F','F','F','F'],
  ['F','F','F','W','W','W','W','W','F','W','W','W','W','W','F','F','F'],
  ['F','F','F','W','F','F','F','W','W','W','F','F','F','W','F','F','F'],
  ['F','F','F','W','F','C','F','W','Z','W','F','C','F','W','F','F','F'],
  ['F','W','W','W','W','W','G','W','D','W','G','W','W','W','W','W','F'],
  ['F','W','F','y','F','B','F','F','F','F','F','R','F','y','F','W','F'],
  ['F','W','F','C','F','W','b','F','F','F','r','W','F','C','F','W','F'],
  ['F','W','W','W','W','W','C','F','F','F','C','W','W','W','W','W','F'],
  ['F','W','F','C','F','W','b','F','F','F','r','W','F','C','F','W','F'],
  ['F','W','F','F','F','R','F','F','C','F','F','B','F','F','F','W','F'],
  ['F','W','W','W','W','W','W','Y','W','Y','W','W','W','W','W','W','F'],
  ['F','F','F','F','F','W','F','F','W','F','F','W','F','F','F','F','F'],
  ['F','F','F','F','F','W','F','C','W','C','F','W','F','F','F','F','F'],
  ['F','F','F','F','F','W','F','F','W','g','F','W','F','F','F','F','F'],
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
          case 'g':
            return new GreenKey()
          case 'b':
            return new BlueKey()
          case 'r':
            return new RedKey()
          case 'y':
            return new YellowKey();
          case 'Z':
            return new Finish();
          default:
            throw new Error('Tile type not found')
        }
      })
    })
  }
}