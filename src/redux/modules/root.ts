import { combineEpics } from 'redux-observable'
import { combineReducers } from 'redux'
import game, { countdownEpic, drawEpic } from './game/game'

export const rootEpic = combineEpics(
  countdownEpic,
  drawEpic
)

export const rootReducer = combineReducers({
  game
})