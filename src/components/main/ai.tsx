import { Weapon } from '../../types'
import { Result } from '../../redux/modules/game/game'
import { Box } from './primitives'
import { Rock } from './weapons/index';

export type Props = {
  weapon: Weapon
  status: 'COUNTING_DOWN' | 'FINISHED'
  count: number
  result: Result
}

export default function Ai({ weapon, result }: Props) {
  return (
    <Box>
      <Rock />
    </Box>
  )
}