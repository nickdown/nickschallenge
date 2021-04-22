export default abstract class AbstractKey {
  abstract image: string;
  abstract color: string;

  html() {
    return <img src={this.image} alt=""/>
  }

  enter(getters, setters) {
    setters.setKeys((prev) => {
      const previousCount = prev[this.color]

      const copy = { ...prev}
      copy[this.color] = previousCount + 1

      return copy
    })
  }
}