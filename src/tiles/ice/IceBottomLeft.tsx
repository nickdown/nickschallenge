import iceBottomLeft from "../../assets/tiles/ice/bottomLeft/ice_bottom_left.png";
import player_ice_bottom_left_down from "../../assets/tiles/ice/bottomLeft/player_ice_bottom_left_down.png";
import player_ice_bottom_left_right from "../../assets/tiles/ice/bottomLeft/player_ice_bottom_left_right.png";
import player_ice_bottom_left_up from "../../assets/tiles/ice/bottomLeft/player_ice_bottom_left_up.png";
import player_ice_bottom_left_left from "../../assets/tiles/ice/bottomLeft/player_ice_bottom_left_left.png";
import AbstractIce from './AbstractIce'

export default class IceBottomLeft extends AbstractIce {
  baseImage = iceBottomLeft
  playerDownImage = player_ice_bottom_left_down
  playerLeftImage = player_ice_bottom_left_left
  playerRightImage = player_ice_bottom_left_right
  playerUpImage = player_ice_bottom_left_up
}