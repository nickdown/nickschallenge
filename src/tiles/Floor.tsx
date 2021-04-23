import floor from "../assets/tiles/floor/floor.png";
import playerDown from '../assets/tiles/floor/player_down.png'
import playerUp from '../assets/tiles/floor/player_up.png'
import playerLeft from '../assets/tiles/floor/player_left.png'
import playerRight from '../assets/tiles/floor/player_right.png'
import AbstractSurface from './AbstractSurface'

export default class Floor extends AbstractSurface {
  baseImage = floor
  playerDownImage = playerDown
  playerLeftImage = playerLeft
  playerRightImage = playerRight
  playerUpImage = playerUp

  enter() {
    return
  }
}