export default abstract class AbstractFastForward {
  enter(getters, setters) {
    if (!getters.shoes.suctionBoots) {
      throw new Error()
    }
  }
}