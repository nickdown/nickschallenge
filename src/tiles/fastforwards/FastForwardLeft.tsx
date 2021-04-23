import ff_left from "../../assets/tiles/fastforwards/ff_left.png";
import AbstractFastForward from './AbstractFastForward'

export default class FastForwardLeft extends AbstractFastForward {
  html() {
    return <img src={ff_left} alt=''/>
  }
}