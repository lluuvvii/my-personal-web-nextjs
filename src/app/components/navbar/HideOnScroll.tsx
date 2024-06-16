import { Slide, useScrollTrigger } from "@mui/material"
import React, { useEffect } from "react"

interface HideOnScrollProps {
  children?: React.ReactNode | any
}

const HideOnScroll: React.FC<HideOnScrollProps> = ({ children }) => {
  const getWindow = () => {
    return window
  }

  const trigger = useScrollTrigger({
    target: getWindow() ? window : undefined,
  })

  useEffect(() => {
    getWindow()
  }, [])

  return (
    <Slide appear={false} direction='down' in={!trigger} timeout={400}>
      {children}
    </Slide>
  )
}

export default HideOnScroll