import { Story, Meta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Totals, { Props } from '../components/main/totals'

export default {
  title: 'Main/Totals',
  component: Totals,
  argTypes: {
    wins: {
    },
    draws: {
    },
    losses: {
    }
  }
} as Meta

const Template: Story<Props> = (args) => <Totals {...args} />

export const OneWin = Template.bind({})
OneWin.args = {
  wins: 1,
  draws: 0,
  losses: 0
}

export const OneOfAll = Template.bind({})
OneOfAll.args = {
  wins: 1,
  draws: 1,
  losses: 1
}