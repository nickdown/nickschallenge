import ff_right from "../../assets/tiles/fastforwards/ff_right.png";
import AbstractFastForward from './AbstractFastForward'

export default class FastForwardRight extends AbstractFastForward {
  html() {
    return <img src={ff_right} alt=''/>
  }
}