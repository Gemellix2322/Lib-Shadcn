import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './button'
const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: { children: 'Button' }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {}
}

export const LinkButton: Story = {
  args: {
    variant: "link"
  }
}

export const Loading: Story = {
  args: {
    isLoading: true
  }
}
