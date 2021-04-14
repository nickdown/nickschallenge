import { Wall } from './'

test('cannot be entered', () => {
  const cell = new Wall()

  expect(cell.canBeEntered()).toBe(false)
});
