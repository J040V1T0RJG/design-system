import * as Toast from '@radix-ui/react-toast'
import { keyframes, styled } from '../../styles'

const hide = keyframes({
  from: {
    opacity: 1,
  },

  to: {
    opacity: 0,
  },
})

const slideIn = keyframes({
  from: {
    transform: 'translateX(calc(100% + 1rem))',
  },
  to: {
    transform: 'translateX(0)',
  },
})

const swipeOut = keyframes({
  from: {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  to: {
    transform: 'translateX(calc(100% + 1rem))',
  },
})

export const ToastProvider = styled(Toast.Provider, {})

export const ToastRoot = styled(Toast.Root, {
  display: 'flex',
  flexDirection: 'column',
  minWidth: '22.5rem',

  gap: '0.25rem',
  border: '1px solid #323238',
  borderRadius: '6px',
  padding: '0.75rem 1.25rem',
  backgroundColor: '$gray800',

  position: 'relative',

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },

  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },

  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },

  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },

  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
})

export const Title = styled(Toast.Title, {})

export const Description = styled(Toast.Description, {})

export const Close = styled(Toast.Close, {
  all: 'unset',
  position: 'absolute',
  top: 20,
  right: 20,

  svg: {
    color: '$gray200',
    cursor: 'pointer',
  },
})

export const Action = styled(Toast.Action, {
  all: 'unset',
  position: 'absolute',
  top: 20,
  right: 20,

  svg: {
    color: '$gray200',
    cursor: 'pointer',
  },
})

export const Viewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 32,
  right: 32,

  display: 'flex',
  flexDirection: 'column',
  padding: '1rem',
  gap: '10px',
  // width: '22.5rem',
  maxWidth: '100vw',
  // margin: 0,
  // listStyle: 'none',
  // zIndex: '2147483647',
  // outline: 'none',
})
