import blueDoor from "../assets/tiles/blueDoor.png";

export default class BlueDoor {
  html() {
    return <img src={blueDoor} alt='blue door'/>
  }

  enter(getters, setters) {
    if (!getters.keys.blue) {
      throw new Error()
    }

    setters.setKeys((prev) => {
      return { ...prev, blue: prev.blue - 1}
    })
  }
}