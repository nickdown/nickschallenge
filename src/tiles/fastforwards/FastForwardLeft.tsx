import ff_left from "../../assets/tiles/fastforwards/left/ff_left.png";
import player_ff_left_down from "../../assets/tiles/fastforwards/left/player_ff_left_down.png"
import player_ff_left_left from "../../assets/tiles/fastforwards/left/player_ff_left_left.png"
import player_ff_left_right from "../../assets/tiles/fastforwards/left/player_ff_left_right.png"
import player_ff_left_up from "../../assets/tiles/fastforwards/left/player_ff_left_up.png"
import AbstractFastForward from './AbstractFastForward'

export default class FastForwardLeft extends AbstractFastForward {
  baseImage = ff_left
  playerDownImage = player_ff_left_down
  playerLeftImage = player_ff_left_left
  playerRightImage = player_ff_left_right
  playerUpImage = player_ff_left_up
}