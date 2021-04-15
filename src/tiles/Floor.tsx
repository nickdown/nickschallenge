import floor from "../assets/tiles/floor.png";

export default class Floor {
  html() {
    return <img src={floor} alt='floor'/>
  }

  canBeEntered() {
    return true
  }
}