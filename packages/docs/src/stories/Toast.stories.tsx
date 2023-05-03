import type { StoryObj, Meta } from '@storybook/react'
import { Button, Toast, ToastProps } from '@j040v1t0r-ignite-ui/react'

export default {
  title: 'Pop Up/Toast',
  component: Toast,
  args: {},
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h',
    DynamicButton: <Button>Toast</Button>,
  },
}
