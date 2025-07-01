import { Input } from "./input";
import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "./label";

const meta = {
    title: 'UI/Input',
    component: Input,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    args: {}
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: () => {
        return (
            <>
            <Label>Teste</Label>
            <Input placeholder="Teste"></Input>
            </>
        )
    }
}