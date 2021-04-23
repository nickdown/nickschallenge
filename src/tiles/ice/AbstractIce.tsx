export default abstract class AbstractIce {
  enter(getters, setters) {
    if (!getters.shoes.skates) {
      throw new Error()
    }
  }
}