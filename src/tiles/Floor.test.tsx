import { Floor } from './index'

test('can be entered', () => {
  const cell = new Floor()

  expect(cell.canBeEntered()).toBe(true)
});
