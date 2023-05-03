import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text, Tooltip, TooltipProps } from '@j040v1t0r-ignite-ui/react'

export default {
  title: 'Pop Up/Tooltip',
  component: Tooltip,
  args: {
    content: 'October 26 - Available',
    DynamicComponent: <Text>Day 26</Text>,
    side: 'top',
  },
  argTypes: {
    side: {
      options: ['top', 'right', 'bottom', 'left'],
      control: {
        type: 'inline-radio',
      },
    },
  },
  decorators: [
    (story) => {
      return (
        <Box
          css={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}
        >
          {story()}
        </Box>
      )
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
  args: {
    side: 'top',
  },
}

export const Bottom: StoryObj<TooltipProps> = {
  args: {
    side: 'bottom',
  },
}

export const Right: StoryObj<TooltipProps> = {
  args: {
    side: 'right',
  },
}

export const Left: StoryObj<TooltipProps> = {
  args: {
    side: 'left',
  },
}
