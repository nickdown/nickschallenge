import water from "../../assets/tiles/water/water.png";

export default class Water {
  html() {
    return <img src={water} alt=''/>
  }

  enter(getters, setters) {
    if (!getters.shoes.flippers) {
      throw new Error()
    }
  }
}