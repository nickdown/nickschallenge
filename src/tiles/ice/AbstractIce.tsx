import AbstractSurface from '../AbstractSurface'

export default abstract class AbstractIce extends AbstractSurface {
  enter(getters, setters) {
    if (!getters.shoes.skates) {
      throw new Error()
    }
  }
}