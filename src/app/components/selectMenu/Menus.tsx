'use client'

import { useState, useEffect, useRef } from 'react'
import { domAnimation, LazyMotion, m, motion } from 'framer-motion'
import { Box, Typography } from '@mui/material'
import { CloseSharp } from '@mui/icons-material'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const menuItems = ['Introduction', 'Projects', 'Galleries', 'Journey', 'Contact Me']
const smallItems = ['イントロダクション', 'プロジェクト', 'ギャラリー', 'ジャーニー', 'コンタクトミー']

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
    <LazyMotion features={domAnimation}>
      <Box
        component={m.div}
        ref={menuRef}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        sx={{ overflow: 'hidden', height: '100dvh', width: '100vw' }}>
        <Box
          sx={{
            position: 'fixed',
            width: '100vw',
            height: '100dvh'
          }}>
          <Image
            src='/assets/img/background_texture.webp'
            alt='Background texture'
            layout='fill'
            objectFit='cover'
            priority
          />
        </Box>
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
            borderBottom: '0.25rem solid black',
          }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 70,
            delay: 0.2,
            scale: {
              type: 'spring',
              stiffness: 500,
              damping: 50,
              delay: 0
            },
          }}
          sx={{
            position: 'fixed',
            top: '50%',
            translate: '-50% -50%',
            width: { xs: '20rem', sm: '30rem', md: '40rem', lg: '50rem', xl: '60rem' },
            height: { xs: '20rem', sm: '30rem', md: '40rem', lg: '50rem', xl: '60rem' },
            color: 'transparent',
            borderRadius: '50%',
          }}
        />
        <Box
          component={motion.div}
          initial={{ opacity: 0, x: '100vw' }}
          animate={{ opacity: 1, x: '-100vw' }}
          transition={{
            duration: 0.2,
            delay: 0.2,
            opacity: {
              delay: 0
            }
          }}
          sx={{
            height: { xs: '0.2rem', sm: '0.3rem', md: '0.4rem', lg: '0.5rem', xl: '0.6rem' },
            width: '100vw',
            position: 'fixed',
            top: '38vh',
            backgroundColor: '#d93f3f',
          }}
        />
        <Box
          component={motion.div}
          initial={{ opacity: 0, x: '100%', rotate: '180deg' }}
          animate={{ opacity: 1, x: '0%', rotate: '0deg' }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 60,
          }}
          sx={{
            position: 'fixed',
            top: '2dvh',
            right: '2vw',
            cursor: 'pointer'
          }}>
          <CloseSharp color='info' sx={{ color: 'black', fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem', xl: '3.5rem' } }} />
        </Box>
        <Box
          component={motion.div}
          initial={{ originX: '0%', x: '-10vw', opacity: 0, rotate: '45deg' }}
          animate={{ x: '0vw', opacity: 1, rotate: '0deg' }}
          onAnimationComplete={() => setCompleteAnimation1(true)}
          transition={{
            delay: 0.2,
            type: 'spring',
            stiffness: 500,
            damping: 50,
            opacity: {
              ease: 'easeInOut',
              duration: 0.1,
              delay: 0.2
            }
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
                onClick={() => setSelectedIndex(index)}
                transition={{
                  type: 'spring',
                  stiffness: 500,
                  damping: 45,
                  delay: completeAnimation1 ? 0 : 0.2
                }}
                sx={{
                  cursor: 'pointer',
                  position: 'relative',
                  transformOrigin: `0% 50%`,
                  marginTop: index === 0 ? null : { xs: '-0.7rem', sm: '-1.1rem', md: '-1.5rem', lg: '-2rem', xl: '-2.8rem' },
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
                        top: '-45%',
                        height: '190%',
                        backgroundColor: '#ef4444',
                      }}
                    >
                      <Box
                        component={motion.div}
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.05 }}
                        sx={{
                          position: 'absolute',
                          left: '0vw',
                          top: '85%',
                          width: '100vw',
                          height: '5%',
                          background: 'linear-gradient(90deg, white, white, transparent)'
                        }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          width: '100%',
                          height: '100%',
                          transform: 'scaleX(-1)',
                          mixBlendMode: 'darken'
                        }}>
                        <Image
                          src='/assets/img/background_texture.webp'
                          alt='Background texture'
                          layout='fill'
                          objectFit='cover'
                          priority
                        />
                      </Box>
                    </Box>
                    <Box
                      component={motion.div}
                      initial={{ opacity: 0, x: '100%' }}
                      animate={{ opacity: 1, x: '0%' }}
                      transition={{
                        ease: 'easeInOut',
                        duration: 0.2
                      }}
                      sx={{
                        position: 'absolute',
                        top: '100%',
                        translate: '0% 0%',
                        right: '0vw',
                        marginTop: '0.5rem',
                        paddingRight: { xs: '0.5rem', sm: '0.7rem', md: '0.9rem', lg: '1.1rem', xl: '1.3rem' },
                        paddingLeft: { xs: '2.5rem', sm: '3.2rem', md: '3.9rem', lg: '4.8rem', xl: '5rem' },
                      }}>
                      <Typography
                        variant='body1'
                        sx={{
                          marginTop: { xs: '0.1rem', sm: '0.4rem', md: '0.7rem', lg: '1rem', xl: '1.3rem' },
                          fontSize: { xs: '0.7rem', sm: '0.9rem', md: '1.1rem', lg: '1.3rem', xl: '1.5rem' },
                          fontWeight: 1000,
                          color: 'red',
                          fontVariant: 'small-caps',
                        }}>
                        {smallItems[index]}
                      </Typography>
                    </Box>
                  </>
                  : null}
                <Typography
                  variant='h4'
                  sx={{
                    left: leftTextPosition,
                    marginBottom: { xs: '0.95rem', sm: '1.25rem', md: '1.55rem', lg: '1.85rem', xl: '2.15rem' },
                    lineHeight: 0.7,
                    position: 'relative',
                    fontSize: { xs: '1.7rem', sm: '2.4rem', md: '3.1rem', lg: '3.7rem', xl: '4.4rem' },
                    transform: selectedIndex === index && completeAnimation1 ? 'scale(2, 1.5)' : 'scale(1.7, 1.3)',
                    fontVariant: 'small-caps',
                    fontWeight: 'bold',
                    textAlign: 'start',
                    marginLeft: '35%',
                    letterSpacing: { xs: '-0.15rem', sm: '-0.2rem', md: '-0.25rem', lg: '-0.3rem', xl: '-0.35rem' },
                    color: selectedIndex === index && completeAnimation1 ? 'white' : 'black',
                    transition: 'color 0.1s ease-in-out, left 0.1s ease-in-out, transform 0.15s ease-in-out, margin-left 0.1s ease-in-out',
                    transitionDelay: '0.05s, 0s, 0s, 0s',
                    '&:hover': {
                      marginLeft: selectedIndex === index && completeAnimation1 ? '35%' : '34%',
                    },
                  }}
                >
                  {item}
                </Typography>
              </Box>
            )
          })}
        </Box>
      </Box>
    </LazyMotion>
  )
}
