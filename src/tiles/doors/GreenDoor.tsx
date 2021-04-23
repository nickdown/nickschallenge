import greenDoor from "../../assets/tiles/doors/greenDoor.png";
import AbstractDoor from './AbstractDoor'

export default class GreenDoor extends AbstractDoor{
  image = greenDoor
  color = 'green'

  enter(getters, setters) {
    if (!getters.keys[this.color]) {
      throw new Error()
    }
  }
}