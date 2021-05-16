import { Weapon } from '../../types'
import { Result } from '../../redux/modules/game/game'
import { Box } from './primitives'
import WeaponView from './weapons/index';

export type Props = {
  weapon?: Weapon
  countdownValue?: number
  result?: Result
}

function Show(props: Props) {
  if (!props.result) {
    return <div>{props.countdownValue}</div>
  }

  return (
    <WeaponView
      name={props.weapon!}
      result={props.result}
    />
  )
}

export default function Ai(props: Props) {
  return (
    <Box>
      <Show {...props} />
    </Box>
  )
}