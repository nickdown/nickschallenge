import { Cell } from './index'

test('can be entered', () => {
  const cell = new Cell()

  expect(cell.canBeEntered()).toBe(true)
});
