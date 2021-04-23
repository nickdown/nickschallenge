import suctionBoots from "../../assets/tiles/shoes/ff_shoes.png"
import AbstractShoe from './AbstractShoe'

export default class SuctionBoots extends AbstractShoe {
  shoe = 'suctionBoots'

  html() {
    return <img src={suctionBoots} alt=''/>
  }
}