import blueKey from "../assets/tiles/blueKey.png";

export default class BlueKey {
  html() {
    return <img src={blueKey} alt='blue key'/>
  }

  enter(getters, setters) {
    setters.setKeys((prev) => {
      return { ...prev, blue: prev.blue + 1}
    })
  }
}