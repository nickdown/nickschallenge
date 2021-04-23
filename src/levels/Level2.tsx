import AbstractLevel from './AbstractLevel'

export default class Level1 extends AbstractLevel {
  tilemap = [
    ['F','F','F','F','F','F','F','W','W','W','F','F','F','F','F','F'],
    ['F','F','F','F','F','F','F','W','Z','W','F','F','F','F','F','F'],
    ['F','F','F','W','W','W','W','W','D','W','W','W','W','F','F','F'],
    ['F','F','F','W','ffd','ffl','ffl','ffl','ffl','ffl','ffl','ffl','W','F','F','F'],
    ['F','F','F','W','ffd','W','W','W','W','W','W','ffu','W','F','F','F'],
    ['W','W','W','W','ffd','W','F','F','F','F','W','ffu','W','W','W','W'],
    ['W','ffd','ffl','ffl','ffl','W','F','F','C','F','W','ffu','ffl','ffl','ffl','W'],
    ['W','ffd','W','W','W','W','F','F','F','F','W','W','W','W','ffu','W'],
    ['W','ffd','W','itl','i','F','F','F','F','F','F','F','F','W','ffu','W'],
    ['W','ffd','W','i','F','W','F','F','F','F','F','F','F','W','ffu','W'],
    ['W','ffd','W','i','C','W','F','F','F','F','F','C','F','W','ffu','W'],
    ['W','ffd','W','ibl','i','F','F','F','F','F','F','F','F','W','ffu','W'],
    ['W','ffd','W','W','W','W','F','F','F','F','W','W','W','W','ffu','W'],
    ['W','ffr','ffr','ffr','ffr','ffr','ffu','ffu','ffu','ffr','ffr','ffr','ffr','ffr','ffu','W'],
    ['W','W','W','W','W','W','ffu','C','ffu','ffu','W','W','W','W','W','W'],
    ['F','F','F','F','F','W','ffu','ffu','ffu','ffu','W','F','F','F','F','F'],
    ['F','F','F','F','F','W','W','W','W','W','W','F','F','F','F','F'],
  ]

  startingPosition = { row: 10, col: 7 }

  requiredChips = 4
}