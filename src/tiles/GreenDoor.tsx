import greenDoor from "../assets/tiles/greenDoor.png";

export default class GreenDoor {
  html() {
    return <img src={greenDoor} alt='green door'/>
  }

  canBeEntered(numberOfChips = 0) {
    return numberOfChips === 4
  }
}