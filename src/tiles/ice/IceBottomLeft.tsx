import iceBottomLeft from "../../assets/tiles/ice/ice_bottom_left.png";
import AbstractIce from './AbstractIce'

export default class IceBottomLeft extends AbstractIce {
  html() {
    return <img src={iceBottomLeft} alt=''/>
  }
}