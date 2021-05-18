export type Weapon = 'rock' | 'paper' | 'scissors'
export type Result = 'WIN' | 'LOSE' | 'DRAW'

export type Totals = {
  wins: number
  losses: number
  draws: number
}

export type GameState = {
  status: 'START' | 'COUNTING_DOWN' | 'FINISHED'
  playerWeapon?: Weapon
  aiWeapon?: Weapon
  countdownValue?: number
  result?: Result
  totals: Totals
}