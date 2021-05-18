import Player from './player'
import Ai from './ai'
import { Weapon, Result, Totals } from '../../redux/modules/game/game'
import styled from 'styled-components'
import ResultIndicator from './result-indicator'
import TotalView from './totals'

export type Props = {
  result?: Result
  playerWeapon: Weapon
  aiWeapon?: Weapon
  countdownValue?: number
  totals: Totals
  play: (weapon: Weapon) => void
}

const PlayAreaLayout = styled.div`
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

const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TotalsWrapper = styled.div`
  margin-top: 50px;
`

export default function Main({ playerWeapon, aiWeapon, result, countdownValue, totals, play }: Props) {
  return (
    <MainLayout>
      <PlayAreaLayout>
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
      </PlayAreaLayout>
      <TotalsWrapper>
        <TotalView
          wins={totals.wins}
          draws={totals.draws}
          losses={totals.losses}
        />
      </TotalsWrapper>
    </MainLayout>
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