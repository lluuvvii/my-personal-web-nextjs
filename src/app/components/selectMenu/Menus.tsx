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
      sx={{ overflow: 'hidden', height: '100vh' }}>
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
          duration: 0.2,
          easing: 'easeInOut',
          delay: 0.2,
          scale: {
            duration: 0.2,
            easing: 'easeInOut',
            delay: 0
          },
        }}
        sx={{
          position: 'fixed',
          left: '-50vh',
          width: '100vh',
          height: '100vh',
          color: 'transparent',
          borderRadius: '50%',
        }}
      />
      <Box
        component={motion.div}
        initial={{ opacity: 0, originX: '0%', rotate: '135deg' }}
        animate={{ opacity: 1, rotate: '0deg' }}
        onAnimationComplete={() => setCompleteAnimation1(true)}
        transition={{
          duration: 0.3,
          ease: 'easeInOut'
        }}
        sx={{ position: 'relative', top: '37.5vh' }}>
        {menuItems.map((item, index) => {
          const angle = (index - selectedIndex) * 6
          const differenceVal = Math.abs(selectedIndex - index)
          const leftTextPosition = selectedIndex === index && completeAnimation1 ? null : `-${differenceVal * 1.1 - 3}rem`

          return (
            <Box
              component={motion.div}
              key={item}
              onHoverStart={() => setSelectedIndex(index)}
              onTouchStart={() => setSelectedIndex(index)}
              sx={{
                transform: `rotate(${angle}deg)`,
                cursor: 'pointer',
                position: 'relative',
                transformOrigin: `0% 50%`,
                marginTop: { xs: '-0.5rem', sm: '-0.7rem', md: '-0.9rem', lg: '-1.1rem' },
              }}>
              {selectedIndex === index && completeAnimation1 ?
                <>
                  <Typography
                    component={motion.div}
                    initial={{ x: '0%', scaleX: 2, scaleY: 1.5 }}
                    animate={{ x: '100%' }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
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
                  left: leftTextPosition,
                  position: 'relative',
                  fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem' },
                  transform: selectedIndex === index && completeAnimation1 ? 'scale(2, 1.5)' : 'scale(1.7, 1.3)',
                  fontVariant: 'small-caps',
                  fontWeight: 'bold',
                  textAlign: 'start',
                  marginLeft: '35%',
                  color: selectedIndex === index && completeAnimation1 ? 'white' : 'black',
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
