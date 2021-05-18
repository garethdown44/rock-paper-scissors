import { Weapon } from './game'

const weapons: Weapon[] = ['rock', 'paper', 'scissors']

export default function randomWeapon() : Weapon {
  const index = Math.floor(Math.random() * 2)
  return weapons[index]
}