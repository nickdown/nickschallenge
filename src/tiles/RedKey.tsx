import redKey from "../assets/tiles/redKey.png";

export default class RedKey {
  html() {
    return <img src={redKey} alt='red key'/>
  }

  canBeEntered() {
    return true
  }
}