'use client'

import { Box } from '@mui/material'
import React, { useMemo, useRef, useEffect, useState } from 'react'

interface ZigzagContainerProps {
  width?: string
  height?: string
  color?: string
  toColor?: string
  toGradient?: string
  children?: React.ReactNode
  top?: any
  bottom?: any
  left?: any
  right?: any
}

const ZigzagContainer: React.FC<ZigzagContainerProps> = ({
  width = '100px',
  height = '100px',
  color = 'transparent',
  toColor = color,
  toGradient = 'to right',
  children,
  top,
  bottom,
  left,
  right
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [computedWidth, setComputedWidth] = useState<number>(0)
  const [computedHeight, setComputedHeight] = useState<number>(0)

  useEffect(() => {
    const computeDimensions = () => {
      if (containerRef.current && containerRef.current.parentNode instanceof HTMLElement) {
        const parent = containerRef.current.parentNode
        const parentRect = parent.getBoundingClientRect()

        const widthValue = width.includes('%')
          ? (parseFloat(width) / 100) * parentRect.width
          : width.includes('vw')
            ? (parseFloat(width) / 100) * window.innerWidth
            : parseFloat(width)

        const heightValue = height.includes('%')
          ? (parseFloat(height) / 100) * parentRect.height
          : height.includes('vh')
            ? (parseFloat(height) / 100) * window.innerHeight
            : parseFloat(height)

        setComputedWidth(widthValue)
        setComputedHeight(heightValue)
      }
    }

    computeDimensions()
    window.addEventListener('resize', computeDimensions)

    return () => {
      window.removeEventListener('resize', computeDimensions)
    }
  }, [width, height])

  const containerStyle = {
    width: `${computedWidth}px`,
    height: `${computedHeight}px`,
    backgroundColor: color,
    background: toColor ? `linear-gradient(${toGradient}, ${color}, ${toColor})` : ''
  }

  const zigzagSize = 20 // Base size for one zigzag unit

  const generateClipPath = (width: number, height: number) => {
    const zigzagsHorizontal = Math.floor(width / zigzagSize)
    const zigzagsVertical = Math.floor(height / zigzagSize)

    const points = []

    // Top side
    if (top) {
      for (let i = 0; i < zigzagsHorizontal; i++) {
        points.push(`${(i * 100) / zigzagsHorizontal}% 0%`)
        points.push(`${((i + 0.5) * 100) / zigzagsHorizontal}% ${zigzagSize / height * 50}%`)
      }
    }
    points.push(`100% 0%`)

    // Right side
    if (right) {
      for (let i = 0; i < zigzagsVertical; i++) {
        points.push(`100% ${(i * 100) / zigzagsVertical}%`)
        points.push(`${100 - (zigzagSize / width * 50)}% ${((i + 0.5) * 100) / zigzagsVertical}%`)
      }
    }
    points.push(`100% 100%`)

    // Bottom side
    if (bottom) {
      for (let i = 0; i < zigzagsHorizontal; i++) {
        points.push(`${100 - (i * 100) / zigzagsHorizontal}% 100%`)
        points.push(`${100 - ((i + 0.5) * 100) / zigzagsHorizontal}% ${100 - (zigzagSize / height * 50)}%`)
      }
    }
    points.push(`0% 100%`)

    // Left side
    if (left) {
      for (let i = 0; i < zigzagsVertical; i++) {
        points.push(`0% ${100 - (i * 100) / zigzagsVertical}%`)
        points.push(`${zigzagSize / width * 50}% ${100 - ((i + 0.5) * 100) / zigzagsVertical}%`)
      }
    }
    points.push(`0% 0%`)

    return `polygon(${points.join(', ')})`
  }

  const clipPathValue = useMemo(
    () => generateClipPath(computedWidth, computedHeight),
    [computedWidth, computedHeight]
  )

  return (
    <Box sx={{ filter: 'drop-shadow(-2px 2px 2px rgba(0,0,0,0.2))' }}>
      <div ref={containerRef} className='zigzag-container' style={{ ...containerStyle, clipPath: clipPathValue }}>
        {children}
      </div>
    </Box>
  )
}

export default ZigzagContainer