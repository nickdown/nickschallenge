import ff_up from "../../assets/tiles/fastforwards/ff_up.png";
import AbstractFastForward from './AbstractFastForward'

export default class FastForwardUp extends AbstractFastForward {
  html() {
    return <img src={ff_up} alt=''/>
  }
}