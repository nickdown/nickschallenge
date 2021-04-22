import gate1 from "../assets/tiles/finish1.png";
import BaseTile from './BaseTile'

export default class Finish extends BaseTile {
  html() {
    return <img src={gate1} alt='gate'/>
  }
}