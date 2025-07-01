import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './input'
import { ErrorOutline } from '@mui/icons-material'

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    label: 'Cadastrar processo',
    errors: {
      message: ''
    }
  }
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {}
}

export const InputRequired: Story = {
  args: {
    isRequired: true
  }
}

export const InputWithIcon: Story = {
  args: {
    icon: <ErrorOutline />
  }
}

export const InputWithHelp: Story = {
  args: {
    help: 'Help text'
  }
}

export const InputWithError: Story = {
  args: {
    errors: {
      message: 'Error message'
    }
  }
}

export const InputDisabled: Story = {
  args: {
    disabled: true
  }
}
