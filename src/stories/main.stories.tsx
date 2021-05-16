import { Story, Meta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Main, { Props } from '../components/main'

export default {
  title: 'Main/Main',
  component: Main,
  argTypes: {
    playerWeapon: {},
    aiWeapon: {},
    result: {}
  }
} as Meta

const Template: Story<Props> = (args) => <Main {...args} />

export const Countdown3 = Template.bind({})
Countdown3.args = {
  playerWeapon: 'rock',
  aiWeapon: 'paper',
  countdownValue: 3
}

export const Countdown2 = Template.bind({})
Countdown2.args = {
  playerWeapon: 'rock',
  aiWeapon: 'paper',
  countdownValue: 2
}

export const Countdown1 = Template.bind({})
Countdown1.args = {
  playerWeapon: 'rock',
  aiWeapon: 'paper',
  countdownValue: 1
}

export const FinishedPlayerLoses = Template.bind({})
FinishedPlayerLoses.args = {
  playerWeapon: 'rock',
  aiWeapon: 'paper',
  result: 'LOSE'
}

export const FinishedPlayerWins = Template.bind({})
FinishedPlayerWins.args = {
  playerWeapon: 'paper',
  aiWeapon: 'rock',
  result: 'WIN'
}

export const FinishedPlayerDraws = Template.bind({})
FinishedPlayerDraws.args = {
  playerWeapon: 'paper',
  aiWeapon: 'paper',
  result: 'DRAW'
}