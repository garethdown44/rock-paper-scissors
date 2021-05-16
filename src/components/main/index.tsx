import Player from './player'
import Ai from './ai'
import { Result } from '../../redux/modules/game/game'
import { Weapon } from '../../types'

type Props = {
  result?: Result
  playerWeapon: Weapon
  aiWeapon?: Weapon
}

export default function Main({ playerWeapon, aiWeapon, result }: Props) {
  return (
    <div>
      <Player
        weapon={playerWeapon}
        result={result}
      />

      <Ai
        weapon={aiWeapon}
        result={result}
      />
    </div>
  )
}