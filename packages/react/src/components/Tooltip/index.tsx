import { ReactNode } from 'react'
import {
  Arrow,
  Content,
  Portal,
  TooltipProvider,
  TooltipRoot,
  Trigger,
} from './styles'
import { Text } from '../Text'

export interface TooltipProps {
  content: string
  DynamicComponent: ReactNode
  side?: 'top' | 'right' | 'bottom' | 'left'
}

export function Tooltip({ content, DynamicComponent, side }: TooltipProps) {
  return (
    <TooltipProvider>
      <TooltipRoot>
        <Trigger>{DynamicComponent}</Trigger>
        <Portal>
          <Content side={side} sideOffset={6}>
            <Text size="sm">{content}</Text>
            <Arrow />
          </Content>
        </Portal>
      </TooltipRoot>
    </TooltipProvider>
  )
}

Tooltip.displayName = 'Tooltip'
