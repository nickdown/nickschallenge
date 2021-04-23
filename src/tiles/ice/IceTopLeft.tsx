import iceTopLeft from "../../assets/tiles/ice/topLeft/ice_top_left.png";
import player_ice_top_left_down from "../../assets/tiles/ice/topLeft/player_ice_top_left_down.png";
import player_ice_top_left_right from "../../assets/tiles/ice/topLeft/player_ice_top_left_right.png";
import player_ice_top_left_up from "../../assets/tiles/ice/topLeft/player_ice_top_left_up.png";
import player_ice_top_left_left from "../../assets/tiles/ice/topLeft/player_ice_top_left_left.png";
import AbstractIce from './AbstractIce'

export default class IceTopLeft extends AbstractIce {
  baseImage = iceTopLeft
  playerDownImage = player_ice_top_left_down
  playerLeftImage = player_ice_top_left_left
  playerRightImage = player_ice_top_left_right
  playerUpImage = player_ice_top_left_up
}