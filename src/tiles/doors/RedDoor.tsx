import redDoor from "../../assets/tiles/redDoor.png";
import AbstractDoor from './AbstractDoor'

export default class RedDoor extends AbstractDoor {
  image = redDoor
  color = 'red'
}