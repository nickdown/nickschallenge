import greenKey from "../assets/tiles/greenKey.png";

export default class GreenKey {
  html() {
    return <img src={greenKey} alt='green key'/>
  }

  enter(getters, setters) {
    setters.setKeys((prev) => {
      return { ...prev, green: prev.green + 1}
    })
  }
}