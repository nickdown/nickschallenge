import gate1 from "../assets/tiles/gate1.png";
import BaseTile from './BaseTile'

export default class Gate extends BaseTile {
  html() {
    return <img src={gate1} alt='gate'/>
  }
}