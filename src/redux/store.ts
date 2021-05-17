import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { GameState } from './modules/game/game'
import { rootEpic, rootReducer } from './modules/root'

export type AppState = {
  game: GameState
}

const epicMiddleware = createEpicMiddleware()

export default function configureStore(initialState?: AppState) {
  const store = initialState
    ? createStore(rootReducer, initialState, applyMiddleware(epicMiddleware))
    : createStore(rootReducer, applyMiddleware(epicMiddleware))

  epicMiddleware.run(rootEpic)

  return store
}