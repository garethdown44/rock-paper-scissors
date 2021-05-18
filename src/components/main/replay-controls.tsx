import styled from 'styled-components'
import { Button } from '../common/primitives'
import { Rock, Paper, Scissors } from '../common/index'
import { Weapon } from '../../redux/modules/game/game'

export type Props = {
  play: (weapon: Weapon) => void
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledHeading = styled.h2`
  text-align: center;
  font: normal normal 300 26px/32px Helvetica Neue;
  font-weight: light;
  letter-spacing: 0px;
  color: #666666;
`

export default function ReplayControls ({ play }: Props) {
  return (
    <Wrapper>
      <StyledHeading>Play Again:</StyledHeading>
      <div>
        <Button onClick={() => play('rock')}>
          <Rock size="small" />
        </Button>
        <Button onClick={() => play('paper')}>
          <Paper size="small" />
          </Button>
          <Button onClick={() => play('scissors')}>
          <Scissors size="small" />
        </Button>
      </div>
    </Wrapper>
  )
}