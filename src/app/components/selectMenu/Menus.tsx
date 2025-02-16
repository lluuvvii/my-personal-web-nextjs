'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Box, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'

const menuItems = ['INTRODUCTION', 'PROJECTS', 'GALLERIES', 'JOURNEY', 'CONTACT ME']

export default function SelectMenu() {
  const router = useRouter()
  const [selectedIndex, setSelectedIndex] = useState(0)
  const menuRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    menuRef.current?.focus()
  }, [])

  const handleKeyDown = (event: any) => {
    if (event.key === 'ArrowDown') {
      setSelectedIndex((prev) => (prev + 1) % menuItems.length)
    }
    if (event.key === 'ArrowUp') {
      setSelectedIndex((prev) => (prev - 1 + menuItems.length) % menuItems.length)
    }
    if (event.key === 'Enter') {
      alert(`Selected: ${menuItems[selectedIndex]}`)
    }
  }

  return (
    <Box
      component={motion.div}
      ref={menuRef}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      sx={{ overflow: 'hidden', height: '100vh' }}>
      <Box sx={{
        position: 'relative', marginTop: '200px',
      }}>
        {menuItems.map((item, index) => {
          const angleList = (index - selectedIndex) * 8

          return (
            <Box
              component={motion.div}
              key={item}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onHoverStart={() => setSelectedIndex(index)}
              onTouchStart={() => setSelectedIndex(index)}
              transition={{ duration: 0.1 }}
              sx={{
                transform: `rotate(${angleList}deg)`,
                cursor: 'pointer',
                position: 'relative',
                transformOrigin: '0% 50%',
                marginTop: '0% 5%',
              }}
            >
              <Box
                component={motion.div}
                initial={{ width: '0%' }}
                animate={selectedIndex === index ? { width: '100%' } : { width: '0%' }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
                sx={{
                  position: 'absolute',
                  inset: 0,
                  height: '100%',
                  backgroundColor: '#ef4444',
                }}
              />
              <Typography
                variant='h4'
                sx={{
                  position: 'relative',
                  fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem' },
                  fontFamily: 'Oswald, serif',
                  fontWeight: 'bold',
                  textAlign: 'start',
                  marginLeft: '10%',
                  color: selectedIndex === index ? 'white' : 'black',
                  transition: 'color 0.1s ease-in-out',
                }}
              >
                {item}
              </Typography>
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}
