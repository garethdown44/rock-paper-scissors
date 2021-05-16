import { Weapon } from '../../types'
import Arsenal from './arsenal'
import { Box, Instruction, WeaponsWrapper } from './primitives'

export type Props = {
  onShoot: (weapon: Weapon) => void
}

export default function Start({ onShoot }: Props) {
  return (
    <Box>
      <Instruction>
        Choose:
      </Instruction>
      <WeaponsWrapper>
        <Arsenal
          onShoot={onShoot}
        />
      </WeaponsWrapper>
    </Box>
  )
}