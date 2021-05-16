import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MainContainer from './components/main-container'
import Start from './components/start'
import { GameState } from './redux/modules/game/game'

type AppState = {
  game: GameState
}

function App() {
  const status = useSelector((state: AppState) => state.game.status)
  const dispatch = useDispatch()

  return (
    <MainContainer>
      <div>{status}</div>
      <Start
        onShoot={weaponName => dispatch({ type: 'PLAY' })}
      />
    </MainContainer>
  )
}

export default App