import { useDispatch, useSelector } from 'react-redux'
import MainContainer from './components/main-container'
import { AppState } from './redux/store'
import { Action } from './redux/modules/game/game'
import { Dispatch } from 'redux'
import { Game } from './game'

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

export default App