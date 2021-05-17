import React from 'react'
import { render, screen } from '@testing-library/react'
import { Game } from '../App'
import reducer, { initialState, play, countdown, draw } from '../redux/modules/game/game'

test('shows the start screen at first', () => {
  render(<Game state={initialState} dispatch={jest.fn()} />)
  const startTitle = screen.getByText(/Choose:/i)
  expect(startTitle).toBeInTheDocument()
})

test('sets the player weapon after play', () => {
  const startState = { ...initialState }
  const afterPlayState = reducer(startState, play('rock'))

  render(<Game state={afterPlayState} dispatch={jest.fn()} />)
  const playerElement = screen.getByTitle('You')
  const rockElement = playerElement.querySelector('[title="rock"]')
  expect(rockElement).toBeVisible()
})

test('shows the countdown screen when the game is counting down', () => {
  const startState = { ...initialState }
  const afterPlayState = reducer(startState, play('rock'))
  const afterCountdown = reducer(afterPlayState, countdown(3))

  render(<Game state={afterCountdown} dispatch={jest.fn()} />)
  const countdownElement = screen.getByRole('timer')
  expect(countdownElement).toHaveTextContent('3')
})

test('shows the result when AI draws', () => {
  const startState = { ...initialState }

  const actions = [
    play('rock'),
    countdown(3),
    countdown(2),
    countdown(1),
    draw('paper')
  ]

  const endState = actions.reduce(reducer, startState)

  render(<Game state={endState} dispatch={jest.fn()} />)
  const aiElement = screen.getByTitle('AI')
  const paperElement = aiElement.querySelector('[title="paper"]')
  const lostElement = screen.getByText('LOST')
  expect(paperElement).toBeVisible()
  expect(lostElement).toBeVisible()
})

test('is a win if player chooses rock and ai chooses scissors', () => {
  const startState = { ...initialState }
  const actions = [
    play('rock'),
    draw('scissors')
  ]

  const endState = actions.reduce(reducer, startState)

  render(<Game state={endState} dispatch={jest.fn()} />)
  const win = screen.getByText('WIN!')
  expect(win).toBeVisible()
})

test('is a draw if player and ai choose paper', () => {
  const startState = { ...initialState }
  const actions = [
    play('paper'),
    draw('paper')
  ]

  const endState = actions.reduce(reducer, startState)

  render(<Game state={endState} dispatch={jest.fn()} />)
  const win = screen.getByText('DRAW')
  expect(win).toBeVisible()
})