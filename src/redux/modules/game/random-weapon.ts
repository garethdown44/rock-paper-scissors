import { Weapon } from './game'

const weapons: Weapon[] = ['rock', 'paper', 'scissors']

export default function randomWeapon() : Weapon {
  const index = Math.floor(Math.random() * 3)
  return weapons[index]
}