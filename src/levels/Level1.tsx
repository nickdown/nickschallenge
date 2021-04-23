import AbstractLevel from './AbstractLevel'

export default class Level1 extends AbstractLevel {
  tilemap = [
    ['F','F','F','F','F','F','F','F','F','F','F','F','F','F','F','F','F'],
    ['F','F','F','W','W','W','W','W','F','W','W','W','W','W','F','F','F'],
    ['F','F','F','W','F','F','F','W','W','W','F','F','F','W','F','F','F'],
    ['F','F','F','W','F','C','F','W','Z','W','F','C','F','W','F','F','F'],
    ['F','W','W','W','W','W','G','W','D','W','G','W','W','W','W','W','F'],
    ['F','W','F','y','F','B','F','F','F','F','F','R','F','y','F','W','F'],
    ['F','W','F','C','F','W','b','F','F','F','r','W','F','C','F','W','F'],
    ['F','W','W','W','W','W','C','F','F','F','C','W','W','W','W','W','F'],
    ['F','W','F','C','F','W','b','F','F','F','r','W','F','C','F','W','F'],
    ['F','W','F','F','F','R','F','F','C','F','F','B','F','F','F','W','F'],
    ['F','W','W','W','W','W','W','Y','W','Y','W','W','W','W','W','W','F'],
    ['F','F','F','F','F','W','F','F','W','F','F','W','F','F','F','F','F'],
    ['F','F','F','F','F','W','F','C','W','C','F','W','F','F','F','F','F'],
    ['F','F','F','F','F','W','F','F','W','g','F','W','F','F','F','F','F'],
    ['F','F','F','F','F','W','W','W','W','W','W','W','F','F','F','F','F'],
    ['F','F','F','F','F','F','F','F','F','F','F','F','F','F','F','F','F'],
  ]

  startingPosition = { row: 7, col: 8 }

  requiredChips = 11
}