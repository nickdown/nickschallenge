import fire from "../../assets/tiles/fire/fire.png";
import player_fire_down from "../../assets/tiles/fire/player_fire_down.png";
import player_fire_up from "../../assets/tiles/fire/player_fire_up.png";
import player_fire_left from "../../assets/tiles/fire/player_fire_left.png";
import player_fire_right from "../../assets/tiles/fire/player_fire_right.png";
import AbstractSurface from '../AbstractSurface'

export default class Fire extends AbstractSurface{
  baseImage = fire
  playerDownImage = player_fire_down
  playerLeftImage = player_fire_left
  playerRightImage = player_fire_right
  playerUpImage = player_fire_up

  enter(getters, setters) {
    if (!getters.shoes.fireBoots) {
      throw new Error()
    }
  }
}