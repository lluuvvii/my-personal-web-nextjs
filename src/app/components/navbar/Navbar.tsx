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
  const [value, setValue] = useState(0);
  // upcoming update
  // const [showZigZag, setShowZigZag] = useState(false)

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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

  // upcoming update
  // const handleAnimateClick = () => {
  //   setShowZigZag(true)
  //   setTimeout(() => {
  //     setShowZigZag(false)
  //   }, 1000)
  // }

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
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    backgroundColor: 'transparent',
                    border: '15px solid black',
                    filter: 'drop-shadow(-2px 3px 5px rgba(0,0,0,0.5))',
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
                    width: '95px',
                    height: '95px',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    background: 'repeating-linear-gradient(135deg, red, red 8px, transparent 8px, transparent 15px)',
                    filter: 'drop-shadow(-2px 3px 5px rgba(0,0,0,0.5))',
                    top: '30px',
                    right: '-20px',
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
                    clipPath: 'polygon(100% 50%,83.81% 59.06%,93.3% 75%,74.75% 74.75%,75% 93.3%,59.06% 83.81%,50% 100%,40.94% 83.81%,25% 93.3%,25.25% 74.75%,6.7% 75%,16.19% 59.06%,0% 50%,16.19% 40.94%,6.7% 25%,25.25% 25.25%,25% 6.7%,40.94% 16.19%,50% 0%,59.06% 16.19%,75% 6.7%,74.75% 25.25%,93.3% 25%,83.81% 40.94%)',
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
              <Grid container p={2} spacing={1} justifyContent='space-between'>
                {/* <Grid item> */}
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
                        clipPath: 'polygon(100% 50%,83.81% 59.06%,93.3% 75%,74.75% 74.75%,75% 93.3%,59.06% 83.81%,50% 100%,40.94% 83.81%,25% 93.3%,25.25% 74.75%,6.7% 75%,16.19% 59.06%,0% 50%,16.19% 40.94%,6.7% 25%,25.25% 25.25%,25% 6.7%,40.94% 16.19%,50% 0%,59.06% 16.19%,75% 6.7%,74.75% 25.25%,93.3% 25%,83.81% 40.94%)',
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
                        borderRadius: '50%',
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
                        borderRadius: '50%',
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
                        borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        cursor: 'pointer',
                        background: 'repeating-linear-gradient(135deg, yellow, yellow 8px, transparent 8px, transparent 15px)',
                        filter: 'drop-shadow(-2px 3px 5px rgba(0,0,0,0.5))',
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
                        borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        cursor: 'pointer',
                        background: 'repeating-linear-gradient(135deg, yellow, yellow 4px, transparent 4px, transparent 8px)',
                        filter: 'drop-shadow(-2px 3px 5px rgba(0,0,0,0.5))',
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
                {/* </Grid> */}
                <Grid item>
                  <Box
                    component={motion.div}
                    whileHover={{ scale: 1.2 }}
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
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 1 }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: 'spring',
                      stiffness: 500,
                      damping: 20
                    }}
                  >
                    {/* upcoming update */}
                    {/* {showZigZag && (
                      <>
                        <Box
                          component={motion.div}
                          sx={{
                            position: 'absolute',
                            '--a': '90deg', // control the angle
                            '--s': '10px', // size of the zig-zag
                            '--b': '3px',  // control the thickness
                            background: 'red',
                            height: 'calc(var(--b) + var(--s)/(2*tan(var(--a)/2)))',
                            width: '40px',
                            '--_g': 'var(--s) repeat-x conic-gradient(from calc(var(--a)/-2) at bottom, #0000, #000 1deg calc(var(--a) - 1deg), #0000 var(--a))',
                            mask: '50% calc(-1*var(--b))/var(--_g) exclude, 50%/var(--_g)',
                            WebkitMask: '50% calc(-1*var(--b))/var(--_g) exclude, 50%/var(--_g)', // Webkit fallback
                            top: '15px',
                            left: '-50px',
                            display: 'flex',
                            alignItems: 'center'
                          }}
                          initial={{ x: 20, opacity: 1 }}
                          animate={{ x: -20, opacity: 0 }}
                          transition={{ duration: 0.2, opacity: { delay: 0.5, duration: 0.8 } }}
                        />
                        <Box
                          component={motion.div}
                          sx={{
                            position: 'absolute',
                            '--a': '90deg', // control the angle
                            '--s': '10px', // size of the zig-zag
                            '--b': '3px',  // control the thickness
                            background: 'yellow',
                            height: 'calc(var(--b) + var(--s)/(2*tan(var(--a)/2)))',
                            width: '40px',
                            '--_g': 'var(--s) repeat-x conic-gradient(from calc(var(--a)/-2) at bottom, #0000, #000 1deg calc(var(--a) - 1deg), #0000 var(--a))',
                            mask: '50% calc(-1*var(--b))/var(--_g) exclude, 50%/var(--_g)',
                            WebkitMask: '50% calc(-1*var(--b))/var(--_g) exclude, 50%/var(--_g)', // Webkit fallback
                            top: '50px',
                            right: '-40px',
                            display: 'flex',
                            alignItems: 'center'
                          }}
                          initial={{ x: -10, y: -10, opacity: 1, rotate: '45deg' }}
                          animate={{ x: 10, y: 10, opacity: 0 }}
                          transition={{ duration: 0.2, opacity: { delay: 0.5, duration: 0.8 } }}
                        />
                      </>
                    )} */}
                    <Button onClick={() => {
                      // handleAnimateClick() // upcoming update
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
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    backgroundColor: 'transparent',
                    border: '20px solid white',
                    filter: 'drop-shadow(-2px 3px 5px rgba(0,0,0,0.5))',
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
                      borderRadius: '50%',
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
                      borderRadius: '50%',
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
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    backgroundColor: 'transparent',
                    border: `20px solid ${'blue'}`,
                    filter: 'drop-shadow(-2px 3px 5px rgba(0,0,0,0.5))',
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
                      borderRadius: '50%',
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
                      borderRadius: '50%',
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
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    backgroundColor: 'transparent',
                    border: '15px solid black',
                    filter: 'drop-shadow(-2px 3px 5px rgba(0,0,0,0.5))',
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
                    width: '95px',
                    height: '95px',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    background: 'repeating-linear-gradient(135deg, blue, blue 8px, transparent 8px, transparent 15px)',
                    filter: 'drop-shadow(-2px 3px 5px rgba(0,0,0,0.5))',
                    top: '30px',
                    right: '-20px',
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
                    clipPath: 'polygon(100% 50%,83.81% 59.06%,93.3% 75%,74.75% 74.75%,75% 93.3%,59.06% 83.81%,50% 100%,40.94% 83.81%,25% 93.3%,25.25% 74.75%,6.7% 75%,16.19% 59.06%,0% 50%,16.19% 40.94%,6.7% 25%,25.25% 25.25%,25% 6.7%,40.94% 16.19%,50% 0%,59.06% 16.19%,75% 6.7%,74.75% 25.25%,93.3% 25%,83.81% 40.94%)',
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
            <ZigzagContainer width='100%' height='100px' color={'red'} toColor={'#ff6054'} toGradient='50deg' bottom>
              <Grid container p={2} spacing={1} justifyContent='space-between'>
                {/* <Grid item> */}
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
                        backgroundColor: 'yellow',
                        clipPath: 'polygon(100% 50%,83.81% 59.06%,93.3% 75%,74.75% 74.75%,75% 93.3%,59.06% 83.81%,50% 100%,40.94% 83.81%,25% 93.3%,25.25% 74.75%,6.7% 75%,16.19% 59.06%,0% 50%,16.19% 40.94%,6.7% 25%,25.25% 25.25%,25% 6.7%,40.94% 16.19%,50% 0%,59.06% 16.19%,75% 6.7%,74.75% 25.25%,93.3% 25%,83.81% 40.94%)',
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
                        borderRadius: '50%',
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
                        borderRadius: '50%',
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
                        borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        cursor: 'pointer',
                        background: 'repeating-linear-gradient(135deg, yellow, yellow 8px, transparent 8px, transparent 15px)',
                        filter: 'drop-shadow(-2px 3px 5px rgba(0,0,0,0.5))',
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
                        borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        cursor: 'pointer',
                        background: 'repeating-linear-gradient(135deg, black, black 4px, transparent 4px, transparent 8px)',
                        filter: 'drop-shadow(-2px 3px 5px rgba(0,0,0,0.5))',
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
                {/* </Grid> */}
                <Grid item>
                  <Box
                    component={motion.div}
                    whileHover={{ scale: 1.2 }}
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
                      fill={'red'}
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <rect x='0' y='80' width='100%' height='100%' fill={'red'} />
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
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    backgroundColor: 'transparent',
                    border: `20px solid ${'red'}`,
                    filter: 'drop-shadow(-2px 3px 5px rgba(0,0,0,0.5))',
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
                      borderRadius: '50%',
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
                      borderRadius: '50%',
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
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    backgroundColor: 'transparent',
                    border: `20px solid ${'red'}`,
                    filter: 'drop-shadow(-2px 3px 5px rgba(0,0,0,0.5))',
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
                      borderRadius: '50%',
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
                      borderRadius: '50%',
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
              background: 'linear-gradient(135deg, #008cff, #007cff, blue)',
              borderRadius: '20px',
              filter: 'drop-shadow(-2px 3px 5px rgba(0,0,0,0.5))',
              width: '300px',
              height: '180px'
            }}>
            {/* striped circle */}
            <Box
              component={motion.div}
              sx={{
                position: 'absolute',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'repeating-linear-gradient(45deg, #008cff, #008cff 5px, transparent 5px, transparent 9px)',
                top: '-15px',
                left: '20px',
              }}
            >
            </Box>
            <Box
              component={motion.div}
              sx={{
                position: 'absolute',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'repeating-linear-gradient(45deg, blue, blue 5px, transparent 5px, transparent 9px)',
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
                backgroundColor: '#008cff',
                clipPath: 'polygon(100% 50%,83.81% 59.06%,93.3% 75%,74.75% 74.75%,75% 93.3%,59.06% 83.81%,50% 100%,40.94% 83.81%,25% 93.3%,25.25% 74.75%,6.7% 75%,16.19% 59.06%,0% 50%,16.19% 40.94%,6.7% 25%,25.25% 25.25%,25% 6.7%,40.94% 16.19%,50% 0%,59.06% 16.19%,75% 6.7%,74.75% 25.25%,93.3% 25%,83.81% 40.94%)',
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
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'transparent',
                border: '7px solid blue',
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
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'transparent',
                border: '7px solid #008cff',
                top: '10px',
                left: '-20px'
              }}
            >
            </Box>
            <Box
              component={motion.div}
              sx={{
                position: 'absolute',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'blue',
                bottom: '-15px',
                right: '20px',
              }}
            >
            </Box>
            <Box sx={{ backgroundColor: 'white', borderRadius: '10px', padding: '10px', height: '160px', position: 'absolute', width: '280px' }}>
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
              variant='h5'
              sx={{
                fontFamily: 'Nunito, Arial, sans-serif',
                fontWeight: 700,
                color: 'white',
                textShadow: '0px 3px 1px rgba(0,0,0,1), 0px -1px 1px rgba(0,0,0,1), 2px -0px 1px rgba(0,0,0,1), -2px 0px 1px rgba(0,0,0,1), 2px 2px 1px rgba(0,0,0,1), -2px 2px 1px rgba(0,0,0,1)'
              }}
            >Listen to music?</Typography>
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
            whileHover={{ scale: 1.2 }}
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
            whileHover={{ scale: 1.2 }}
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