'use client'

import React from 'react'
import { motion } from 'framer-motion'
import HideOnScroll from '@/app/components/navbar/HideOnScroll'
import { AppBar, Box, Button, Dialog, DialogActions, DialogTitle, Grid, Stack, Typography, useScrollTrigger, Zoom, Tab, Tabs } from '@mui/material'
import { TransitionProps } from '@mui/material/transitions'
import ZigzagContainer from '../materials/ZigzagContainer'
import { useMemo, useState } from 'react'
import { IconArrowBigLeftLinesFilled, IconArrowBigRightLinesFilled, IconVolume, IconVolumeOff } from '@tabler/icons-react'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import HideOnScrollRight from './HideOnScrollRight'
import AudioPlayer from '../audio/AudioPlayer'

interface Props {
  window?: () => Window | undefined
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>,
) {
  return <Zoom ref={ref} {...props} />
})

const Navbar = ({ window }: Props) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const [open, setOpen] = useState(searchParams.get('navright') === 'false' || searchParams.get('navright') === null ? false : true)
  const [color, setColor] = useState(searchParams.get('navright') === 'false' || searchParams.get('navright') === null ? 'blue' : 'red')
  const [openMusic, setOpenMusic] = useState(true)
  const [startAutoplay, setStartAutoplay] = useState(false)

  const handleChangeColor = () => {
    if (color === 'blue') {
      router.push(`${pathname}?navright=${!open}`, { scroll: false })
      setTimeout(() => {
        setColor('red')
      }, 200)
    }
    if (color === 'red') {
      router.push(`${pathname}?navright=${!open}`, { scroll: false })
      setTimeout(() => {
        setColor('blue')
      }, 200)
    }
  }

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  })

  const handleToggle = useMemo(() => () => setOpen((prevOpen) => !prevOpen), [])

  return (
    <>
      <HideOnScroll trigger={trigger} open={open}>
        <AppBar position='fixed' color='transparent' sx={{ boxShadow: 'none' }}>
          <Box component='header'>
            {!open && !trigger ?
              <>
                <Box
                  component={motion.div}
                  sx={{
                    position: 'absolute',
                    width: '60px',
                    height: '60px',
                    borderRadius: '25%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    backgroundColor: 'transparent',
                    border: '15px solid black',
                    filter: 'drop-shadow(-2px 2px 2px rgba(0,0,0,0.5))',
                    top: '60px',
                    left: '20px'
                  }}
                  drag
                  initial={{ scale: !trigger ? 0 : 1 }}
                  animate={{ scale: !trigger ? 1 : 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 20,
                    delay: 0.55
                  }}
                >
                </Box>
                <Box
                  component={motion.div}
                  sx={{
                    position: 'absolute',
                    width: '40px',
                    height: '40px',
                    borderRadius: '25%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    background: 'repeating-linear-gradient(135deg, red, red 6px, transparent 6px, transparent 11px)',
                    filter: 'drop-shadow(-2px 2px 2px rgba(0,0,0,0.5))',
                    top: '70px',
                    right: '-10px',
                  }}
                  drag
                  initial={{ scale: !trigger ? 0 : 1 }}
                  animate={{ scale: !trigger ? 1 : 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 20,
                    delay: 0.7
                  }}
                >
                </Box>
                <Box
                  component={motion.div}
                  sx={{
                    position: 'absolute',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    backgroundColor: 'black',
                    clipPath: 'polygon(100% 50%,78.53% 59.27%,90.45% 79.39%,67.63% 74.27%,65.45% 97.55%,50% 80%,34.55% 97.55%,32.37% 74.27%,9.55% 79.39%,21.47% 59.27%,0% 50%,21.47% 40.73%,9.55% 20.61%,32.37% 25.73%,34.55% 2.45%,50% 20%,65.45% 2.45%,67.63% 25.73%,90.45% 20.61%,78.53% 40.73%,100% 50%,78.53% 59.27%,67.12% 55.56%,80% 50%,67.12% 44.44%,74.27% 32.37%,60.58% 35.44%,59.27% 21.47%,50% 32%,40.73% 21.47%,39.42% 35.44%,25.73% 32.37%,32.88% 44.44%,20% 50%,32.88% 55.56%,25.73% 67.63%,39.42% 64.56%,40.73% 78.53%,50% 68%,59.27% 78.53%,60.58% 64.56%,74.27% 67.63%,67.12% 55.56%,80% 50%)',
                    top: '75px',
                    left: '65px'
                  }}
                  drag
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
                >
                </Box>
              </>
              : null}
            <ZigzagContainer width='100%' height='100px' color={'blue'} toColor={'#008cff'} toGradient='50deg' bottom>
              {!open && !trigger ?
                <>
                  {/* spikes */}
                  <Box
                    component={motion.div}
                    sx={{
                      position: 'absolute',
                      width: '80px',
                      height: '80px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      cursor: 'pointer',
                      backgroundColor: 'yellow',
                      clipPath: 'polygon(100% 50%,78.53% 59.27%,90.45% 79.39%,67.63% 74.27%,65.45% 97.55%,50% 80%,34.55% 97.55%,32.37% 74.27%,9.55% 79.39%,21.47% 59.27%,0% 50%,21.47% 40.73%,9.55% 20.61%,32.37% 25.73%,34.55% 2.45%,50% 20%,65.45% 2.45%,67.63% 25.73%,90.45% 20.61%,78.53% 40.73%,100% 50%,78.53% 59.27%,67.12% 55.56%,80% 50%,67.12% 44.44%,74.27% 32.37%,60.58% 35.44%,59.27% 21.47%,50% 32%,40.73% 21.47%,39.42% 35.44%,25.73% 32.37%,32.88% 44.44%,20% 50%,32.88% 55.56%,25.73% 67.63%,39.42% 64.56%,40.73% 78.53%,50% 68%,59.27% 78.53%,60.58% 64.56%,74.27% 67.63%,67.12% 55.56%,80% 50%)',
                      top: '-20px',
                      left: '135px'
                    }}
                    drag
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 5, ease: 'linear' }}
                  >
                  </Box>
                  {/* circle */}
                  <Box
                    component={motion.div}
                    sx={{
                      position: 'absolute',
                      width: '70px',
                      height: '70px',
                      borderRadius: '25%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      cursor: 'pointer',
                      backgroundColor: 'transparent',
                      border: '10px solid white',
                      top: '-20px',
                      left: '10px'
                    }}
                    drag
                    initial={{ scale: !trigger ? 0 : 1 }}
                    animate={{ scale: !trigger ? 1 : 0 }}
                    transition={{
                      type: 'spring',
                      stiffness: 500,
                      damping: 20,
                      delay: 0.52
                    }}
                  >
                  </Box>
                  <Box
                    component={motion.div}
                    sx={{
                      position: 'absolute',
                      width: '80px',
                      height: '80px',
                      borderRadius: '25%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      cursor: 'pointer',
                      backgroundColor: 'yellow',
                      top: '10px',
                      left: '-20px'
                    }}
                    drag
                    initial={{ scale: !trigger ? 0 : 1 }}
                    animate={{ scale: !trigger ? 1 : 0 }}
                    transition={{
                      type: 'spring',
                      stiffness: 500,
                      damping: 20,
                      delay: 0.54
                    }}
                  >
                  </Box>
                  {/* striped circle */}
                  <Box
                    component={motion.div}
                    sx={{
                      position: 'absolute',
                      width: '95px',
                      height: '95px',
                      borderRadius: '25%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      cursor: 'pointer',
                      background: 'repeating-linear-gradient(135deg, yellow, yellow 8px, transparent 8px, transparent 15px)',
                      filter: 'drop-shadow(-2px 2px 2px rgba(0,0,0,0.5))',
                      top: '-20px',
                      left: '-30px',
                    }}
                    drag
                    initial={{ scale: !trigger ? 0 : 1 }}
                    animate={{ scale: !trigger ? 1 : 0 }}
                    transition={{
                      type: 'spring',
                      stiffness: 500,
                      damping: 20,
                      delay: 0.5
                    }}
                  >
                  </Box>
                  <Box
                    component={motion.div}
                    sx={{
                      position: 'absolute',
                      width: '30px',
                      height: '30px',
                      borderRadius: '25%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      cursor: 'pointer',
                      background: 'repeating-linear-gradient(135deg, yellow, yellow 4px, transparent 4px, transparent 8px)',
                      filter: 'drop-shadow(-2px 2px 2px rgba(0,0,0,0.5))',
                      top: '50px',
                      left: '60px',
                    }}
                    drag
                    initial={{ scale: !trigger ? 0 : 1 }}
                    animate={{ scale: !trigger ? 1 : 0 }}
                    transition={{
                      type: 'spring',
                      stiffness: 500,
                      damping: 20,
                      delay: 0.51
                    }}
                  >
                  </Box>
                </>
                : null}
              {/* stars long shadow */}
              {!open && !trigger ?
                <Box
                  component={motion.div}
                  sx={{
                    position: 'absolute',
                    '& svg': {
                      filter: 'drop-shadow(-2px 3px 10px rgba(0,0,0,0.5))',
                    },
                    cursor: 'pointer',
                    top: '80px',
                    left: '240px'
                  }}
                  drag
                  initial={{ scale: !trigger ? 0 : 1 }}
                  animate={{ scale: !trigger ? 1 : 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 20,
                    delay: 0.65
                  }}
                >
                  <div style={{ transform: 'scale(0.2) rotate(135deg)', width: '1px', height: '1px' }}>
                    <svg
                      width='200px'
                      height='700px'
                      fill={'blue'}
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <rect x='0' y='80' width='100%' height='100%' fill={'blue'} />
                      <path d='M100 0.587l30.52 66.76L200 81.25l-50 48.5L161.92 200 100 165.83 38.08 200 50 129.75 0 81.25l69.44-13.29z' />
                      <path d='M100 0.587l30.52 66.76L200 81.25l-50 48.5L161.92 200 100 165.83 38.08 200 50 129.75 0 81.25l69.44-13.29z' transform='scale(0.7) translate(42.5, 47)' fill='white' />
                    </svg>
                  </div>
                  <Box
                    sx={{
                      position: 'absolute',
                      '& svg': {
                        filter: 'drop-shadow(-2px 3px 10px rgba(0,0,0,0.5))',
                      },
                      top: '-10px',
                      left: '-45px'
                    }}>
                    <div style={{ transform: 'scale(0.1) rotate(135deg)', width: '1px', height: '1px' }}>
                      <svg
                        width='200px'
                        height='1000px'
                        fill={'blue'}
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <rect x='0' y='80' width='100%' height='100%' fill={'blue'} />
                        <path d='M100 0.587l30.52 66.76L200 81.25l-50 48.5L161.92 200 100 165.83 38.08 200 50 129.75 0 81.25l69.44-13.29z' />
                        <path d='M100 0.587l30.52 66.76L200 81.25l-50 48.5L161.92 200 100 165.83 38.08 200 50 129.75 0 81.25l69.44-13.29z' transform='scale(0.7) translate(42.5, 47)' fill='white' />
                      </svg>
                    </div>
                  </Box>
                </Box>
                : null}
              <Grid container p={2} spacing={1}>
                <Grid item>
                  <Box
                    component={motion.div}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 1 }}
                    initial={{ scale: !trigger ? 0 : 1 }}
                    animate={{ scale: !trigger ? 1 : 0 }}
                    transition={{
                      type: 'spring',
                      stiffness: 500,
                      damping: 20
                    }}
                  >
                    <Button
                      onClick={() => {
                        handleToggle()
                        handleChangeColor()
                      }}
                      variant='contained'
                      sx={{
                        color: 'blue',
                        border: '5px solid',
                        borderColor: 'blue',
                        borderRadius: '10px',
                        backgroundColor: 'white',
                        '&:hover': {
                          backgroundColor: 'white',
                          borderColor: 'blue',
                        },
                        '&:active': {
                          backgroundColor: 'white.main',
                          borderColor: 'blue',
                        },
                      }}
                    >
                      <IconArrowBigLeftLinesFilled />
                    </Button>
                  </Box>
                </Grid>
                <Grid item>
                  <Box
                    component={motion.div}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 1 }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: 'spring',
                      stiffness: 500,
                      damping: 20
                    }}
                  >
                    <Button onClick={() => {
                      setStartAutoplay(!startAutoplay)
                    }} variant='contained'
                      sx={{
                        color: !startAutoplay ? 'blue' : 'red',
                        border: '5px solid',
                        borderColor: !startAutoplay ? 'blue' : 'red',
                        borderRadius: '10px',
                        backgroundColor: 'white',
                        '&:hover': {
                          backgroundColor: 'white',
                          borderColor: !startAutoplay ? 'blue' : 'red',
                        },
                        '&:active': {
                          backgroundColor: 'white.main',
                          borderColor: !startAutoplay ? 'blue' : 'red',
                        },
                      }}>
                      {startAutoplay ?
                        <IconVolumeOff />
                        :
                        <IconVolume />
                      }
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </ZigzagContainer>
            {/* star long shadow */}
            {!open && !trigger ?
              <>
                <Box
                  component={motion.div}
                  sx={{
                    position: 'absolute',
                    '& svg': {
                      filter: 'drop-shadow(-2px 3px 10px rgba(0,0,0,0.5))',
                    },
                    cursor: 'pointer',
                    top: '120px',
                    left: '50px'
                  }}
                  drag
                  initial={{ scale: !trigger ? 0 : 1 }}
                  animate={{ scale: !trigger ? 1 : 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 20,
                    delay: 0.45
                  }}
                >
                  <div style={{ transform: 'scale(0.1) rotate(135deg)', width: '1px', height: '1px' }}>
                    <svg
                      width='200px'
                      height='1000px'
                      fill={'blue'}
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <rect x='0' y='80' width='100%' height='100%' fill={'blue'} />
                      <path d='M100 0.587l30.52 66.76L200 81.25l-50 48.5L161.92 200 100 165.83 38.08 200 50 129.75 0 81.25l69.44-13.29z' />
                      <path d='M100 0.587l30.52 66.76L200 81.25l-50 48.5L161.92 200 100 165.83 38.08 200 50 129.75 0 81.25l69.44-13.29z' transform='scale(0.7) translate(42.5, 47)' fill='white' />
                    </svg>
                  </div>
                </Box>
                <Box
                  component={motion.div}
                  sx={{
                    position: 'absolute',
                    width: '60px',
                    height: '60px',
                    borderRadius: '25%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    backgroundColor: 'transparent',
                    border: '20px solid white',
                    filter: 'drop-shadow(-2px 2px 2px rgba(0,0,0,0.5))',
                    top: '-40px',
                    left: '90px'
                  }}
                  drag
                  initial={{ scale: !trigger ? 0 : 1 }}
                  animate={{ scale: !trigger ? 1 : 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 20,
                    delay: 0.6
                  }}
                >
                  <Box
                    component={motion.div}
                    sx={{
                      position: 'absolute',
                      width: '50px',
                      height: '50px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: '25%',
                      backgroundColor: 'transparent',
                      border: `5px solid ${'blue'}`
                    }}
                  >
                  </Box>
                  <Box
                    component={motion.div}
                    sx={{
                      position: 'absolute',
                      width: '70px',
                      height: '70px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: '25%',
                      backgroundColor: 'transparent',
                      border: `5px solid ${'blue'}`
                    }}
                  >
                  </Box>
                </Box>
                <Box
                  component={motion.div}
                  sx={{
                    position: 'absolute',
                    width: '95px',
                    height: '95px',
                    borderRadius: '25%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    backgroundColor: 'transparent',
                    border: `20px solid ${'blue'}`,
                    filter: 'drop-shadow(-2px 2px 2px rgba(0,0,0,0.5))',
                    top: '35px',
                    left: '-60px'
                  }}
                  drag
                  initial={{ scale: !trigger ? 0 : 1 }}
                  animate={{ scale: !trigger ? 1 : 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 20,
                    delay: 0.4
                  }}
                >
                  <Box
                    component={motion.div}
                    sx={{
                      position: 'absolute',
                      width: '90px',
                      height: '90px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: '25%',
                      backgroundColor: 'transparent',
                      border: '5px solid yellow'
                    }}
                  >
                  </Box>
                  <Box
                    component={motion.div}
                    sx={{
                      position: 'absolute',
                      width: '70px',
                      height: '70px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: '25%',
                      backgroundColor: 'transparent',
                      border: '5px solid yellow'
                    }}
                  >
                  </Box>
                </Box>
              </>
              : null}
          </Box>
        </AppBar>
      </HideOnScroll>
      <HideOnScrollRight trigger={trigger} open={open}>
        <AppBar position='fixed' color='transparent' sx={{ boxShadow: 'none' }}>
          <Box component='header'>
            {open && !trigger ?
              <>
                <Box
                  component={motion.div}
                  sx={{
                    position: 'absolute',
                    width: '60px',
                    height: '60px',
                    borderRadius: '25%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    backgroundColor: 'red',
                    border: '10px solid black',
                    filter: 'drop-shadow(-2px 2px 2px rgba(0,0,0,0.5))',
                    top: '60px',
                    left: '20px'
                  }}
                  drag
                  initial={{ scale: !trigger ? 0 : 1 }}
                  animate={{ scale: !trigger ? 1 : 0, rotate: 15 }}
                  transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 20,
                    delay: 0.55
                  }}
                >
                </Box>
                <Box
                  component={motion.div}
                  sx={{
                    position: 'absolute',
                    width: '40px',
                    height: '40px',
                    borderRadius: '25%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    background: 'repeating-linear-gradient(135deg, blue, blue 6px, transparent 6px, transparent 11px)',
                    filter: 'drop-shadow(-2px 2px 2px rgba(0,0,0,0.5))',
                    top: '70px',
                    right: '-10px',
                  }}
                  drag
                  initial={{ scale: !trigger ? 0 : 1 }}
                  animate={{ scale: !trigger ? 1 : 0, rotate: 15 }}
                  transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 20,
                    delay: 0.7
                  }}
                >
                </Box>
                <Box
                  component={motion.div}
                  sx={{
                    position: 'absolute',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    backgroundColor: 'black',
                    clipPath: 'polygon(100% 50%,78.53% 59.27%,90.45% 79.39%,67.63% 74.27%,65.45% 97.55%,50% 80%,34.55% 97.55%,32.37% 74.27%,9.55% 79.39%,21.47% 59.27%,0% 50%,21.47% 40.73%,9.55% 20.61%,32.37% 25.73%,34.55% 2.45%,50% 20%,65.45% 2.45%,67.63% 25.73%,90.45% 20.61%,78.53% 40.73%,100% 50%,78.53% 59.27%,67.12% 55.56%,80% 50%,67.12% 44.44%,74.27% 32.37%,60.58% 35.44%,59.27% 21.47%,50% 32%,40.73% 21.47%,39.42% 35.44%,25.73% 32.37%,32.88% 44.44%,20% 50%,32.88% 55.56%,25.73% 67.63%,39.42% 64.56%,40.73% 78.53%,50% 68%,59.27% 78.53%,60.58% 64.56%,74.27% 67.63%,67.12% 55.56%,80% 50%)',
                    top: '65px',
                    left: '60px'
                  }}
                  drag
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
                >
                </Box>
              </>
              : null}
            <ZigzagContainer width='100%' height='100px' color={'red'} toColor={'#d10000'} toGradient='50deg' bottom>
              {open && !trigger ?
                <>
                  {/* spikes */}
                  <Box
                    component={motion.div}
                    sx={{
                      position: 'absolute',
                      width: '80px',
                      height: '80px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      cursor: 'pointer',
                      backgroundColor: 'black',
                      clipPath: 'polygon(100% 50%,78.53% 59.27%,90.45% 79.39%,67.63% 74.27%,65.45% 97.55%,50% 80%,34.55% 97.55%,32.37% 74.27%,9.55% 79.39%,21.47% 59.27%,0% 50%,21.47% 40.73%,9.55% 20.61%,32.37% 25.73%,34.55% 2.45%,50% 20%,65.45% 2.45%,67.63% 25.73%,90.45% 20.61%,78.53% 40.73%,100% 50%,78.53% 59.27%,67.12% 55.56%,80% 50%,67.12% 44.44%,74.27% 32.37%,60.58% 35.44%,59.27% 21.47%,50% 32%,40.73% 21.47%,39.42% 35.44%,25.73% 32.37%,32.88% 44.44%,20% 50%,32.88% 55.56%,25.73% 67.63%,39.42% 64.56%,40.73% 78.53%,50% 68%,59.27% 78.53%,60.58% 64.56%,74.27% 67.63%,67.12% 55.56%,80% 50%)',
                      top: '-20px',
                      left: '135px'
                    }}
                    drag
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 5, ease: 'linear' }}
                  >
                  </Box>
                  {/* circle */}
                  <Box
                    component={motion.div}
                    sx={{
                      position: 'absolute',
                      width: '70px',
                      height: '70px',
                      borderRadius: '25%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      cursor: 'pointer',
                      backgroundColor: 'red',
                      border: '10px solid black',
                      top: '-30px',
                      left: '30px'
                    }}
                    drag
                    initial={{ scale: !trigger ? 0 : 1 }}
                    animate={{ scale: !trigger ? 1 : 0, rotate: 15 }}
                    transition={{
                      type: 'spring',
                      stiffness: 500,
                      damping: 20,
                      delay: 0.52
                    }}
                  >
                  </Box>
                  <Box
                    component={motion.div}
                    sx={{
                      position: 'absolute',
                      width: '80px',
                      height: '80px',
                      borderRadius: '25%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      cursor: 'pointer',
                      backgroundColor: 'black',
                      top: '10px',
                      left: '-20px'
                    }}
                    drag
                    initial={{ scale: !trigger ? 0 : 1 }}
                    animate={{ scale: !trigger ? 1 : 0, rotate: 15 }}
                    transition={{
                      type: 'spring',
                      stiffness: 500,
                      damping: 20,
                      delay: 0.54
                    }}
                  >
                  </Box>
                  {/* striped circle */}
                  <Box
                    component={motion.div}
                    sx={{
                      position: 'absolute',
                      width: '95px',
                      height: '95px',
                      borderRadius: '25%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      cursor: 'pointer',
                      background: 'repeating-linear-gradient(135deg, white, white 8px, transparent 8px, transparent 15px)',
                      filter: 'drop-shadow(-2px 2px 2px rgba(0,0,0,0.5))',
                      top: '-20px',
                      left: '-30px',
                    }}
                    drag
                    initial={{ scale: !trigger ? 0 : 1 }}
                    animate={{ scale: !trigger ? 1 : 0, rotate: 15 }}
                    transition={{
                      type: 'spring',
                      stiffness: 500,
                      damping: 20,
                      delay: 0.5
                    }}
                  >
                  </Box>
                </>
                : null}
              {/* stars long shadow */}
              {open && !trigger ?
                <Box
                  component={motion.div}
                  sx={{
                    position: 'absolute',
                    '& svg': {
                      filter: 'drop-shadow(-2px 3px 10px rgba(0,0,0,0.5))',
                    },
                    cursor: 'pointer',
                    top: '80px',
                    left: '240px'
                  }}
                  drag
                  initial={{ scale: !trigger ? 0 : 1 }}
                  animate={{ scale: !trigger ? 1 : 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 20,
                    delay: 0.65
                  }}
                >
                  <div style={{ transform: 'scale(0.2) rotate(135deg)', width: '1px', height: '1px' }}>
                    <svg
                      width='200px'
                      height='700px'
                      fill={'red'}
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <rect x='0' y='80' width='100%' height='100%' fill={'red'} />
                      <path d='M100 0.587l30.52 66.76L200 81.25l-50 48.5L161.92 200 100 165.83 38.08 200 50 129.75 0 81.25l69.44-13.29z' />
                      <path d='M100 0.587l30.52 66.76L200 81.25l-50 48.5L161.92 200 100 165.83 38.08 200 50 129.75 0 81.25l69.44-13.29z' transform='scale(0.7) translate(42.5, 47)' fill='white' />
                    </svg>
                  </div>
                  <Box
                    sx={{
                      position: 'absolute',
                      '& svg': {
                        filter: 'drop-shadow(-2px 3px 10px rgba(0,0,0,0.5))',
                      },
                      top: '-10px',
                      left: '-45px'
                    }}>
                    <div style={{ transform: 'scale(0.1) rotate(135deg)', width: '1px', height: '1px' }}>
                      <svg
                        width='200px'
                        height='1000px'
                        fill={'red'}
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <rect x='0' y='80' width='100%' height='100%' fill={'red'} />
                        <path d='M100 0.587l30.52 66.76L200 81.25l-50 48.5L161.92 200 100 165.83 38.08 200 50 129.75 0 81.25l69.44-13.29z' />
                        <path d='M100 0.587l30.52 66.76L200 81.25l-50 48.5L161.92 200 100 165.83 38.08 200 50 129.75 0 81.25l69.44-13.29z' transform='scale(0.7) translate(42.5, 47)' fill='white' />
                      </svg>
                    </div>
                  </Box>
                </Box>
                : null}
              <Grid container p={2} spacing={1}>
                <Grid item>
                  <Box
                    component={motion.div}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 1 }}
                    initial={{ scale: !trigger ? 0 : 1 }}
                    animate={{ scale: !trigger ? 1 : 0 }}
                    transition={{
                      type: 'spring',
                      stiffness: 500,
                      damping: 20
                    }}
                  >
                    <Button
                      onClick={() => {
                        handleToggle()
                        handleChangeColor()
                      }}
                      variant='contained'
                      sx={{
                        color: 'red',
                        border: '5px solid',
                        borderColor: 'red',
                        borderRadius: '10px',
                        backgroundColor: 'white',
                        '&:hover': {
                          backgroundColor: 'white',
                          borderColor: 'red',
                        },
                        '&:active': {
                          backgroundColor: 'white.main',
                          borderColor: 'red',
                        },
                      }}
                    >
                      <IconArrowBigRightLinesFilled />
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </ZigzagContainer>
            {/* star long shadow */}
            {open && !trigger ?
              <>
                <Box
                  component={motion.div}
                  sx={{
                    position: 'absolute',
                    '& svg': {
                      filter: 'drop-shadow(-2px 3px 10px rgba(0,0,0,0.5))',
                    },
                    cursor: 'pointer',
                    top: '120px',
                    left: '50px'
                  }}
                  drag
                  initial={{ scale: !trigger ? 0 : 1 }}
                  animate={{ scale: !trigger ? 1 : 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 20,
                    delay: 0.45
                  }}
                >
                  <div style={{ transform: 'scale(0.1) rotate(135deg)', width: '1px', height: '1px' }}>
                    <svg
                      width='200px'
                      height='1000px'
                      fill={'black'}
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <rect x='0' y='80' width='100%' height='100%' fill={'black'} />
                      <path d='M100 0.587l30.52 66.76L200 81.25l-50 48.5L161.92 200 100 165.83 38.08 200 50 129.75 0 81.25l69.44-13.29z' />
                      <path d='M100 0.587l30.52 66.76L200 81.25l-50 48.5L161.92 200 100 165.83 38.08 200 50 129.75 0 81.25l69.44-13.29z' transform='scale(0.7) translate(42.5, 47)' fill='white' />
                    </svg>
                  </div>
                </Box>
                <Box
                  component={motion.div}
                  sx={{
                    position: 'absolute',
                    width: '60px',
                    height: '60px',
                    borderRadius: '20%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    backgroundColor: 'transparent',
                    border: `20px solid ${'red'}`,
                    filter: 'drop-shadow(-2px 2px 2px rgba(0,0,0,0.5))',
                    top: '-40px',
                    left: '90px'
                  }}
                  drag
                  initial={{ scale: !trigger ? 0 : 1 }}
                  animate={{ scale: !trigger ? 1 : 0, rotate: 15 }}
                  transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 20,
                    delay: 0.6
                  }}
                >
                  <Box
                    component={motion.div}
                    sx={{
                      position: 'absolute',
                      width: '50px',
                      height: '50px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: '20%',
                      backgroundColor: 'transparent',
                      border: '5px solid white'
                    }}
                  >
                  </Box>
                  <Box
                    component={motion.div}
                    sx={{
                      position: 'absolute',
                      width: '70px',
                      height: '70px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: '25%',
                      backgroundColor: 'transparent',
                      border: '5px solid white'
                    }}
                  >
                  </Box>
                </Box>
                <Box
                  component={motion.div}
                  sx={{
                    position: 'absolute',
                    width: '95px',
                    height: '95px',
                    borderRadius: '25%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    backgroundColor: 'transparent',
                    border: `20px solid ${'red'}`,
                    filter: 'drop-shadow(-2px 2px 2px rgba(0,0,0,0.5))',
                    top: '35px',
                    left: '-60px'
                  }}
                  drag
                  initial={{ scale: !trigger ? 0 : 1 }}
                  animate={{ scale: !trigger ? 1 : 0, rotate: 15 }}
                  transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 20,
                    delay: 0.4
                  }}>
                  <Box
                    component={motion.div}
                    sx={{
                      position: 'absolute',
                      width: '90px',
                      height: '90px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: '25%',
                      backgroundColor: 'transparent',
                      border: '5px solid white'
                    }}
                  >
                  </Box>
                  <Box
                    component={motion.div}
                    sx={{
                      position: 'absolute',
                      width: '70px',
                      height: '70px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: '20%',
                      backgroundColor: 'transparent',
                      border: '5px solid white'
                    }}
                  >
                  </Box>
                </Box>
              </>
              : null}
          </Box>
        </AppBar>
      </HideOnScrollRight>
      <Dialog
        PaperComponent={({ children }) => (
          <Box
            sx={{
              position: 'absolute',
              padding: '10px',
              background: 'linear-gradient(100deg, red, #d10000)',
              borderRadius: '20px',
              filter: 'drop-shadow(-2px 2px 2px rgba(0,0,0,0.5))',
            }}>
            {/* striped circle */}
            <Box
              sx={{
                position: 'absolute',
                width: '40px',
                height: '40px',
                borderRadius: '25%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'repeating-linear-gradient(45deg, red, red 5px, transparent 5px, transparent 9px)',
                top: '-15px',
                left: '20px',
              }}
            >
            </Box>
            <Box
              sx={{
                position: 'absolute',
                width: '40px',
                height: '40px',
                borderRadius: '25%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'repeating-linear-gradient(45deg, #d10000, #d10000 5px, transparent 5px, transparent 9px)',
                bottom: '15px',
                right: '-20px',
              }}
            >
            </Box>
            {/* spike */}
            <Box
              sx={{
                position: 'absolute',
                width: '60px',
                height: '60px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                backgroundColor: 'red',
                clipPath: 'polygon(100% 50%,78.53% 59.27%,90.45% 79.39%,67.63% 74.27%,65.45% 97.55%,50% 80%,34.55% 97.55%,32.37% 74.27%,9.55% 79.39%,21.47% 59.27%,0% 50%,21.47% 40.73%,9.55% 20.61%,32.37% 25.73%,34.55% 2.45%,50% 20%,65.45% 2.45%,67.63% 25.73%,90.45% 20.61%,78.53% 40.73%,100% 50%,78.53% 59.27%,67.12% 55.56%,80% 50%,67.12% 44.44%,74.27% 32.37%,60.58% 35.44%,59.27% 21.47%,50% 32%,40.73% 21.47%,39.42% 35.44%,25.73% 32.37%,32.88% 44.44%,20% 50%,32.88% 55.56%,25.73% 67.63%,39.42% 64.56%,40.73% 78.53%,50% 68%,59.27% 78.53%,60.58% 64.56%,74.27% 67.63%,67.12% 55.56%,80% 50%)',
                top: '-20px',
                left: '-20px'
              }}
            >
            </Box>
            {/* circle */}
            <Box
              sx={{
                position: 'absolute',
                width: '60px',
                height: '60px',
                borderRadius: '25%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'transparent',
                border: '7px solid #d10000',
                bottom: '-15px',
                right: '-15px'
              }}
            >
            </Box>
            <Box
              sx={{
                position: 'absolute',
                width: '40px',
                height: '40px',
                borderRadius: '25%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'transparent',
                border: '7px solid red',
                top: '10px',
                left: '-20px'
              }}
            >
            </Box>
            <Box
              sx={{
                position: 'absolute',
                width: '40px',
                height: '40px',
                borderRadius: '25%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#d10000',
                bottom: '-15px',
                right: '20px',
              }}
            >
            </Box>
            <Box
              sx={{
                position: 'relative',
                backgroundColor: 'white',
                borderRadius: '10px',
                padding: '10px',
                height: '180px',
                width: '350px',
                boxShadow: 'inset 0px 0px 5px rgba(0, 0, 0, 0.5)'
              }}>
              {children}
            </Box>
          </Box>
        )}
        open={openMusic}
        onClose={() => setOpenMusic(!openMusic)}
        TransitionComponent={Transition}
        keepMounted
      >
        <DialogTitle>
          <Stack direction='column' alignItems='center'>
            <Typography
              variant='h4'
              sx={{
                fontFamily: 'Nunito, Arial, sans-serif',
                fontWeight: 700,
                color: 'white',
                textShadow: `
              0px 1.5px 4px rgba(0,0,0,1), 
              0px 1.5px 4px rgba(0,0,0,1), 
              0px 1.5px 4px rgba(0,0,0,1), 
              0px 1.5px 4px rgba(0,0,0,1), 
              0px 1.5px 4px rgba(0,0,0,1), 
              0px 1.5px 4px rgba(0,0,0,1), 
              0px 1.5px 4px rgba(0,0,0,1), 
              0px 1.5px 4px rgba(0,0,0,1), 
              0px 1.5px 4px rgba(0,0,0,1), 
              0px 1.5px 4px rgba(0,0,0,1), 
              0px 1.5px 4px rgba(0,0,0,1), 
              0px 1.5px 4px rgba(0,0,0,1), 
              0px 1.5px 4px rgba(0,0,0,1), 
              0px 1.5px 4px rgba(0,0,0,1), 
              0px 1.5px 4px rgba(0,0,0,1), 
              0px 1.5px 4px rgba(0,0,0,1)`
              }}
            >
              Listen to music?
            </Typography>
          </Stack>
        </DialogTitle>
        <DialogActions
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px'
          }}>
          <Box
            component={motion.div}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 500,
              damping: 20
            }}
          >
            <Button
              onClick={() => {
                setOpenMusic(!openMusic)
                setStartAutoplay(!startAutoplay)
              }}
              variant='contained'
              sx={{
                color: 'blue',
                border: '5px solid',
                borderColor: 'blue',
                borderRadius: '10px',
                backgroundColor: 'white',
                '&:hover': {
                  backgroundColor: 'white',
                  borderColor: 'blue',
                },
                '&:active': {
                  backgroundColor: 'white.main',
                  borderColor: 'blue',
                },
              }}>
              <IconVolume />
            </Button>
          </Box>
          <Box
            component={motion.div}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 500,
              damping: 20
            }}
          >
            <Button onClick={() => setOpenMusic(!openMusic)} variant='contained'
              sx={{
                color: 'red',
                border: '5px solid',
                borderColor: 'red',
                borderRadius: '10px',
                backgroundColor: 'white',
                '&:hover': {
                  backgroundColor: 'white',
                  borderColor: 'red',
                },
                '&:active': {
                  backgroundColor: 'white.main',
                  borderColor: 'red',
                },
              }}>
              <IconVolumeOff />
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
      <AudioPlayer autoPlay={startAutoplay} />
    </>
  )
}

export default Navbar