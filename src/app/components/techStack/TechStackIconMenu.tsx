'use client'

import { Box } from '@mui/material'
import { IconCategory, IconCategoryFilled } from '@tabler/icons-react'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import React from 'react'

const TechStackIconMenu = () => {
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', latest => console.log('Page scroll :', latest))

  return (
    <Box
      sx={{
        position: 'relative',
        width: '300px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <Box position='absolute'>
        <IconCategory size='50px' color='white' stroke={4.5} />
      </Box>
      <Box position='absolute'>
        <IconCategoryFilled size='50px' color='red' />
      </Box>
      <Box position='relative'>
        <IconCategory size='50px' color='black' />
      </Box>
    </Box>
  )
}

export default TechStackIconMenu