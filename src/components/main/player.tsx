import { Weapon } from '../../types'
import { Result } from '../../redux/modules/game/game'
import { Box } from './primitives'
import WeaponView from './weapons/index';
import ReplayControls from './replay-controls';

export type Props = {
  weapon: Weapon
  result?: Result
}

export default function Player({ weapon, result }: Props) {
  return (
    <Box>
      <WeaponView
        name={weapon}
        result={result}
      />

      {result && <ReplayControls />}
    </Box>
  )
}