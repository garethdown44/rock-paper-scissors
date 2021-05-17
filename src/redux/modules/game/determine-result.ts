import { Weapon } from "../../../types"
import { Result } from "./game"

export default function determineResult(playerWeapon: Weapon, aiWeapon: Weapon): Result {
  if (playerWeapon === aiWeapon) {
    return 'DRAW'
  }

  switch (playerWeapon) {
    case 'rock':
      return aiWeapon === 'scissors' ? 'WIN' : 'LOSE'
    
    case 'paper':
      return aiWeapon === 'rock' ? 'WIN' : 'LOSE'
    
    case 'scissors':
      return aiWeapon === 'paper' ? 'WIN' : 'LOSE'
  }
}