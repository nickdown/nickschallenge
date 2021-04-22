import yellowDoor from "../../assets/tiles/yellowDoor.png";

export default class YellowDoor {
  html() {
    return <img src={yellowDoor} alt='yellow door'/>
  }

  enter(getters, setters) {
    if (!getters.keys.yellow) {
      throw new Error()
    }
    setters.setKeys((prev) => {
      return { ...prev, yellow: prev.yellow - 1}
    })
  }
}