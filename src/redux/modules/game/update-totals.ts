import { Result, Totals } from './game'

export default function updateTotals(totals: Totals, result: Result): Totals {
  const newTotals = {
    ...totals
  }

  switch (result) {
    case 'WIN':
      newTotals.wins += 1
      break;
    case 'LOSE':
      newTotals.losses += 1
      break;
    case 'DRAW':
      newTotals.draws += 1
      break;
  }

  return newTotals
}