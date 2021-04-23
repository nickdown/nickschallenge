import AbstractSurface from '../AbstractSurface'

export default abstract class AbstractFastForward extends AbstractSurface {
  enter(getters, setters) {
    if (!getters.shoes.suctionBoots) {
      throw new Error()
    }
  }
}