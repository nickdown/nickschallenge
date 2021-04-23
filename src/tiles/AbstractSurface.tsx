export default abstract class AbstractSurface {
  abstract baseImage
  abstract playerLeftImage
  abstract playerRightImage
  abstract playerUpImage
  abstract playerDownImage

  html(rowIndex, colIndex, getters) {
    if (getters.playerPosition.row === rowIndex && getters.playerPosition.col === colIndex) {
      switch (getters.chipDirection) {
        case "DOWN":
          return <img src={ this.playerDownImage } alt=''/>
        case "UP":
          return <img src={ this.playerUpImage } alt=''/>
        case "LEFT":
          return <img src={ this.playerLeftImage } alt=''/>
        case "RIGHT":
          return <img src={ this.playerRightImage } alt=''/>
        default:
          return <img src={ this.baseImage } alt=''/>
      }
    }
    return <img src={ this.baseImage } alt=''/>
  }

  abstract enter(getters, setters)
}