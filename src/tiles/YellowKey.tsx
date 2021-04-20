import yellowKey from "../assets/tiles/yellowKey.png";

export default class YellowKey {
  html() {
    return <img src={yellowKey} alt='yellow key'/>
  }

  canBeEntered() {
    return true
  }
}