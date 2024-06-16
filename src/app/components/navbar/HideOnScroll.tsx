import { Slide, useScrollTrigger } from '@mui/material'
import { ReactElement } from 'react'

interface Props {
  window?: () => Window | undefined
  children?: ReactElement | any
}

const HideOnScroll = ({ window, children }: Props) => {
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  })

  return (
    <Slide appear={true} direction='right' in={!trigger} timeout={200}>
      {children}
    </Slide>
  )
}

export default HideOnScroll