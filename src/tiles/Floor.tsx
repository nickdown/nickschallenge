import floor from "../assets/tiles/floor.png";
import { playerDown, playerUp, playerLeft, playerRight } from '../assets/player'
import BaseTile from './BaseTile'

export default class Floor extends BaseTile {
  html(rowIndex, colIndex, getters) {
    if (getters.playerPosition.row === rowIndex && getters.playerPosition.col === colIndex) {
      switch (getters.chipDirection) {
        case "DOWN":
          return <img src={ playerDown } alt=''/>
        case "UP":
          return <img src={ playerUp } alt=''/>
        case "LEFT":
          return <img src={ playerLeft } alt=''/>
        case "RIGHT":
          return <img src={ playerRight } alt=''/>
        default:
          return <img src={ floor } alt=''/>
      }
    }
    return <img src={ floor } alt='floor'/>
  }

  enter() {
    return
  }
}