import { Checkbox } from "./checkbox";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: 'UI/Checkbox',
    component: Checkbox,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    args: {}
} satisfies Meta<typeof Checkbox>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: () => {
        return (
            <Checkbox>Teste</Checkbox>
        )
    }
}