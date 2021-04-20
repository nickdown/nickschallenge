import redDoor from "../assets/tiles/redDoor.png";

export default class RedDoor {
  html() {
    return <img src={redDoor} alt='red door'/>
  }

  canBeEntered(numberOfChips = 0) {
    return numberOfChips === 4
  }
}