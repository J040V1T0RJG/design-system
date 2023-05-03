import type { StoryObj, Meta } from '@storybook/react'
import { Button, Toast, ToastProps } from '@j040v1t0r-ignite-ui/react'

export default {
  title: 'Pop Up/Toast',
  component: Toast,
  args: {
    title: 'Scheduling made',
    description: 'Wednesday, October 23rd at 4pm',
    DynamicButton: <Button>Toast</Button>,
  },
  argTypes: {
    onClick: {
      action: 'click',
    },
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
