import iceTopLeft from "../../assets/tiles/ice/ice_top_left.png";
import AbstractIce from './AbstractIce'

export default class IceTopLeft extends AbstractIce {
  html() {
    return <img src={iceTopLeft} alt=''/>
  }
}