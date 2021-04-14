import tile from "../assets/tiles/tile.png";

export default class Floor {
  html() {
    return <img src={tile} alt='tile'/>
  }

  canBeEntered() {
    return true
  }
}