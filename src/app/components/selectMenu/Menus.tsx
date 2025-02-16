'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Box, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'

const menuItems = ['Introduction', 'Projects', 'Galleries', 'Journey', 'Contact Me']

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
      <Box sx={{ position: 'relative', top: '30vh' }}>
        {menuItems.map((item, index) => {
          const angle = (index - selectedIndex) * 8

          return (
            <Box
              component={motion.div}
              key={item}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onHoverStart={() => setSelectedIndex(index)}
              onTouchStart={() => setSelectedIndex(index)}
              transition={{ type: 'spring', stiffness: 500, damping: 50 }}
              sx={{
                transform: `rotate(${angle}deg)`,
                cursor: 'pointer',
                position: 'relative',
                transformOrigin: `0% 50%`,
                marginTop: { xs: '-0.5rem', sm: '-0.7rem', md: '-0.9rem', lg: '-1.1rem' },
              }}>
              {selectedIndex === index ?
                <Box
                  component={motion.div}
                  initial={{ width: '0%', x: '-5%' }}
                  animate={{ width: '110%' }}
                  transition={{ duration: 0.2, ease: 'easeInOut' }}
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    height: '100%',
                    backgroundColor: '#ef4444',
                  }}
                />
                : null}
              <Typography
                variant='h4'
                sx={{
                  position: 'relative',
                  fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem' },
                  transform: 'scale(2, 1.5)',
                  fontVariant: 'small-caps',
                  fontWeight: 'bold',
                  textAlign: 'start',
                  marginLeft: '35%',
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
