import { Weapon } from '../../types'
import { Result } from '../../redux/modules/game/game'
import { Wrapper, PlayerBox, StyledHeading } from './primitives';
import WeaponView from './weapons/index';
import ReplayControls from './replay-controls';
import styled from 'styled-components';

export type Props = {
  weapon: Weapon
  result?: Result
  play: (weapon: Weapon) => void
}

const WeaponWrapper = styled.div<{ isFinished: boolean }>`
  transition: margin-bottom .2s ease-out;
  margin-bottom: ${props => props.isFinished ? '40px' : '0px'};
`

const ReplayControlsWrapper = styled.div<{ isVisible: boolean }>`
  visibility: ${props => props.isVisible ? 'visible' : 'hidden'};
  padding-bottom: 30px;
`

export default function Player({ weapon, result, play }: Props) {
  return (
    <Wrapper title="You">
      <StyledHeading>
        You
      </StyledHeading>
      
      <PlayerBox>
        <WeaponWrapper isFinished={!!result}>
          <WeaponView
            name={weapon}
            result={result}
            />
        </WeaponWrapper>

        <ReplayControlsWrapper isVisible={!!result}>
          <ReplayControls
            play={play}
          />
        </ReplayControlsWrapper>
      </PlayerBox>
    </Wrapper>
  )
}