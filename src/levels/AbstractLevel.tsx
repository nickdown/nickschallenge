import { Chip, ChipDoor, Floor, Wall } from '../tiles'
import GreenDoor from '../tiles/doors/GreenDoor'
import BlueDoor from '../tiles/doors/BlueDoor'
import RedDoor from '../tiles/doors/RedDoor'
import YellowDoor from '../tiles/doors/YellowDoor'
import GreenKey from '../tiles/keys/GreenKey'
import BlueKey from '../tiles/keys/BlueKey'
import RedKey from '../tiles/keys/RedKey'
import YellowKey from '../tiles/keys/YellowKey'
import Finish from '../tiles/Finish'
import IPosition from '../interfaces/IPosition'
import FastForwardUp from '../tiles/fastforwards/FastForwardUp'
import FastForwardDown from '../tiles/fastforwards/FastForwardDown'
import FastForwardLeft from '../tiles/fastforwards/FastForwardLeft'
import FastForwardRight from '../tiles/fastforwards/FastForwardRight'

export default abstract class AbstractLevel {
  abstract tilemap: string[][]
  abstract startingPosition: IPosition
  abstract requiredChips: number

  getLayout(): any {
    return this.tilemap.map((row:string[]) => {
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
          case 'ffu':
            return new FastForwardUp();
          case 'ffd':
            return new FastForwardDown();
          case 'ffl':
            return new FastForwardLeft();
          case 'ffr':
            return new FastForwardRight();
          default:
            throw new Error('Tile type not found')
        }
      })
    })
  }
}