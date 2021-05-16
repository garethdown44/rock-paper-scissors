import { interval, timer } from 'rxjs'
import { filter, delay, mapTo, switchMap, map, takeUntil, takeWhile, mergeMap, tap } from 'rxjs/operators'
import { Weapon } from '../../../types'
import determineResult from './determine-result'

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

type Action = PingAction | PongAction | PlayAction | CountdownAction | DrawAction

const countdown = (value: number) : CountdownAction => ({ type: 'COUNTDOWN', value })
const draw = (aiWeapon: Weapon): DrawAction => ({ type: 'DRAW', aiWeapon })
export const play = (weapon: Weapon) : PlayAction => ({ type: 'PLAY', weapon })

export const countdownEpic = (action$: any) => action$.pipe(
  filter((action: Action) => action.type === 'PLAY'),
  switchMap(() => interval(1000).pipe(
    takeWhile(count => count < 4),
    map(x => countdown(3 - x)),
    tap(x => console.log(x))
  ))
)

export const drawEpic = (action$: any) => action$.pipe(
  filter((action: Action) => action.type === 'COUNTDOWN' && action.value === 1),
  delay(1000),
  mapTo(draw('rock')),
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

const initialState : GameState = {
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
        playerWeapon: action.weapon
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
        result: determineResult(state.playerWeapon!, action.aiWeapon)
      }
    default:
      return state;
  }
}