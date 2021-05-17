import Player from './player'
import Ai from './ai'
import { Result } from '../../redux/modules/game/game'
import { Weapon } from '../../types'
import styled from 'styled-components'
import ResultIndicator from './result-indicator';
import { StyledHeading } from './primitives';

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
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 100%;

  @media (max-width: 990px) {
    flex-direction: column;
    justify-content: space-between;
    margin: 50px 0;
  }
`

export default function Main({ playerWeapon, aiWeapon, result, countdownValue, play }: Props) {
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