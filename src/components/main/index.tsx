import Player from './player'
import Ai from './ai'
import { Result } from '../../redux/modules/game/game'
import { Weapon } from '../../types'
import styled from 'styled-components'
import ResultIndicator from './result-indicator';

export type Props = {
  result?: Result
  playerWeapon: Weapon
  aiWeapon?: Weapon
  countdownValue?: number
  play: (weapon: Weapon) => void
}

const Layout = styled.div`
  display: flex;
  align-items: center;
`

export default function Main({ playerWeapon, aiWeapon, result, countdownValue, play }: Props) {
  console.log('COUNTDOWN VALUE', countdownValue)
  return (
    <Layout>
      <Player
        weapon={playerWeapon}
        result={result}
        play={play}
      />

      <ResultIndicator
        result={result}
      />

      <Ai
        weapon={aiWeapon}
        result={invertResult(result)}
        countdownValue={countdownValue}
      />
    </Layout>
  )
}

function invertResult(result?: Result) {
  if (!result) {
    return undefined
  }
  
  if (result === 'DRAW') {
    return result
  }

  return result === 'WIN'
    ? 'LOSE'
    : 'WIN'
}