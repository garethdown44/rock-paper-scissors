import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MainContainer from './components/main-container'
import Start from './components/start'
import Main from './components/main'
import { play, GameState, Action } from './redux/modules/game/game';
import { AppState } from './redux/store'
import { Dispatch } from 'redux'

function App() {
  const gameState = useSelector((state: AppState) => state.game)
  const dispatch = useDispatch<Dispatch<Action>>()

  return (
    <MainContainer>
      <Game
        state={gameState}
        dispatch={dispatch} />
    </MainContainer>
  )
}

type GameProps = {
  state: GameState
  dispatch: Dispatch<Action>
}

export function Game({ state, dispatch } : GameProps) {
  if (state.status === 'START') {
    return (
      <Start
        onShoot={weaponName => dispatch(play(weaponName))}
      />
    )
  }

  return (
    <Main
      result={state.result}
      playerWeapon={state.playerWeapon!}
      aiWeapon={state.aiWeapon}
      play={weaponName => dispatch(play(weaponName))}
      countdownValue={state.countdownValue}
    />
  )
}

export default App