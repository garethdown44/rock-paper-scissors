import { Result } from '../redux/modules/game/game'
import determineResult from '../redux/modules/game/determine-result'

test('player rock blunts scissors', () => {
  const result = determineResult('rock', 'scissors')
  expect(result).toBe<Result>('WIN')
})

test('player scissors cut paper', () => {
  const result = determineResult('scissors', 'paper')
  expect(result).toBe<Result>('WIN')
})

test('player paper wraps rock', () => {
  const result = determineResult('paper', 'rock')
  expect(result).toBe<Result>('WIN')
})

test('ai rock blunts scissors', () => {
  const result = determineResult('scissors', 'rock')
  expect(result).toBe<Result>('LOSE')
})

test('ai scissors cut paper', () => {
  const result = determineResult('paper', 'scissors')
  expect(result).toBe<Result>('LOSE')
})

test('ai paper wraps rock', () => {
  const result = determineResult('rock', 'paper')
  expect(result).toBe<Result>('LOSE')
})

test('rock draw', () => {
  const result = determineResult('rock', 'rock')
  expect(result).toBe<Result>('DRAW')
})

test('paper draw', () => {
  const result = determineResult('paper', 'paper')
  expect(result).toBe<Result>('DRAW')
})

test('scissors draw', () => {
  const result = determineResult('scissors', 'scissors')
  expect(result).toBe<Result>('DRAW')
})