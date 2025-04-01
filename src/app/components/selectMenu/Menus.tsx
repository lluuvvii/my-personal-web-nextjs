'use client'

import { useState, useEffect, useRef } from 'react'
import { domAnimation, LazyMotion, m, motion } from 'framer-motion'
import { Box, Typography } from '@mui/material'
import { ArrowDropDown, ArrowDropUp, ArrowRight, CloseSharp, KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material'
import { useRouter } from 'next/navigation'

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
        sx={{ overflow: 'hidden', height: '100dvh', width: '100vw', backgroundColor: 'white', boxShadow: '0 0 10rem rgba(0, 0, 0, 0.2) inset' }}>
        <Box
          component={motion.div}
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ rotate: -360, opacity: 0.5 }}
          transition={{
            opacity: {
              duration: 4,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            },
            rotate: { repeat: Infinity, duration: 30, ease: 'linear' }
          }}
          sx={{
            position: 'fixed',
            top: '50%',
            translate: '-50% -50%',
            width: '100vw',
            height: '100dvh',
            backgroundImage: 'url(/assets/img/pngwing.com1.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}>
        </Box>
        <Box
          component={motion.div}
          initial={{ scale: 2, opacity: 0 }}
          animate={{ rotate: -360, opacity: 0.7 }}
          transition={{
            opacity: {
              duration: 7,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            },
            rotate: { repeat: Infinity, duration: 60, ease: 'linear' }
          }}
          sx={{
            position: 'fixed',
            top: '50%',
            translate: '-50% -50%',
            width: '100vw',
            height: '100dvh',
            backgroundImage: 'url(/assets/img/pngwing.com1.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }} />
        <Box
          component={motion.div}
          initial={{
            scale: 0,
            borderRight: '5rem solid black',
            borderLeft: '5rem solid black',
            borderTop: '5rem solid black',
            borderBottom: '5rem solid black',
          }}
          animate={{
            scale: 1,
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
            width: { xs: '50dvh', sm: '70dvh', md: '70dvh', lg: '70dvh', xl: '50dvh' },
            height: { xs: '50dvh', sm: '70dvh', md: '70dvh', lg: '70dvh', xl: '50dvh' },
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
                  transformOrigin: `0% 0%`,
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
                          mixBlendMode: 'darken',
                          backgroundImage: 'url(/assets/img/pngwing.com1.png)',
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                        }}>
                      </Box>
                    </Box>
                    <Box
                      component={motion.div}
                      initial={{ opacity: 0, y: '50%' }}
                      animate={{ opacity: 0.7, y: '-20%' }}
                      transition={{
                        type: 'spring',
                        stiffness: 500,
                        damping: 50,
                        opacity: {
                          repeatType: 'reverse',
                          repeat: Infinity,
                          duration: 1,
                          easing: 'linear'
                        }
                      }}
                      sx={{
                        position: 'absolute',
                        bottom: '90%',
                        translate: '0% 0%',
                        left: '0vw',
                        marginBottom: '0.5rem',
                        paddingLeft: { xs: '0.5rem', sm: '0.7rem', md: '0.9rem', lg: '1.1rem', xl: '1.3rem' },
                        paddingRight: { xs: '2.5rem', sm: '3.2rem', md: '3.9rem', lg: '4.8rem', xl: '5rem' },
                        display: 'flex',
                      }}>
                      <Typography
                        variant='body1'
                        sx={{
                          position: 'relative',
                          marginBottom: { xs: '0.1rem', sm: '0.4rem', md: '0.7rem', lg: '1rem', xl: '1.3rem' },
                          fontSize: { xs: '0.7rem', sm: '0.9rem', md: '1.1rem', lg: '1.3rem', xl: '1.5rem' },
                          fontWeight: 'bold',
                          fontStyle: 'italic',
                          color: 'red',
                        }}>
                        <KeyboardArrowUp
                          sx={{
                            color: 'red',
                            position: 'relative',
                            top: '-5%',
                            fontSize: { xs: '0.7rem', sm: '1rem', md: '1.3rem', lg: '1.5rem', xl: '2rem' },
                            right: '5%',
                            transform: 'scale(2)'
                          }} />
                      </Typography>
                    </Box>
                    <Box
                      component={motion.div}
                      initial={{ opacity: 0, y: '-50%' }}
                      animate={{ opacity: 1, y: '20%' }}
                      transition={{
                        type: 'spring',
                        stiffness: 500,
                        damping: 50,
                        delay: 0.1,
                        opacity: {
                          repeatType: 'reverse',
                          repeat: Infinity,
                          duration: 1,
                          easing: 'linear'
                        }
                      }}
                      sx={{
                        position: 'absolute',
                        top: '90%',
                        translate: '0% 0%',
                        left: '0vw',
                        marginTop: '0.5rem',
                        paddingLeft: { xs: '0.5rem', sm: '0.7rem', md: '0.9rem', lg: '1.1rem', xl: '1.3rem' },
                        paddingRight: { xs: '2.5rem', sm: '3.2rem', md: '3.9rem', lg: '4.8rem', xl: '5rem' },
                        display: 'flex',
                      }}>
                      <Typography
                        variant='body1'
                        sx={{
                          position: 'relative',
                          marginTop: { xs: '0.1rem', sm: '0.4rem', md: '0.7rem', lg: '1rem', xl: '1.3rem' },
                          fontSize: { xs: '0.7rem', sm: '0.9rem', md: '1.1rem', lg: '1.3rem', xl: '1.5rem' },
                          fontWeight: 'bold',
                          fontStyle: 'italic',
                          color: 'red',
                        }}>
                        <KeyboardArrowDown
                          sx={{
                            color: 'red',
                            position: 'relative',
                            top: '-5%',
                            fontSize: { xs: '0.7rem', sm: '1rem', md: '1.3rem', lg: '1.5rem', xl: '2rem' },
                            right: '5%',
                            transform: 'scale(2)'
                          }} />
                      </Typography>
                    </Box>
                    <Box
                      component={motion.div}
                      initial={{ opacity: 0, x: '-100%' }}
                      animate={{ opacity: 1, x: '0%' }}
                      transition={{
                        type: 'spring',
                        stiffness: 500,
                        damping: 50,
                        delay: 0.1
                      }}
                      sx={{
                        position: 'absolute',
                        bottom: '90%',
                        translate: '0% 0%',
                        right: '0vw',
                        marginBottom: '0.5rem',
                        paddingRight: { xs: '0.5rem', sm: '0.7rem', md: '0.9rem', lg: '1.1rem', xl: '1.3rem' },
                        paddingLeft: { xs: '2.5rem', sm: '3.2rem', md: '3.9rem', lg: '4.8rem', xl: '5rem' },
                        display: 'flex',
                      }}>
                      <Typography
                        variant='body1'
                        sx={{
                          position: 'relative',
                          marginBottom: { xs: '0.1rem', sm: '0.4rem', md: '0.7rem', lg: '1rem', xl: '1.3rem' },
                          fontSize: { xs: '0.7rem', sm: '0.9rem', md: '1.1rem', lg: '1.3rem', xl: '1.5rem' },
                          fontWeight: 'bold',
                          fontStyle: 'italic',
                          color: 'red',
                        }}>
                        <Box
                          component={motion.div}
                          initial={{ height: '1.5%', width: '80%' }}
                          animate={{ width: '100%' }}
                          transition={{
                            duration: 0.4,
                            repeat: Infinity,
                            repeatType: 'reverse',
                            ease: 'easeInOut',
                          }}
                          sx={{ position: 'absolute', backgroundColor: 'red', top: '55%', right: '55%' }} />
                        <Box
                          component={motion.div}
                          initial={{ height: '1.5%', width: '30%', }}
                          animate={{ width: '10%' }}
                          transition={{
                            duration: 0.5,
                            repeat: Infinity,
                            repeatType: 'reverse',
                            ease: 'easeInOut',
                          }}
                          sx={{ position: 'absolute', backgroundColor: 'red', top: '40%', right: '100%' }} />
                        GO!
                        <ArrowRight
                          sx={{
                            color: 'red',
                            position: 'relative',
                            top: '-5%',
                            fontSize: { xs: '0.7rem', sm: '1rem', md: '1.3rem', lg: '1.5rem', xl: '2rem' },
                            right: '5%'
                          }} />
                      </Typography>
                    </Box>
                    <Box
                      component={motion.div}
                      initial={{ opacity: 0, x: '-100%' }}
                      animate={{ opacity: 1, x: '0%' }}
                      transition={{
                        type: 'spring',
                        stiffness: 500,
                        damping: 50,
                        delay: 0.15
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
                          fontWeight: 'bold',
                          color: 'red',
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
                    opacity: 1 - differenceVal / 6,
                    textShadow: selectedIndex === index && completeAnimation1 ?
                      null
                      :
                      {
                        xs: `0 0 ${differenceVal * 0.02}rem black`,
                        sm: `0 0 ${differenceVal * 0.025}rem black`,
                        md: `0 0 ${differenceVal * 0.03}rem black`,
                        lg: `0 0 ${differenceVal * 0.04}rem black`,
                        xl: `0 0 ${differenceVal * 0.05}rem black`
                      },
                    mixBlendMode: selectedIndex === index && completeAnimation1 ? null : 'difference',
                    marginBottom: { xs: '0.95rem', sm: '1.5rem', md: '1.75rem', lg: '2.5rem', xl: '3rem' },
                    lineHeight: 0.7,
                    position: 'relative',
                    fontSize: { xs: '1.7rem', sm: '2.4rem', md: '3.1rem', lg: '3.7rem', xl: '4.4rem' },
                    transform: selectedIndex === index && completeAnimation1 ? 'scale(1.9, 1.5)' : `scale(1.7, 1.3)`,
                    fontVariant: 'small-caps',
                    fontWeight: 'bold',
                    textAlign: 'start',
                    marginLeft: selectedIndex === index && completeAnimation1 ? { xs: '37%', sm: '34%', md: '35%', lg: '34%' } : { xs: '35%', sm: '32%', md: '32%', lg: '30%', xl: '30%' },
                    letterSpacing: { xs: '-0.15rem', sm: '-0.2rem', md: '-0.25rem', lg: '-0.3rem', xl: '-0.35rem' },
                    color: selectedIndex === index && completeAnimation1 ? 'white' : 'rgba(0, 0, 0, 0.5)',
                    transition: 'color 0.15s ease-in-out, left 0.1s ease-in-out, transform 0.15s ease-in-out, margin-left 0.1s ease-in-out',
                    transitionDelay: '0.05s, 0s, 0s, 0s',
                    '&:hover': {
                      color: selectedIndex === index && completeAnimation1 ? null : '#ef4444',
                      textShadow: selectedIndex === index && completeAnimation1 ? null : `0 0 ${differenceVal * 0.04}rem #ef4444`
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
          top: '2vw',
          right: '2vw',
          cursor: 'pointer'
        }}>
        <CloseSharp color='info' sx={{ color: 'black', fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem', xl: '3.5rem' } }} />
      </Box>
    </LazyMotion >
  )
}
