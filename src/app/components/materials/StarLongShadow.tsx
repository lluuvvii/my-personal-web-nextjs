'use client'

import React, { useEffect, useRef, useMemo, CSSProperties } from 'react'
import { Box } from '@mui/material'

interface StarLongShadowProps {
  fontSize?: string
  shadowLength?: number
  transform?: string
}

const StarLongShadow: React.FC<StarLongShadowProps> = ({ fontSize = '100px', shadowLength = 50, transform = 'rotate(0deg)' }) => {
  const boxRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const box = boxRef.current
    if (box) {
      let shadow = ''
      for (let i = 0; i < shadowLength; i++) {
        shadow += `${shadow ? ',' : ''}${i * 0.5}px ${i * 0.5}px 0 blue`
      }
      box.style.textShadow = shadow
    }
  }, [shadowLength])

  const style: CSSProperties = useMemo(() => ({
    position: 'absolute',
    color: 'white',
    width: '100%',
    fontSize,
    outline: 'none',
    textAlign: 'center',
    textShadow: '1px 1px 0 blue',
    WebkitTextStroke: '1px blue'
  }), [fontSize])

  return (
    <Box sx={{ filter: 'drop-shadow(2px 3px 5px rgba(0,0,0,0.8))', transform }}>
      <Box ref={boxRef} sx={style}>
        ★
      </Box>
    </Box>
  )
}

export default StarLongShadow
