import { Story, Meta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Start, { Props } from '../components/start'

export default {
  title: 'Start/Start',
  component: Start,
  argTypes: {
    onShoot: { }
  }
} as Meta

const Template: Story<Props> = (args) => <Start {...args} />

export const Normal = Template.bind({})
Normal.args = {
  onShoot: action('shoot')
}