import ice from "../../assets/tiles/ice/ice.png";
import AbstractIce from './AbstractIce'

export default class Ice extends AbstractIce {
  html() {
    return <img src={ice} alt=''/>
  }
}