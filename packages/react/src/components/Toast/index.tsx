import {
  Close,
  ToastRoot,
  Description,
  ToastProvider,
  Title,
  Viewport,
} from './styles'
import { Text } from '../Text'
import { X } from 'phosphor-react'
import { useState, ReactNode } from 'react'
import { Heading } from '../Heading'

export interface ToastProps {
  title: string
  description: string
  DynamicButton: ReactNode
}

export function Toast({ title, description, DynamicButton }: ToastProps) {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <ToastProvider swipeDirection="right">
      <div onClick={() => setOpen(true)}>{DynamicButton}</div>
      <ToastRoot open={open} onOpenChange={setOpen}>
        <Title asChild>
          <Heading color="$white">{title}</Heading>
        </Title>
        <Description asChild>
          <Text size="sm">{description}</Text>
        </Description>
        <Close>
          <X size={16} />
        </Close>
      </ToastRoot>
      <Viewport />
    </ToastProvider>
  )
}

Toast.displayName = 'Toast'
