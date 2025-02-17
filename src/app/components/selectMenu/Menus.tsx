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

  const rangeMenu = (menuItems.length) - 3

  return (
    <Box
      component={motion.div}
      ref={menuRef}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      sx={{ overflow: 'hidden', height: '100vh' }}>
      <Box sx={{ position: 'relative', top: '30vh', }}>
        {menuItems.map((item, index) => {
          const angle = (index - selectedIndex) * 6
          const leftMarginText = Math.abs(selectedIndex - index)

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
                <>
                  <Typography
                    component={motion.div}
                    initial={{ x: '0%', scaleX: 2, scaleY: 1.5 }}
                    animate={{ x: '100%' }}
                    transition={{ duration: 0.2, ease: [0, 0.71, 0.2, 1.01] }}
                    variant='h4'
                    sx={{
                      position: 'absolute',
                      bottom: '-40%',
                      fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem' },
                      fontVariant: 'small-caps',
                      fontWeight: 'bold',
                      textAlign: 'start',
                      color: '#ef4444',
                      opacity: 0.5,
                      transition: 'color 0.1s ease-in-out',
                    }}
                  >
                    {item}
                  </Typography>
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
                      transformStyle: 'preserve-3d',
                      transform: 'rotateY(-10deg)'
                    }}
                  />
                </>
                : null}
              <Typography
                variant='h4'
                sx={{
                  left: selectedIndex === index ? null : `-${index > 2 || index < 2 ? leftMarginText * 0.5 : 0.3}rem`,
                  position: 'relative',
                  fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem' },
                  transform: selectedIndex === index ? 'scale(2, 1.5)' : 'scale(1.7, 1.3)',
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
