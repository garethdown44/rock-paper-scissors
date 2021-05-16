import styled from 'styled-components'
import { Button } from '../common/primitives';
import { Rock, Paper, Scissors } from '../common/index';
import { Weapon } from '../../types';

export type Props = {
  isVisible: boolean
  play: (weapon: Weapon) => void
}

const Wrapper = styled.div<{ isVisible: boolean}>`
  visibility: ${props => props.isVisible ? 'visible' : 'hidden'};
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

export default function ReplayControls ({ isVisible, play }: Props) {
  return (
    <Wrapper isVisible={isVisible}>
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