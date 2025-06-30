import type { Meta, StoryObj } from '@storybook/react'
import { Dialog } from './dialog'
import { Button } from '../ButtonLib/button'
import React from 'react'

const meta = {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    trigger: <Button>Abrir Diálogo</Button>,
    title: 'Título do Diálogo',
    description: 'Esta é uma descrição de teste para o seu diálogo.',
    actionButtonText: 'Confirmar',
    cancelButtonText: 'Cancelar',
  }
} satisfies Meta<typeof Dialog>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const handleActionClick = () => {
      setIsOpen(false);
    };

    return (
      <Dialog
        {...args}
        open={isOpen}
        onOpenChange={setIsOpen}
        trigger={<Button onClick={() => setIsOpen(true)}>Abrir Diálogo</Button>}
        actionButtonText="Confirmar"
        onActionClick={handleActionClick}
        cancelButtonText={undefined}
      />
    );
  },
  args: {
  }
};

export const WithCustomActions: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const handleActionClick = () => {
      alert('Ação Confirmada!');
      setIsOpen(false);
    };

    const handleCancelClick = () => {
      alert('Ação Cancelada!');
      setIsOpen(false);
    };

    return (
      <Dialog
        {...args}
        open={isOpen}
        onOpenChange={setIsOpen}
        trigger={<Button onClick={() => setIsOpen(true)}>Abrir Diálogo Customizado</Button>}
        title="Alerta Importante"
        description="Esta é uma mensagem com ações personalizadas."
        actionButtonText="Entendi"
        onActionClick={handleActionClick}
        cancelButtonText="Não Concodo"
        onCancelClick={handleCancelClick}
      />
    );
  },
  args: {
  },
};

export const ActionOnlyDialog: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
      <Dialog
        {...args}
        open={isOpen}
        onOpenChange={setIsOpen}
        trigger={<Button onClick={() => setIsOpen(true)}>Abrir Diálogo (Ação Única)</Button>}
        title="Sucesso!"
        description="Sua operação foi concluída com êxito."
        actionButtonText="Ok"
        onActionClick={() => setIsOpen(false)}
        cancelButtonText={undefined}
      />
    );
  },
  args: {
  },
};