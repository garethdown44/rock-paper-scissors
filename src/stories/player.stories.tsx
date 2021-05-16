import { Story, Meta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Player, { Props } from '../components/main/player'

export default {
  title: 'Main/Player',
  component: Player,
  argTypes: {
    weapon: {},
    status: {},
    result: {}
  }
} as Meta

const Template: Story<Props> = (args) => <Player {...args} />

export const RockWaiting = Template.bind({})
RockWaiting.args = {
  weapon: 'rock',
  status: 'COUNTING_DOWN'
}

export const RockWin = Template.bind({})
RockWin.args = {
  weapon: 'rock',
  status: 'FINISHED',
  result: 'WIN'
}

export const RockLose = Template.bind({})
RockLose.args = {
  weapon: 'rock',
  status: 'FINISHED',
  result: 'LOSE'
}

export const PaperWaiting = Template.bind({})
PaperWaiting.args = {
  weapon: 'paper',
  status: 'COUNTING_DOWN'
}

export const PaperWin = Template.bind({})
PaperWin.args = {
  weapon: 'paper',
  status: 'FINISHED',
  result: 'WIN'
}

export const PaperLose = Template.bind({})
PaperLose.args = {
  weapon: 'paper',
  status: 'FINISHED',
  result: 'LOSE'
}

export const ScissorsWaiting = Template.bind({})
ScissorsWaiting.args = {
  weapon: 'scissors',
  status: 'COUNTING_DOWN'
}

export const ScissorsWin = Template.bind({})
ScissorsWin.args = {
  weapon: 'scissors',
  status: 'FINISHED',
  result: 'WIN'
}

export const ScissorsLose = Template.bind({})
ScissorsLose.args = {
  weapon: 'scissors',
  status: 'FINISHED',
  result: 'LOSE'
}