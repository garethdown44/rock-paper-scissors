import { Story, Meta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import ReplayControls, { Props } from '../components/main/replay-controls'

export default {
  title: 'Main/Player/ReplayControls',
  component: ReplayControls,
  argTypes: {
  }
} as Meta

const Template: Story<Props> = (args) => <ReplayControls {...args} />

export const Normal = Template.bind({})
Normal.args = {
  play: action('play')
}