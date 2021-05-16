import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MainContainer from './components/main-container'
import Start from './components/start'
import Main from './components/main'
import { GameState, play } from './redux/modules/game/game'

type AppState = {
  game: GameState
}

function App() {
  return (
    <MainContainer>
      <Game />
    </MainContainer>
  )
}

function Game() {
  const gameState = useSelector((state: AppState) => state.game)
  const dispatch = useDispatch()

  if (gameState.status === 'START') {
    return (
      <Start
        onShoot={weaponName => dispatch(play(weaponName))}
      />
    )
  }

  console.log(gameState)

  return (
    <Main
      result={gameState.result}
      playerWeapon={gameState.playerWeapon!}
      aiWeapon={gameState.aiWeapon}
      play={weaponName => dispatch(play(weaponName))}
      countdownValue={gameState.countdownValue}
    />
  )
}

export default App