import { Floor } from './index'

test('can be entered', () => {
  const floor = new Floor()

  expect(floor.canBeEntered()).toBe(true)
});
