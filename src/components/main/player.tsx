import { Weapon } from '../../types'
import { Result } from '../../redux/modules/game/game'
import { Box } from './primitives'
import WeaponView from './weapons/index';
import ReplayControls from './replay-controls';
import styled from 'styled-components';

export type Props = {
  weapon: Weapon
  result?: Result
  play: (weapon: Weapon) => void
}

const StyledHeading = styled.h1`
  font: normal normal bold 35px/43px Helvetica Neue;
  letter-spacing: 0px;
  color: #333333;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default function Player({ weapon, result, play }: Props) {
  return (
    <Wrapper>
      <StyledHeading>
        You:
      </StyledHeading>
      <Box>
        <WeaponView
          name={weapon}
          result={result}
        />

        <ReplayControls
          isVisible={!!result}
          play={play}
        />
      </Box>
    </Wrapper>
  )
}