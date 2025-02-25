'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Box, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'

const menuItems = ['Introduction', 'Projects', 'Galleries', 'Journey', 'Contact Me']

export default function SelectMenu() {
  const router = useRouter()
  const [completeAnimation1, setCompleteAnimation1] = useState(false)
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
      sx={{ overflow: 'hidden', height: '100vh', width: '100vw' }}>
      <Box
        sx={{
          position: 'fixed',
          backgroundImage: 'url(/assets/img/background_texture.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100vw',
          height: '100vh'
        }} />
      <Box
        component={motion.div}
        initial={{
          scale: '0.1%',
          borderRight: '5rem solid black',
          borderLeft: '5rem solid black',
          borderTop: '5rem solid black',
          borderBottom: '5rem solid black'
        }}
        animate={{
          scale: '100%',
          borderRight: '0rem solid black',
          borderLeft: '0.25rem solid black',
          borderTop: '0.25rem solid black',
          borderBottom: '0.25rem solid black'
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 70,
          delay: 0.2,
          scale: {
            type: 'spring',
            stiffness: 500,
            damping: 70,
            delay: 0
          },
        }}
        sx={{
          position: 'fixed',
          top: '50%',
          translate: '-50% -50%',
          width: { xs: '50vh', sm: '60vh', md: '70vh', lg: '80vh' },
          height: { xs: '50vh', sm: '60vh', md: '70vh', lg: '80vh' },
          color: 'transparent',
          borderRadius: '50%',
        }}
      />
      <Box
        component={motion.div}
        initial={{ opacity: 0, height: '0.5rem', width: '100vw', x: '100vw' }}
        animate={{ opacity: 1, height: '0.5rem', x: '-100vw' }}
        transition={{
          duration: 0.2,
          delay: 0.2,
          opacity: {
            delay: 0
          }
        }}
        sx={{
          position: 'fixed',
          top: '38vh',
          backgroundColor: '#d93f3f',
        }}
      />
      <Box
        component={motion.div}
        initial={{ opacity: 0, originX: '0%', rotate: '135deg' }}
        animate={{ opacity: 1, rotate: '0deg' }}
        onAnimationComplete={() => setCompleteAnimation1(true)}
        transition={{
          delay: 0.2,
          type: 'spring',
          stiffness: 500,
          damping: 50,
        }}
        sx={{
          position: 'relative',
          top: '50%',
          translate: '0% -50%',
        }}>
        {menuItems.map((item, index) => {
          const angle = (index - selectedIndex) * 6
          const differenceVal = Math.abs(selectedIndex - index)
          const leftTextPosition = completeAnimation1 && selectedIndex === index ? null : `-${(differenceVal - 2.5) * 1.1}rem`

          return (
            <Box
              component={motion.div}
              key={item}
              initial={{ transform: `rotate(0deg)` }}
              animate={{ transform: `rotate(${angle}deg)` }}
              onHoverStart={() => setSelectedIndex(index)}
              onTouchStart={() => setSelectedIndex(index)}
              transition={{
                type: 'spring',
                stiffness: 500,
                damping: 45
              }}
              sx={{
                cursor: 'pointer',
                position: 'relative',
                transformOrigin: `0% 50%`,
                marginTop: index === 0 ? null : { xs: '-0.5rem', sm: '-0.7rem', md: '-0.9rem', lg: '-1.1rem' },
                perspective: '100vh'
              }}>
              {selectedIndex === index && completeAnimation1 ?
                <>
                  <Box
                    component={motion.div}
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.2, ease: 'easeInOut', delay: 0.05 }}
                    sx={{
                      position: 'absolute',
                      height: '100%',
                      backgroundColor: '#ef4444',
                    }}
                  >
                    <Typography
                      component={motion.div}
                      initial={{ x: '0%', scaleX: 2, scaleY: 1.5 }}
                      animate={{ x: '50%' }}
                      transition={{ duration: 0.2, ease: 'easeInOut' }}
                      variant='h4'
                      sx={{
                        position: 'absolute',
                        bottom: '-40%',
                        fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem' },
                        fontVariant: 'small-caps',
                        fontWeight: 'bold',
                        textAlign: 'start',
                        color: '#f06262',
                        opacity: 0.5,
                      }}
                    >
                      {item}
                    </Typography>
                  </Box>
                </>
                : null}
              <Typography
                variant='h4'
                sx={{
                  left: leftTextPosition,
                  position: 'relative',
                  fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem' },
                  transform: selectedIndex === index && completeAnimation1 ? 'scale(2, 1.5)' : 'scale(1.7, 1.3)',
                  fontVariant: 'small-caps',
                  fontWeight: 'bold',
                  textAlign: 'start',
                  marginLeft: '35%',
                  color: selectedIndex === index && completeAnimation1 ? 'white' : 'black',
                  transition: 'color 0.1s ease-in-out, left 0.1s ease-in-out, transform 0.15s ease-in-out',
                  transitionDelay: '0.05s, 0s, 0s'
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
