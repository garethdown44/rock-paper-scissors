import { Weapon } from "./game"

export type PlayAction = {
  type: 'PLAY',
  weapon: Weapon
}

export type CountdownAction = {
  type: 'COUNTDOWN',
  value: number
}

export type DrawAction = {
  type: 'DRAW'
  aiWeapon: Weapon
}

export type Action = PlayAction | CountdownAction | DrawAction