import type { Meta, StoryObj } from '@storybook/react'
import { Tabs } from './tabs'

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {}
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: () => {
    return (
      <Tabs
      list={'primeiro', 'segundo'}
      />
    )
  } 
}

