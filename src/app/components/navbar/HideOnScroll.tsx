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
      <Slide appear={true} direction='right' in={!open ? !trigger && !open : false} timeout={300}>
        {children}
      </Slide>
      <Slide appear={true} direction='left' in={open ? !trigger && open : false} timeout={300}>
        {children}
      </Slide>
    </>
  )
}

export default HideOnScroll