import Start from './components/start'
import Main from './components/main'
import { play, GameState, Action } from './redux/modules/game/game'
import { Dispatch } from 'redux'

type GameProps = {
  state: GameState
  dispatch: Dispatch<Action>
}

export function Game({ state, dispatch }: GameProps) {
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
      totals={state.totals}
    />
  )
}