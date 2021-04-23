import ice from "../../assets/tiles/ice/base/ice.png";
import player_ice_down from "../../assets/tiles/ice/base/player_ice_down.png";
import player_ice_up from "../../assets/tiles/ice/base/player_ice_up.png";
import player_ice_left from "../../assets/tiles/ice/base/player_ice_left.png";
import player_ice_right from "../../assets/tiles/ice/base/player_ice_right.png";
import AbstractIce from './AbstractIce'

export default class Ice extends AbstractIce {
  baseImage = ice
  playerDownImage = player_ice_down
  playerLeftImage = player_ice_left
  playerRightImage = player_ice_right
  playerUpImage = player_ice_up
}