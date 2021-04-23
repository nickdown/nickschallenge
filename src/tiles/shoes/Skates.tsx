import skates from "../../assets/tiles/shoes/ice_skates.png"
import AbstractShoe from './AbstractShoe'

export default class Skates extends AbstractShoe{
  shoe = 'skates'

  html() {
    return <img src={skates} alt=''/>
  }
}