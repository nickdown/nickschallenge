import redDoor from "../assets/tiles/redDoor.png";

export default class RedDoor {
  html() {
    return <img src={redDoor} alt='red door'/>
  }

  enter (getters, setters) {
    if (!getters.keys.red) {
      throw new Error()
    }
    setters.setKeys((prev) => {
      return { ...prev, red: prev.red - 1}
    })
  }
}