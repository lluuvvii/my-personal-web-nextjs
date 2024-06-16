import { Slide, useScrollTrigger } from "@mui/material"
import React from "react"

interface HideOnScrollProps {
  children?: React.ReactNode | any
}

const HideOnScroll: React.FC<HideOnScrollProps> = ({ children }) => {
  const trigger = useScrollTrigger({
    target: window ? window : undefined,
  })

  return (
    <Slide appear={false} direction='down' in={!trigger} timeout={400}>
      {children}
    </Slide>
  )
}

export default HideOnScroll