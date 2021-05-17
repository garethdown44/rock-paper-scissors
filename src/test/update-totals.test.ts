import { Totals } from '../redux/modules/game/game'
import updateTotals from '../redux/modules/game/update-totals'

const totals: Totals = {
  wins: 0,
  losses: 0,
  draws: 0
}

test('it updates the wins if the result is win', () => {
  const result = updateTotals({ ...totals }, 'WIN')

  expect(result.wins).toBe(1)
  expect(result.losses).toBe(0)
  expect(result.draws).toBe(0)
})

test('it updates the losses if the result is lose', () => {
  const result = updateTotals({ ...totals }, 'LOSE')

  expect(result.wins).toBe(0)
  expect(result.losses).toBe(1)
  expect(result.draws).toBe(0)
})

test('it updates the losses if the result is draw', () => {
  const result = updateTotals({ ...totals }, 'DRAW')

  expect(result.wins).toBe(0)
  expect(result.losses).toBe(0)
  expect(result.draws).toBe(1)
})