import yellowDoor from "../assets/tiles/yellowDoor.png";

export default class YellowDoor {
  html() {
    return <img src={yellowDoor} alt='yellow door'/>
  }

  canBeEntered(numberOfChips = 0) {
    return numberOfChips === 4
  }
}