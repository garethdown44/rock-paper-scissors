import { Story, Meta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Main, { Props } from '../components/main'

export default {
  title: 'Main/Main',
  component: Main,
  argTypes: {
    playerWeapon: {
      control: {
        type: 'radio',
        options: ['rock', 'paper', 'scissors']
      }
    },
    aiWeapon: {
      control: {
        type: 'radio',
        options: ['rock', 'paper', 'scissors']
      }
    },
    result: {
      control: {
        type: 'radio',
        options: ['WIN', 'LOSE', 'DRAW', undefined]
      }
    },
    totals: {
    }
  }
} as Meta

const Template: Story<Props> = (args) => <Main {...args} />

const totals = { wins: 0, losses: 0, draws: 0 }

export const Countdown3 = Template.bind({})
Countdown3.args = {
  playerWeapon: 'rock',
  aiWeapon: 'paper',
  countdownValue: 3,
  totals
}

export const Countdown2 = Template.bind({})
Countdown2.args = {
  playerWeapon: 'rock',
  aiWeapon: 'paper',
  countdownValue: 2,
  totals
}

export const Countdown1 = Template.bind({})
Countdown1.args = {
  playerWeapon: 'rock',
  aiWeapon: 'paper',
  countdownValue: 1,
  totals
}

export const FinishedPlayerLoses = Template.bind({})
FinishedPlayerLoses.args = {
  playerWeapon: 'rock',
  aiWeapon: 'paper',
  result: 'LOSE',
  totals
}

export const FinishedPlayerWins = Template.bind({})
FinishedPlayerWins.args = {
  playerWeapon: 'paper',
  aiWeapon: 'rock',
  result: 'WIN',
  totals
}

export const FinishedPlayerDraws = Template.bind({})
FinishedPlayerDraws.args = {
  playerWeapon: 'paper',
  aiWeapon: 'paper',
  result: 'DRAW',
  totals
}