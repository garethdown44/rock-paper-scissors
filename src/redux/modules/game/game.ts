import { concat, of, timer } from 'rxjs'
import { filter, switchMap, map, take } from 'rxjs/operators'
import { Weapon } from '../../../types'
import determineResult from './determine-result'
import randomWeapon from './random-weapon'

type PingAction = {
  type: 'PING'
}

type PongAction = {
  type: 'PONG'
}

type PlayAction = {
  type: 'PLAY',
  weapon: Weapon
}

type CountdownAction = {
  type: 'COUNTDOWN',
  value: number
}

type DrawAction = {
  type: 'DRAW'
  aiWeapon: Weapon
}

export type Action = PingAction | PongAction | PlayAction | CountdownAction | DrawAction

export const countdown = (value: number) : CountdownAction => ({ type: 'COUNTDOWN', value })
export const draw = (aiWeapon: Weapon): DrawAction => ({ type: 'DRAW', aiWeapon })
export const play = (weapon: Weapon) : PlayAction => ({ type: 'PLAY', weapon })

export const playEpic = (action$: any) => action$.pipe(
  filter((action: Action) => action.type === 'PLAY'),
  switchMap(() => {
    const count = timer(0, 1000).pipe(
        take(4),
        map(x => 3 - x),
        map(x => countdown(x)
      )
    )

    return concat(count, of(draw(randomWeapon())))
  })
)

export type Result = 'WIN' | 'LOSE' | 'DRAW'

export type GameState = {
  status: 'START' | 'COUNTING_DOWN' | 'FINISHED'
  playerWeapon?: Weapon
  aiWeapon?: Weapon
  countdownValue?: number
  result?: Result
  totals: {
    wins: number
    losses: number
    draws: number
  }
}

export const initialState : GameState = {
  status: 'START',
  totals: {
    wins: 0,
    losses: 0,
    draws: 0
  }
}

export default (state: GameState = initialState, action: Action) : GameState => {
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
      return {
        ...state,
        status: 'FINISHED',
        aiWeapon: action.aiWeapon,
        result: determineResult(state.playerWeapon!, action.aiWeapon),
        countdownValue: undefined
      }
    default:
      return state;
  }
}