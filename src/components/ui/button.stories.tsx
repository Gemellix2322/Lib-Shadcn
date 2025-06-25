import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button as ButtonCN } from './button';

const meta: Meta<typeof ButtonCN> ={
  title: 'Components/Button',
  component: ButtonCN, // Aqui você define que o componente é ButtonCN
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: { },
}
export default meta;
type Story = StoryObj<typeof ButtonCN>;
export const Base: Story = {
  //
  args: { },
  render: (args) => <ButtonCN {...args}>Button</ButtonCN>,
};