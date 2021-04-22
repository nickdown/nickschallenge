import floor from '../assets/tiles/floor.png'

export default class BaseTile {
  html() {
    return <img src={floor} alt='gate'/>
  }

  enter() {
    return
  }
}