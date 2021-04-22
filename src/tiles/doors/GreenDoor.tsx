import greenDoor from "../../assets/tiles/greenDoor.png";

export default class GreenDoor {
  html() {
    return <img src={greenDoor} alt='green door'/>
  }

  enter(getters, setters) {
    if (!getters.keys.green) {
      throw new Error()
    }
  }
}