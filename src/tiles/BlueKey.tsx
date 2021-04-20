import blueKey from "../assets/tiles/blueKey.png";

export default class BlueKey {
  html() {
    return <img src={blueKey} alt='blue key'/>
  }

  canBeEntered() {
    return true
  }
}