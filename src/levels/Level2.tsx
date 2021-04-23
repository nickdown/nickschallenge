import AbstractLevel from './AbstractLevel'

export default class Level1 extends AbstractLevel {
  tilemap = [
    ['F','F','F','F','F','F','F','W','W','W','F','F','F','F','F','F'],
    ['F','F','F','F','F','F','F','W','Z','W','F','F','F','F','F','F'],
    ['F','F','F','W','W','W','W','W','D','W','W','W','W','F','F','F'],
    ['F','F','F','W','F','F','F','F','F','F','F','F','W','F','F','F'],
    ['F','F','F','W','F','W','W','W','W','W','W','F','W','F','F','F'],
    ['W','W','W','W','F','W','F','F','F','F','W','F','W','W','W','W'],
    ['W','F','F','F','F','W','F','F','C','F','W','F','F','F','F','W'],
    ['W','F','W','W','W','W','F','F','F','F','W','W','W','W','F','W'],
    ['W','F','W','F','F','F','F','F','F','F','F','F','F','W','F','W'],
    ['W','F','W','F','F','W','F','F','F','F','F','F','F','W','F','W'],
    ['W','F','W','F','C','W','F','F','F','F','F','C','F','W','F','W'],
    ['W','F','W','F','F','F','F','F','F','F','F','F','F','W','F','W'],
    ['W','F','W','W','W','W','F','F','F','F','W','W','W','W','F','W'],
    ['W','F','F','F','F','F','F','F','F','F','F','F','F','F','F','W'],
    ['W','W','W','W','W','W','F','C','F','F','W','W','W','W','W','W'],
    ['F','F','F','F','F','W','F','F','F','F','W','F','F','F','F','F'],
    ['F','F','F','F','F','W','W','W','W','W','W','F','F','F','F','F'],
  ]

  startingPosition = { row: 10, col: 7 }

  requiredChips = 4
}