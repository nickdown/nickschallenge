import water from "../../assets/tiles/water/water.png";
import player_swim_down from "../../assets/tiles/water/player_swim_down.png";
import player_swim_up from "../../assets/tiles/water/player_swim_up.png";
import player_swim_left from "../../assets/tiles/water/player_swim_left.png";
import player_swim_right from "../../assets/tiles/water/player_swim_right.png";
import AbstractSurface from '../AbstractSurface'

export default class Water extends AbstractSurface {
  baseImage = water
  playerLeftImage = player_swim_left
  playerRightImage = player_swim_right
  playerUpImage = player_swim_up
  playerDownImage = player_swim_down

  enter(getters, setters) {
    if (!getters.shoes.flippers) {
      throw new Error()
    }
  }
}