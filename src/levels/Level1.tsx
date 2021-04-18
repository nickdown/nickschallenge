import { Floor, Wall, Chip, ChipDoor } from '../tiles'

const layout = [
  [ 'Wall', 'Wall', 'Wall', 'Wall', 'Wall', 'Wall', 'Wall', 'Wall', 'Wall', 'Wall' ],
  [ 'Wall', 'Floor', 'Floor', 'Floor', 'Floor', 'Floor', 'Floor', 'Floor', 'Floor', 'Wall' ],
  [ 'Wall', 'Floor', 'Floor', 'Floor', 'Floor', 'Chip', 'Floor', 'Floor', 'Floor', 'Wall' ],
  [ 'Wall', 'Floor', 'Floor', 'Wall', 'Wall', 'Wall', 'Wall', 'Floor', 'Floor', 'Wall' ],
  [ 'Wall', 'Floor', 'Floor', 'Wall', 'Floor', 'Floor', 'Wall', 'Floor', 'Floor', 'Wall' ],
  [ 'Wall', 'Chip', 'Floor', 'Wall', 'Floor', 'Floor', 'Wall', 'Floor', 'Floor', 'Wall' ],
  [ 'Wall', 'Floor', 'Floor', 'Wall', 'Wall', 'ChipDoor', 'Wall', 'Floor', 'Floor', 'Wall' ],
  [ 'Wall', 'Floor', 'Floor', 'Floor', 'Floor', 'Floor', 'Floor', 'Floor', 'Chip', 'Wall' ],
  [ 'Wall', 'Floor', 'Floor', 'Chip', 'Floor', 'Floor', 'Floor', 'Floor', 'Floor', 'Wall' ],
  [ 'Wall', 'Wall', 'Wall', 'Wall', 'Wall', 'Wall', 'Wall', 'Wall', 'Wall', 'Wall' ]
]

export default class Level1 {
  static getLayout() {
    return layout.map((row:string[]) => {
      return row.map((cell:string) => {
        switch (cell) {
          case 'Wall':
            return new Wall()
          case 'Floor':
            return new Floor()
          case 'Chip':
            return new Chip()
          case 'ChipDoor':
            return new ChipDoor()
          default:
            throw new Error('Tile type not found')
        }
      })
    })
  }
}