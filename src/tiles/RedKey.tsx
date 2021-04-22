import redKey from "../assets/tiles/redKey.png";

export default class RedKey {
  html() {
    return <img src={redKey} alt='red key'/>
  }

  enter(getters, setters) {
    return setters.setKeys((prev) => {
      return { ...prev, red: prev.red + 1}
    })
  }
}