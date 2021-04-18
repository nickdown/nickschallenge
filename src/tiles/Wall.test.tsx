import { Wall } from './'
import IllegalMoveError from '../errors/IllegalMoveError'

test('cannot be entered', () => {
  const cell = new Wall()

  expect(cell.canBeEntered()).toBe(false)
});

test('throws if entered', () => {
  const cell = new Wall()

  expect(() => cell.enter()).toThrowError(new IllegalMoveError())
});