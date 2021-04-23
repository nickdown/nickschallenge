import floor from '../assets/tiles/floor/floor.png'

export default class BaseTile {
  html(rowIndex, colIndex, getters) {
    return <img src={floor} alt=''/>
  }


}