import * as Tooltip from '@radix-ui/react-tooltip'
import { keyframes, styled } from '../../styles'

export const TooltipProvider = styled(Tooltip.Provider, {})

export const TooltipRoot = styled(Tooltip.Root, {})

export const Trigger = styled(Tooltip.Trigger, {
  all: 'unset',
})

export const Portal = styled(Tooltip.Portal, {})

const slideUpAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
})

const slideRightAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(-2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateX(0)',
  },
})

const slideDownAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(-2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
})

const slideLeftAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateX(0)',
  },
})

export const Content = styled(Tooltip.Content, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '0.75rem 1rem',
  gap: '0.5rem',
  backgroundColor: '$gray900',
  borderRadius: '6px',

  '&[data-state="delayed-open"][data-side="top"]': {
    animationName: `${slideDownAndFade}`,
  },
  '&[data-state="delayed-open"][data-side="right"]': {
    animationName: `${slideLeftAndFade}`,
  },
  '&[data-state="delayed-open"][data-side="bottom"]': {
    animationName: `${slideUpAndFade}`,
  },
  '&[data-state="delayed-open"][data-side="left"]': {
    animationName: `${slideRightAndFade}`,
  },
})

export const Arrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})
