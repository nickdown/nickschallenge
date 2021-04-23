import ff_right from "../../assets/tiles/fastforwards/right/ff_right.png";
import player_ff_right_down from "../../assets/tiles/fastforwards/right/player_ff_right_down.png"
import player_ff_right_left from "../../assets/tiles/fastforwards/right/player_ff_right_left.png"
import player_ff_right_right from "../../assets/tiles/fastforwards/right/player_ff_right_right.png"
import player_ff_right_up from "../../assets/tiles/fastforwards/right/player_ff_right_up.png"
import AbstractFastForward from './AbstractFastForward'

export default class FastForwardRight extends AbstractFastForward {
  baseImage = ff_right
  playerDownImage = player_ff_right_down
  playerLeftImage = player_ff_right_left
  playerRightImage = player_ff_right_right
  playerUpImage = player_ff_right_up
}