import { Weapon } from '../../types'
import { Result } from '../../redux/modules/game/game'
import { Box } from './primitives'
import WeaponView from './weapons/index';

export type Props = {
  weapon: Weapon
  status: 'COUNTING_DOWN' | 'FINISHED'
  result?: Result
}

export default function Player({ weapon, result }: Props) {
  return (
    <Box>
      <WeaponView
        name={weapon}
        result={result}
      />
    </Box>
  )
}