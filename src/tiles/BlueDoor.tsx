import blueDoor from "../assets/tiles/blueDoor.png";

export default class BlueDoor {
  html() {
    return <img src={blueDoor} alt='blue door'/>
  }

  canBeEntered(numberOfChips = 0) {
    return numberOfChips === 4
  }
}