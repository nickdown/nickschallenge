import water from "../../assets/tiles/water/water.png";
import player_swim_down from "../../assets/tiles/water/player_swim_down.png";
import player_swim_up from "../../assets/tiles/water/player_swim_up.png";
import player_swim_left from "../../assets/tiles/water/player_swim_left.png";
import player_swim_right from "../../assets/tiles/water/player_swim_right.png";

export default class Water {
  html(rowIndex, colIndex, getters) {
    if (getters.playerPosition.row === rowIndex && getters.playerPosition.col === colIndex) {
      switch (getters.chipDirection) {
        case "DOWN":
          return <img src={ player_swim_down } alt=''/>
        case "UP":
          return <img src={ player_swim_up } alt=''/>
        case "LEFT":
          return <img src={ player_swim_left } alt=''/>
        case "RIGHT":
          return <img src={ player_swim_right } alt=''/>
        default:
          return <img src={ water } alt=''/>
      }
    }
    return <img src={ water } alt=''/>
  }

  enter(getters, setters) {
    if (!getters.shoes.flippers) {
      throw new Error()
    }
  }
}