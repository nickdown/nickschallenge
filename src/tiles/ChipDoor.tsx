import chipDoor from "../assets/tiles/chipDoor.png";

export default class ChipDoor {
  html() {
    return <img src={chipDoor} alt='chip door'/>
  }

  canBeEntered(numberOfChips = 0) {
    return numberOfChips === 4
  }
}