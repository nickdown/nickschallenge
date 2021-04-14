import Floor from "./Floor";
import wall from "../assets/tiles/wall.png";

export default class Wall extends Floor {
  html() {
    return <img src={wall} alt='wall'/>
  }

  canBeEntered() {
    return false
  }
}