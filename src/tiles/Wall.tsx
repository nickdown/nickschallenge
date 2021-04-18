import Floor from "./Floor";
import wall from "../assets/tiles/wall.png";
import IllegalMoveError from '../errors/IllegalMoveError'

export default class Wall extends Floor {
  html() {
    return <img src={wall} alt='wall'/>
  }

  canBeEntered() {
    return false
  }

  enter() {
    throw new IllegalMoveError()
  }
}