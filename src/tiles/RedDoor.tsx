import redDoor from "../assets/tiles/redDoor.png";

export default class RedDoor {
  html() {
    return <img src={redDoor} alt='red door'/>
  }

  canBeEntered() {
    return true
  }
}