import { Weapon } from "../../../types"
import { Result } from "./game"

const winToLoserMap: Map<Weapon, Weapon> = new Map<Weapon, Weapon>()
winToLoserMap.set('rock', 'scissors')
winToLoserMap.set('paper', 'rock')
winToLoserMap.set('scissors', 'paper')

export default function determineResult(playerWeapon: Weapon, aiWeapon: Weapon): Result {
  if (playerWeapon === aiWeapon) {
    return 'DRAW'
  }

  const losingWeapon = winToLoserMap.get(playerWeapon)

  return aiWeapon === losingWeapon
    ? 'WIN'
    : 'LOSE'
}