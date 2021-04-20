import greenKey from "../assets/tiles/greenKey.png";

export default class GreenKey {
  html() {
    return <img src={greenKey} alt='green key'/>
  }

  canBeEntered() {
    return true
  }
}