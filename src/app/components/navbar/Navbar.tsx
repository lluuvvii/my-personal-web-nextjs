'use client'

import { motion } from 'framer-motion'
import HideOnScroll from '@/app/components/navbar/HideOnScroll'
import { AppBar, Box, Button, Grid, useScrollTrigger } from '@mui/material'
import ZigzagContainer from '../materials/ZigzagContainer'
import { useMemo, useState, useEffect } from 'react'
import { IconArrowBigLeftLinesFilled, IconArrowBigRightLinesFilled } from '@tabler/icons-react'

interface Props {
  window?: () => Window | undefined
}

const Navbar = ({ window }: Props) => {
  const [open, setOpen] = useState(false)
  const [color, setColor] = useState('')
  const [gradientColor, setGradientColor] = useState('')

  const handleChangeColor = () => {
    if (color !== '') {
      if (color === 'blue') {
        setTimeout(() => {
          setColor('red')
          setGradientColor('#ff6054')
        }, 200)
      }
      if (color === 'red') {
        setTimeout(() => {
          setColor('blue')
          setGradientColor('#008cff')
        }, 200)
      }
    }
  }

  useEffect(() => {
    setColor('blue')
    setGradientColor('#008cff')
  }, [])

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  })

  const handleToggle = useMemo(() => () => setOpen((prevOpen) => !prevOpen), [])

  return (
    <>
      <HideOnScroll trigger={trigger} open={open}>
        <AppBar position='fixed' color='transparent' sx={{ boxShadow: 'none' }}>
          {!open ?
            <Box component='header'>
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
                  backgroundColor: 'transparent',
                  border: '15px solid black',
                  filter: 'drop-shadow(-2px 3px 5px rgba(0,0,0,0.5))',
                  top: '60px',
                  left: '20px'
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1 }}
                animate={{ rotate: trigger ? 360 : 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
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
                  backgroundColor: 'black',
                  clipPath: 'polygon(100% 50%,83.81% 59.06%,93.3% 75%,74.75% 74.75%,75% 93.3%,59.06% 83.81%,50% 100%,40.94% 83.81%,25% 93.3%,25.25% 74.75%,6.7% 75%,16.19% 59.06%,0% 50%,16.19% 40.94%,6.7% 25%,25.25% 25.25%,25% 6.7%,40.94% 16.19%,50% 0%,59.06% 16.19%,75% 6.7%,74.75% 25.25%,93.3% 25%,83.81% 40.94%)',
                  top: '75px',
                  left: '65px'
                }}
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
              >
              </Box>
              <ZigzagContainer width='100%' height='100px' color={color} toColor={gradientColor} toGradient='50deg' bottom>
                <Grid container p={2} spacing={1}>
                  <Grid item>
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
                        backgroundColor: 'yellow',
                        clipPath: 'polygon(100% 50%,83.81% 59.06%,93.3% 75%,74.75% 74.75%,75% 93.3%,59.06% 83.81%,50% 100%,40.94% 83.81%,25% 93.3%,25.25% 74.75%,6.7% 75%,16.19% 59.06%,0% 50%,16.19% 40.94%,6.7% 25%,25.25% 25.25%,25% 6.7%,40.94% 16.19%,50% 0%,59.06% 16.19%,75% 6.7%,74.75% 25.25%,93.3% 25%,83.81% 40.94%)',
                        top: '45px',
                        left: '60px'
                      }}
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 5, ease: 'linear' }}
                    >
                    </Box>
                    <Box
                      component={motion.div}
                      sx={{
                        position: 'absolute',
                        width: '50px',
                        height: '50px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: color,
                        clipPath: 'polygon(100% 50%,83.81% 59.06%,93.3% 75%,74.75% 74.75%,75% 93.3%,59.06% 83.81%,50% 100%,40.94% 83.81%,25% 93.3%,25.25% 74.75%,6.7% 75%,16.19% 59.06%,0% 50%,16.19% 40.94%,6.7% 25%,25.25% 25.25%,25% 6.7%,40.94% 16.19%,50% 0%,59.06% 16.19%,75% 6.7%,74.75% 25.25%,93.3% 25%,83.81% 40.94%,100% 50%,83.81% 59.06%,calc(83.81% - 6.76px) calc(59.06% - 1.81px),calc(100% - 10px) calc(50% - 0px),calc(83.81% - 6.76px) calc(40.94% - -1.81px),calc(93.3% - 8.66px) calc(25% - -5px),calc(74.75% - 4.95px) calc(25.25% - -4.95px),calc(75% - 5px) calc(6.7% - -8.66px),calc(59.06% - 1.81px) calc(16.19% - -6.76px),calc(50% - 0px) calc(0% - -10px),calc(40.94% - -1.81px) calc(16.19% - -6.76px),calc(25% - -5px) calc(6.7% - -8.66px),calc(25.25% - -4.95px) calc(25.25% - -4.95px),calc(6.7% - -8.66px) calc(25% - -5px),calc(16.19% - -6.76px) calc(40.94% - -1.81px),calc(0% - -10px) calc(50% - 0px),calc(16.19% - -6.76px) calc(59.06% - 1.81px),calc(6.7% - -8.66px) calc(75% - 5px),calc(25.25% - -4.95px) calc(74.75% - 4.95px),calc(25% - -5px) calc(93.3% - 8.66px),calc(40.94% - -1.81px) calc(83.81% - 6.76px),calc(50% - 0px) calc(100% - 10px),calc(59.06% - 1.81px) calc(83.81% - 6.76px),calc(75% - 5px) calc(93.3% - 8.66px),calc(74.75% - 4.95px) calc(74.75% - 4.95px),calc(93.3% - 8.66px) calc(75% - 5px),calc(83.81% - 6.76px) calc(59.06% - 1.81px),calc(100% - 10px) calc(50% - 0px))',
                        top: '70px',
                        left: '65px'
                      }}
                      animate={{ rotate: -360 }}
                      transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
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
                        background: 'repeating-linear-gradient(135deg, yellow, yellow 8px, transparent 8px, transparent 11px)',
                        filter: 'drop-shadow(-2px 3px 5px rgba(0,0,0,0.5))',
                        top: '-20px',
                        left: '-30px',
                      }}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 1 }}></Box>
                    {/* spikes */}
                    <Box
                      component={motion.div}
                      sx={{
                        position: 'absolute',
                        width: '50px',
                        height: '50px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'yellow',
                        clipPath: 'polygon(100% 50%,83.81% 59.06%,93.3% 75%,74.75% 74.75%,75% 93.3%,59.06% 83.81%,50% 100%,40.94% 83.81%,25% 93.3%,25.25% 74.75%,6.7% 75%,16.19% 59.06%,0% 50%,16.19% 40.94%,6.7% 25%,25.25% 25.25%,25% 6.7%,40.94% 16.19%,50% 0%,59.06% 16.19%,75% 6.7%,74.75% 25.25%,93.3% 25%,83.81% 40.94%,100% 50%,83.81% 59.06%,calc(83.81% - 6.76px) calc(59.06% - 1.81px),calc(100% - 10px) calc(50% - 0px),calc(83.81% - 6.76px) calc(40.94% - -1.81px),calc(93.3% - 8.66px) calc(25% - -5px),calc(74.75% - 4.95px) calc(25.25% - -4.95px),calc(75% - 5px) calc(6.7% - -8.66px),calc(59.06% - 1.81px) calc(16.19% - -6.76px),calc(50% - 0px) calc(0% - -10px),calc(40.94% - -1.81px) calc(16.19% - -6.76px),calc(25% - -5px) calc(6.7% - -8.66px),calc(25.25% - -4.95px) calc(25.25% - -4.95px),calc(6.7% - -8.66px) calc(25% - -5px),calc(16.19% - -6.76px) calc(40.94% - -1.81px),calc(0% - -10px) calc(50% - 0px),calc(16.19% - -6.76px) calc(59.06% - 1.81px),calc(6.7% - -8.66px) calc(75% - 5px),calc(25.25% - -4.95px) calc(74.75% - 4.95px),calc(25% - -5px) calc(93.3% - 8.66px),calc(40.94% - -1.81px) calc(83.81% - 6.76px),calc(50% - 0px) calc(100% - 10px),calc(59.06% - 1.81px) calc(83.81% - 6.76px),calc(75% - 5px) calc(93.3% - 8.66px),calc(74.75% - 4.95px) calc(74.75% - 4.95px),calc(93.3% - 8.66px) calc(75% - 5px),calc(83.81% - 6.76px) calc(59.06% - 1.81px),calc(100% - 10px) calc(50% - 0px))',
                        top: '0px',
                        left: '50px'
                      }}
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
                    >
                    </Box>
                    {/* stars long shadow */}
                    <Box
                      sx={{
                        position: 'absolute',
                        '& svg': {
                          filter: 'drop-shadow(-2px 3px 10px rgba(0,0,0,0.5))',
                        },
                        top: '80px',
                        left: '240px'
                      }}>
                      <div style={{ transform: 'scale(0.2) rotate(135deg)', width: '1px', height: '1px' }}>
                        <svg
                          width='200px'
                          height='700px'
                          fill={color}
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <rect x='0' y='80' width='100%' height='100%' fill={color} />
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
                            fill={color}
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <rect x='0' y='80' width='100%' height='100%' fill={color} />
                            <path d='M100 0.587l30.52 66.76L200 81.25l-50 48.5L161.92 200 100 165.83 38.08 200 50 129.75 0 81.25l69.44-13.29z' />
                            <path d='M100 0.587l30.52 66.76L200 81.25l-50 48.5L161.92 200 100 165.83 38.08 200 50 129.75 0 81.25l69.44-13.29z' transform='scale(0.7) translate(42.5, 47)' fill='white' />
                          </svg>
                        </div>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item>
                    <Box
                      component={motion.div}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 1 }}
                    >
                      <Button
                        onClick={() => {
                          handleToggle()
                          handleChangeColor()
                        }}
                        variant='contained'
                        sx={{
                          color: color,
                          border: '5px solid',
                          borderColor: color,
                          borderRadius: '10px',
                          backgroundColor: 'white',
                          '&:hover': {
                            backgroundColor: 'white',
                            borderColor: color,
                          },
                          '&:active': {
                            backgroundColor: 'white.main',
                            borderColor: color,
                          },
                        }}
                      >
                        <IconArrowBigLeftLinesFilled />
                      </Button>
                    </Box>
                  </Grid>
                  {/* <Grid item>
                      <ReactAudioPlayer
                        src="/assets/music/sonic_gallery.weba"
                        autoPlay
                        controls
                        loop
                      />
                    </Grid> */}
                </Grid>
              </ZigzagContainer>
              {/* star long shadow */}
              <Box
                sx={{
                  position: 'absolute',
                  '& svg': {
                    filter: 'drop-shadow(-2px 3px 10px rgba(0,0,0,0.5))',
                  },
                  top: '120px',
                  left: '50px'
                }}>
                <div style={{ transform: 'scale(0.1) rotate(135deg)', width: '1px', height: '1px' }}>
                  <svg
                    width='200px'
                    height='1000px'
                    fill={color}
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <rect x='0' y='80' width='100%' height='100%' fill={color} />
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
                  backgroundColor: 'transparent',
                  border: '20px solid yellow',
                  filter: 'drop-shadow(-2px 3px 5px rgba(0,0,0,0.5))',
                  top: '-40px',
                  left: '90px'
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1 }}
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
                    border: `5px solid ${color}`
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
                    border: `5px solid ${color}`
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
                  backgroundColor: 'transparent',
                  border: `20px solid ${color}`,
                  filter: 'drop-shadow(-2px 3px 5px rgba(0,0,0,0.5))',
                  top: '35px',
                  left: '-60px'
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1 }}
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
            </Box>
            :
            <Box component='header'>
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
                  backgroundColor: 'transparent',
                  border: '15px solid black',
                  filter: 'drop-shadow(-2px 3px 5px rgba(0,0,0,0.5))',
                  top: '60px',
                  left: '20px'
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1 }}
                animate={{ rotate: trigger ? 360 : 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
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
                  backgroundColor: 'black',
                  clipPath: 'polygon(100% 50%,83.81% 59.06%,93.3% 75%,74.75% 74.75%,75% 93.3%,59.06% 83.81%,50% 100%,40.94% 83.81%,25% 93.3%,25.25% 74.75%,6.7% 75%,16.19% 59.06%,0% 50%,16.19% 40.94%,6.7% 25%,25.25% 25.25%,25% 6.7%,40.94% 16.19%,50% 0%,59.06% 16.19%,75% 6.7%,74.75% 25.25%,93.3% 25%,83.81% 40.94%)',
                  top: '75px',
                  left: '65px'
                }}
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
              >
              </Box>
              <ZigzagContainer width='100%' height='100px' color={color} toColor={gradientColor} toGradient='50deg' bottom>
                <Grid container p={2} spacing={1}>
                  <Grid item>
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
                        backgroundColor: 'yellow',
                        clipPath: 'polygon(100% 50%,83.81% 59.06%,93.3% 75%,74.75% 74.75%,75% 93.3%,59.06% 83.81%,50% 100%,40.94% 83.81%,25% 93.3%,25.25% 74.75%,6.7% 75%,16.19% 59.06%,0% 50%,16.19% 40.94%,6.7% 25%,25.25% 25.25%,25% 6.7%,40.94% 16.19%,50% 0%,59.06% 16.19%,75% 6.7%,74.75% 25.25%,93.3% 25%,83.81% 40.94%)',
                        top: '45px',
                        left: '60px'
                      }}
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 5, ease: 'linear' }}
                    >
                    </Box>
                    <Box
                      component={motion.div}
                      sx={{
                        position: 'absolute',
                        width: '50px',
                        height: '50px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: color,
                        clipPath: 'polygon(100% 50%,83.81% 59.06%,93.3% 75%,74.75% 74.75%,75% 93.3%,59.06% 83.81%,50% 100%,40.94% 83.81%,25% 93.3%,25.25% 74.75%,6.7% 75%,16.19% 59.06%,0% 50%,16.19% 40.94%,6.7% 25%,25.25% 25.25%,25% 6.7%,40.94% 16.19%,50% 0%,59.06% 16.19%,75% 6.7%,74.75% 25.25%,93.3% 25%,83.81% 40.94%,100% 50%,83.81% 59.06%,calc(83.81% - 6.76px) calc(59.06% - 1.81px),calc(100% - 10px) calc(50% - 0px),calc(83.81% - 6.76px) calc(40.94% - -1.81px),calc(93.3% - 8.66px) calc(25% - -5px),calc(74.75% - 4.95px) calc(25.25% - -4.95px),calc(75% - 5px) calc(6.7% - -8.66px),calc(59.06% - 1.81px) calc(16.19% - -6.76px),calc(50% - 0px) calc(0% - -10px),calc(40.94% - -1.81px) calc(16.19% - -6.76px),calc(25% - -5px) calc(6.7% - -8.66px),calc(25.25% - -4.95px) calc(25.25% - -4.95px),calc(6.7% - -8.66px) calc(25% - -5px),calc(16.19% - -6.76px) calc(40.94% - -1.81px),calc(0% - -10px) calc(50% - 0px),calc(16.19% - -6.76px) calc(59.06% - 1.81px),calc(6.7% - -8.66px) calc(75% - 5px),calc(25.25% - -4.95px) calc(74.75% - 4.95px),calc(25% - -5px) calc(93.3% - 8.66px),calc(40.94% - -1.81px) calc(83.81% - 6.76px),calc(50% - 0px) calc(100% - 10px),calc(59.06% - 1.81px) calc(83.81% - 6.76px),calc(75% - 5px) calc(93.3% - 8.66px),calc(74.75% - 4.95px) calc(74.75% - 4.95px),calc(93.3% - 8.66px) calc(75% - 5px),calc(83.81% - 6.76px) calc(59.06% - 1.81px),calc(100% - 10px) calc(50% - 0px))',
                        top: '70px',
                        left: '65px'
                      }}
                      animate={{ rotate: -360 }}
                      transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
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
                        background: 'repeating-linear-gradient(135deg, yellow, yellow 8px, transparent 8px, transparent 11px)',
                        filter: 'drop-shadow(-2px 3px 5px rgba(0,0,0,0.5))',
                        top: '-20px',
                        left: '-30px',
                      }}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 1 }}></Box>
                    {/* spikes */}
                    <Box
                      component={motion.div}
                      sx={{
                        position: 'absolute',
                        width: '50px',
                        height: '50px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'yellow',
                        clipPath: 'polygon(100% 50%,83.81% 59.06%,93.3% 75%,74.75% 74.75%,75% 93.3%,59.06% 83.81%,50% 100%,40.94% 83.81%,25% 93.3%,25.25% 74.75%,6.7% 75%,16.19% 59.06%,0% 50%,16.19% 40.94%,6.7% 25%,25.25% 25.25%,25% 6.7%,40.94% 16.19%,50% 0%,59.06% 16.19%,75% 6.7%,74.75% 25.25%,93.3% 25%,83.81% 40.94%,100% 50%,83.81% 59.06%,calc(83.81% - 6.76px) calc(59.06% - 1.81px),calc(100% - 10px) calc(50% - 0px),calc(83.81% - 6.76px) calc(40.94% - -1.81px),calc(93.3% - 8.66px) calc(25% - -5px),calc(74.75% - 4.95px) calc(25.25% - -4.95px),calc(75% - 5px) calc(6.7% - -8.66px),calc(59.06% - 1.81px) calc(16.19% - -6.76px),calc(50% - 0px) calc(0% - -10px),calc(40.94% - -1.81px) calc(16.19% - -6.76px),calc(25% - -5px) calc(6.7% - -8.66px),calc(25.25% - -4.95px) calc(25.25% - -4.95px),calc(6.7% - -8.66px) calc(25% - -5px),calc(16.19% - -6.76px) calc(40.94% - -1.81px),calc(0% - -10px) calc(50% - 0px),calc(16.19% - -6.76px) calc(59.06% - 1.81px),calc(6.7% - -8.66px) calc(75% - 5px),calc(25.25% - -4.95px) calc(74.75% - 4.95px),calc(25% - -5px) calc(93.3% - 8.66px),calc(40.94% - -1.81px) calc(83.81% - 6.76px),calc(50% - 0px) calc(100% - 10px),calc(59.06% - 1.81px) calc(83.81% - 6.76px),calc(75% - 5px) calc(93.3% - 8.66px),calc(74.75% - 4.95px) calc(74.75% - 4.95px),calc(93.3% - 8.66px) calc(75% - 5px),calc(83.81% - 6.76px) calc(59.06% - 1.81px),calc(100% - 10px) calc(50% - 0px))',
                        top: '0px',
                        left: '50px'
                      }}
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
                    >
                    </Box>
                    {/* stars long shadow */}
                    <Box
                      sx={{
                        position: 'absolute',
                        '& svg': {
                          filter: 'drop-shadow(-2px 3px 10px rgba(0,0,0,0.5))',
                        },
                        top: '80px',
                        left: '240px'
                      }}>
                      <div style={{ transform: 'scale(0.2) rotate(135deg)', width: '1px', height: '1px' }}>
                        <svg
                          width='200px'
                          height='700px'
                          fill={color}
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <rect x='0' y='80' width='100%' height='100%' fill={color} />
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
                            fill={color}
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <rect x='0' y='80' width='100%' height='100%' fill={color} />
                            <path d='M100 0.587l30.52 66.76L200 81.25l-50 48.5L161.92 200 100 165.83 38.08 200 50 129.75 0 81.25l69.44-13.29z' />
                            <path d='M100 0.587l30.52 66.76L200 81.25l-50 48.5L161.92 200 100 165.83 38.08 200 50 129.75 0 81.25l69.44-13.29z' transform='scale(0.7) translate(42.5, 47)' fill='white' />
                          </svg>
                        </div>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item>
                    <Box
                      component={motion.div}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 1 }}
                    >
                      <Button
                        onClick={() => {
                          handleToggle()
                          handleChangeColor()
                        }}
                        variant='contained'
                        sx={{
                          color: color,
                          border: '5px solid',
                          borderColor: color,
                          borderRadius: '10px',
                          backgroundColor: 'white',
                          '&:hover': {
                            backgroundColor: 'white',
                            borderColor: color,
                          },
                          '&:active': {
                            backgroundColor: 'white.main',
                            borderColor: color,
                          },
                        }}
                      >
                        <IconArrowBigRightLinesFilled />
                      </Button>
                    </Box>
                  </Grid>
                  {/* <Grid item>
                    <ReactAudioPlayer
                      src="/assets/music/sonic_gallery.weba"
                      autoPlay
                      controls
                      loop
                    />
                  </Grid> */}
                </Grid>
              </ZigzagContainer>
              {/* star long shadow */}
              <Box
                sx={{
                  position: 'absolute',
                  '& svg': {
                    filter: 'drop-shadow(-2px 3px 10px rgba(0,0,0,0.5))',
                  },
                  top: '120px',
                  left: '50px'
                }}>
                <div style={{ transform: 'scale(0.1) rotate(135deg)', width: '1px', height: '1px' }}>
                  <svg
                    width='200px'
                    height='1000px'
                    fill={color}
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <rect x='0' y='80' width='100%' height='100%' fill={color} />
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
                  backgroundColor: 'transparent',
                  border: `20px solid ${color}`,
                  filter: 'drop-shadow(-2px 3px 5px rgba(0,0,0,0.5))',
                  top: '-40px',
                  left: '90px'
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1 }}
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
                  backgroundColor: 'transparent',
                  border: `20px solid ${color}`,
                  filter: 'drop-shadow(-2px 3px 5px rgba(0,0,0,0.5))',
                  top: '35px',
                  left: '-60px'
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1 }}
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
            </Box>
          }
        </AppBar>
      </HideOnScroll>
    </>
  )
}

export default Navbar