import flippers from "../../assets/tiles/shoes/flippers.png"
import AbstractShoe from './AbstractShoe'

export default class Flippers extends AbstractShoe{
  shoe = 'flippers'

  html() {
    return <img src={flippers} alt=''/>
  }
}