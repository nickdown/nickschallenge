import gate1 from "../assets/tiles/gate1.png";

export default class Gate {
  html() {
    return <img src={gate1} alt='gate'/>
  }

  canBeEntered() {
    return true
  }
}