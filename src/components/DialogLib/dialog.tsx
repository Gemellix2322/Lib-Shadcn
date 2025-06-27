import React from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../ui/alert-dialog'

interface DialogProps {
  trigger: React.ReactNode;
  title: string;
  description: string;
  actionButtonText?: string;
  onActionClick?: () => void;
  cancelButtonText?: string;
  onCancelClick?: () => void;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function Dialog({
  trigger,
  title,
  description,
  actionButtonText,
  onActionClick,
  cancelButtonText,
  onCancelClick,
  open: controlledOpen, 
  onOpenChange: controlledOnOpenChange,
}: DialogProps) {

  const [internalOpen, setInternalOpen] = React.useState(false);

  const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;
  const onOpenChange = controlledOnOpenChange !== undefined ? controlledOnOpenChange : setInternalOpen;

  return (
    <AlertDialog open={isOpen} onOpenChange={onOpenChange}>
      <AlertDialogTrigger asChild>
        {trigger}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          {cancelButtonText && (
            <AlertDialogCancel onClick={onCancelClick}>
              {cancelButtonText}
            </AlertDialogCancel>
          )}
          {actionButtonText && (
            <AlertDialogAction onClick={onActionClick}>
              {actionButtonText}
            </AlertDialogAction>
          )}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}