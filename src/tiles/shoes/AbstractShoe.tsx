export default abstract class AbstractShoe {
  abstract shoe

  enter(getters, setters) {
    setters.setShoes((prev) => {
      const copy = { ...prev}
      copy[this.shoe] = true

      return copy
    })
  }
}