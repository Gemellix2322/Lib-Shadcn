import type { Meta, StoryObj } from '@storybook/react'
import { Alert, AlertDescription, AlertTitle } from './alert'

const meta = {
    title: 'UI/Alert',
    component: Alert,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    args: {}
} satisfies Meta<typeof Alert>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: () => {
        return (
            <Alert variant={'default'} >
                <AlertTitle>Notificação teste</AlertTitle>
                <AlertDescription>Teste de Notificação</AlertDescription>
            </Alert>
        )
    }
}

export const Success: Story = {
    render: () => {
        return (
            <Alert variant={'success'} >
                <AlertTitle>Notificação Sucesso</AlertTitle>
                <AlertDescription>Teste de Notificação de Sucesso</AlertDescription>
            </Alert>
        )
    }
}

export const Error: Story = {
    render: () => {
        return (
            <Alert variant={'error'}>
                <AlertTitle>Notificação de Erro</AlertTitle>
                <AlertDescription>Teste de Notificação de Erro</AlertDescription>
            </Alert>
        )
    }
}