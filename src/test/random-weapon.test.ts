import { Result } from '../redux/modules/game/game'
import randomWeapon from '../redux/modules/game/random-weapon'

test('random weapon should return all weapons', () => {
  const results = []

  for (let i = 0; i < 200; i++) {
    results.push(randomWeapon())
  }

  expect(results).toContain('rock')
  expect(results).toContain('paper')
  expect(results).toContain('scissors')
})