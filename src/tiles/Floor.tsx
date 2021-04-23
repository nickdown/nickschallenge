import floor from "../assets/tiles/floor.png";
import { playerDown, playerUp, playerLeft, playerRight } from '../assets/player'
import BaseTile from './BaseTile'
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