import floor from "../assets/tiles/floor.png";
import BaseTile from './BaseTile'

export default class Floor extends BaseTile {
  html() {
    return <img src={floor} alt='floor'/>
  }

  enter() {
    return
  }
}