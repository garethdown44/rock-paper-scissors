import { Story, Meta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Player, { Props } from '../components/main/player'

export default {
  title: 'Main/Player',
  component: Player,
  argTypes: {
    weapon: {
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
    }
  }
} as Meta

const Template: Story<Props> = (args) => <Player {...args} />

export const RockWaiting = Template.bind({})
RockWaiting.args = {
  weapon: 'rock'
}

export const RockWin = Template.bind({})
RockWin.args = {
  weapon: 'rock',
  result: 'WIN'
}

export const RockLose = Template.bind({})
RockLose.args = {
  weapon: 'rock',
  result: 'LOSE'
}

export const PaperWaiting = Template.bind({})
PaperWaiting.args = {
  weapon: 'paper'
}

export const PaperWin = Template.bind({})
PaperWin.args = {
  weapon: 'paper',
  result: 'WIN'
}

export const PaperLose = Template.bind({})
PaperLose.args = {
  weapon: 'paper',
  result: 'LOSE'
}

export const ScissorsWaiting = Template.bind({})
ScissorsWaiting.args = {
  weapon: 'scissors'
}

export const ScissorsWin = Template.bind({})
ScissorsWin.args = {
  weapon: 'scissors',
  result: 'WIN'
}

export const ScissorsLose = Template.bind({})
ScissorsLose.args = {
  weapon: 'scissors',
  result: 'LOSE'
}