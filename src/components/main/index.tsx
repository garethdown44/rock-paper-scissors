import Player from './player'
import Ai from './ai'
import { Result } from '../../redux/modules/game/game'
import { Weapon } from '../../types'

type Props = {
  result?: Result
  playerWeapon: Weapon
  aiWeapon?: Weapon
  play: (weapon: Weapon) => void
}

export default function Main({ playerWeapon, aiWeapon, result, play }: Props) {
  return (
    <div>
      <Player
        weapon={playerWeapon}
        result={result}
        play={play}
      />

      <Ai
        weapon={aiWeapon}
        result={result}
      />
    </div>
  )
}