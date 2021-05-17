import { combineEpics } from 'redux-observable'
import { combineReducers } from 'redux'
import game, { playEpic } from './game/game'

export const rootEpic = combineEpics(
  playEpic
)

export const rootReducer = combineReducers({
  game
})