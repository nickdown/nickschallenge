export default abstract class AbstractDoor {
  abstract image: string
  abstract color: string

  html() {
    return <img src={this.image} alt=''/>
  }

  enter(getters, setters) {
    if (!getters.keys[this.color]) {
      throw new Error()
    }

    setters.setKeys((prev) => {
      const previousCount = prev[this.color]

      const copy = { ...prev}
      copy[this.color] = previousCount - 1

      return copy
    })
  }
}