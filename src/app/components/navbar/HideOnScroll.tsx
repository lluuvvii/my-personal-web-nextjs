import { Slide } from '@mui/material'
import { ReactElement } from 'react'

interface Props {
  open?: boolean
  trigger?: boolean
  children?: ReactElement | any
}

const HideOnScroll = ({ children, trigger, open }: Props) => {

  return (
    <>
      <Slide appear={true} direction='right' in={!trigger && !open ? true : false} timeout={200} style={{ transitionDelay: !open && !trigger ? '200ms' : '0ms' }}>
        {children}
      </Slide>
    </>
  )
}

export default HideOnScroll