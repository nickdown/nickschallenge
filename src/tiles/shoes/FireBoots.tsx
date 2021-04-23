import fireBoots from "../../assets/tiles/shoes/fire_boots.png"
import AbstractShoe from './AbstractShoe'

export default class FireBoots extends AbstractShoe {
  shoe = 'fireBoots'

  html() {
    return <img src={fireBoots} alt=''/>
  }
}