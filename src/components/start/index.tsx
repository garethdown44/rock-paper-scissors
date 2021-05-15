import { Weapon } from '../../types'
import Weapons from '../weapons'
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
        <Weapons onShoot={onShoot} />
      </WeaponsWrapper>
    </Box>
  )
}