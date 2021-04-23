import ff_up from "../../assets/tiles/fastforwards/up/ff_up.png";
import player_ff_up_down from "../../assets/tiles/fastforwards/up/player_ff_up_down.png"
import player_ff_up_left from "../../assets/tiles/fastforwards/up/player_ff_up_left.png"
import player_ff_up_right from "../../assets/tiles/fastforwards/up/player_ff_up_right.png"
import player_ff_up_up from "../../assets/tiles/fastforwards/up/player_ff_up_up.png"
import AbstractFastForward from './AbstractFastForward'

export default class FastForwardRight extends AbstractFastForward {
  baseImage = ff_up
  playerDownImage = player_ff_up_down
  playerLeftImage = player_ff_up_left
  playerRightImage = player_ff_up_right
  playerUpImage = player_ff_up_up
}