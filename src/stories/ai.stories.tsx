import { Story, Meta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Ai, { Props } from '../components/main/ai'

export default {
  title: 'Main/Ai',
  component: Ai,
  argTypes: {
    weapon: {},
    status: {},
    result: {}
  }
} as Meta

const Template: Story<Props> = (args) => <Ai {...args} />

export const Countdown3 = Template.bind({})
Countdown3.args = {
  weapon: 'rock',
  countdownValue: 3
}

export const Countdown2 = Template.bind({})
Countdown2.args = {
  weapon: 'rock',
  countdownValue: 2
}

export const Countdown1 = Template.bind({})
Countdown1.args = {
  weapon: 'rock',
  countdownValue: 1
}

export const AiLosesWithRock = Template.bind({})
AiLosesWithRock.args = {
  weapon: 'rock',
  countdownValue: 0,
  result: 'LOSE'
}