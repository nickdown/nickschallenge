import chipDoor from "../assets/tiles/chipDoor.png";

export default class ChipGate {
  html() {
    return <img src={chipDoor} alt='chip door'/>
  }

  enter(getters, setters) {
    if (getters.numberOfChips < getters.numberOfChipsRequired) {
      throw new Error()
    }
  }
}