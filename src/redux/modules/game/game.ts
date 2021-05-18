import { concat, of, timer } from 'rxjs'
import { filter, switchMap, map, take } from 'rxjs/operators'
import { Action, CountdownAction, DrawAction, PlayAction } from './action-types'
import determineResult from './determine-result'
import randomWeapon from './random-weapon'
import { GameState, Weapon } from './state-types'
import updateTotals from './update-totals'

export * from './action-types'
export * from './state-types'

export const countdown = (value: number) : CountdownAction => ({ type: 'COUNTDOWN', value })
export const draw = (aiWeapon: Weapon): DrawAction => ({ type: 'DRAW', aiWeapon })
export const play = (weapon: Weapon) : PlayAction => ({ type: 'PLAY', weapon })

export const playEpic = (action$: any) => action$.pipe(
  filter((action: Action) => action.type === 'PLAY'),
  switchMap(() => {
    const count = timer(0, 1000).pipe(
      take(4),
      map(x => 3 - x),
      map(x => countdown(x))
    )

    return concat(count, of(draw(randomWeapon())))
  })
)

export const initialState : GameState = {
  status: 'START',
  totals: {
    wins: 0,
    losses: 0,
    draws: 0
  }
}

export default function reducer(state: GameState = initialState, action: Action) : GameState {
  switch (action.type) {
    case 'PLAY':
      return {
        ...state,
        status: 'COUNTING_DOWN',
        result: undefined,
        playerWeapon: action.weapon,
        aiWeapon: undefined
      }
    case 'COUNTDOWN':
      return {
        ...state,
        status: 'COUNTING_DOWN',
        countdownValue: action.value
      }
    case 'DRAW':
      const result = determineResult(state.playerWeapon!, action.aiWeapon)
      
      return {
        ...state,
        status: 'FINISHED',
        aiWeapon: action.aiWeapon,
        result,
        countdownValue: undefined,
        totals: updateTotals(state.totals, result)
      }
    default:
      return state;
  }
}