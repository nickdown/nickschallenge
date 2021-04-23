import ff_down from "../../assets/tiles/fastforwards/ff_down.png";
import AbstractFastForward from './AbstractFastForward'

export default class FastForwardDown extends AbstractFastForward {
  html() {
    return <img src={ff_down} alt=''/>
  }
}