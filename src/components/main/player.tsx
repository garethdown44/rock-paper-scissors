import { Weapon } from '../../types'
import { Result } from '../../redux/modules/game/game'
import { Wrapper, Box, StyledHeading } from './primitives';
import WeaponView from './weapons/index';
import ReplayControls from './replay-controls';

export type Props = {
  weapon: Weapon
  result?: Result
  play: (weapon: Weapon) => void
}

export default function Player({ weapon, result, play }: Props) {
  return (
    <Wrapper>
      <StyledHeading>
        You
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