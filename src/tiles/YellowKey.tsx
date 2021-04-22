import yellowKey from "../assets/tiles/yellowKey.png";

export default class YellowKey {
  html() {
    return <img src={yellowKey} alt='yellow key'/>
  }

  enter(getters, setters) {
    setters.setKeys((prev) => {
      return { ...prev, yellow: prev.yellow + 1}
    })
  }
}