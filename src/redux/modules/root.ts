import { combineEpics } from 'redux-observable'
import { combineReducers } from 'redux'
import game, { countdownEpic } from './game/game'

export const rootEpic = combineEpics(
  countdownEpic
)

export const rootReducer = combineReducers({
  game
})