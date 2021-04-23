import ff_down from "../../assets/tiles/fastforwards/down/ff_down.png";
import player_ff_down_down from "../../assets/tiles/fastforwards/down/player_ff_down_down.png"
import player_ff_down_left from "../../assets/tiles/fastforwards/down/player_ff_down_left.png"
import player_ff_down_right from "../../assets/tiles/fastforwards/down/player_ff_down_right.png"
import player_ff_down_up from "../../assets/tiles/fastforwards/down/player_ff_down_up.png"
import AbstractFastForward from './AbstractFastForward'

export default class FastForwardDown extends AbstractFastForward {
  baseImage = ff_down
  playerDownImage = player_ff_down_down
  playerLeftImage = player_ff_down_left
  playerRightImage = player_ff_down_right
  playerUpImage = player_ff_down_up
}