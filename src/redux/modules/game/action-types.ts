import { Weapon } from "./game"

export type PingAction = {
  type: 'PING'
}

export type PongAction = {
  type: 'PONG'
}

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

export type Action = PingAction | PongAction | PlayAction | CountdownAction | DrawAction