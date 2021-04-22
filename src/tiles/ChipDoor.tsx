import chipDoor from "../assets/tiles/chipDoor.png";

export default class ChipDoor {
  html() {
    return <img src={chipDoor} alt='chip door'/>
  }

  enter(getters, setters) {
    return getters.numberOfChips >= 11
  }
}