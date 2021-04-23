import fire from "../../assets/tiles/fire/fire.png";

export default class Fire {
  html() {
    return <img src={fire} alt=''/>
  }

  enter(getters, setters) {
    if (!getters.shoes.fireBoots) {
      throw new Error()
    }
  }
}