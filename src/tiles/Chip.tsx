import chip from "../assets/tiles/chip.png";

export default class Chip {
  html() {
    return <img src={chip} alt='chip'/>
  }

  enter(getters, setters) {
    setters.setNumberOfChips((numberOfChips) => numberOfChips + 1)
  }
}