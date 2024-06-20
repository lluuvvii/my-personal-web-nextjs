'use client'

import { motion } from 'framer-motion'
import HideOnScroll from '@/app/components/navbar/HideOnScroll'
import { AppBar, Box, Button, Grid, Slide, useScrollTrigger } from '@mui/material'
import ZigzagContainer from '../materials/ZigzagContainer'
import { useMemo, useState } from 'react'
import SideBar from '../sidebar/SideBar'
import { IconArrowBigRightLinesFilled } from '@tabler/icons-react'

interface Props {
  window?: () => Window | undefined
}

const Navbar = ({ window }: Props) => {
  const [open, setOpen] = useState(false)

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  })

  const handleToggle = useMemo(() => () => setOpen((prevOpen) => !prevOpen), [])

  return (
    <HideOnScroll>
      <AppBar position='fixed' color='transparent' sx={{ boxShadow: 'none' }}>
        <Box component='header'>
          <Slide direction='right' appear={true} in={!open && !trigger} timeout={300}>
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
            >
            </Box>
          </Slide>
          <Slide direction='right' appear={true} in={!open && !trigger} timeout={400}>
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
          </Slide>
          <ZigzagContainer width='100%' height='100px' color='blue' toColor='#008cff' toGradient='50deg' bottom>
            <Grid container p={2}>
              <Grid item>
                {/* spikes */}
                <Slide direction='right' appear={true} in={!open && !trigger} timeout={400}>
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
                </Slide>
                <Slide direction='right' appear={true} in={!open && !trigger} timeout={300}>
                  <Box
                    component={motion.div}
                    sx={{
                      position: 'absolute',
                      width: '50px',
                      height: '50px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: 'blue',
                      clipPath: 'polygon(100% 50%,83.81% 59.06%,93.3% 75%,74.75% 74.75%,75% 93.3%,59.06% 83.81%,50% 100%,40.94% 83.81%,25% 93.3%,25.25% 74.75%,6.7% 75%,16.19% 59.06%,0% 50%,16.19% 40.94%,6.7% 25%,25.25% 25.25%,25% 6.7%,40.94% 16.19%,50% 0%,59.06% 16.19%,75% 6.7%,74.75% 25.25%,93.3% 25%,83.81% 40.94%,100% 50%,83.81% 59.06%,calc(83.81% - 6.76px) calc(59.06% - 1.81px),calc(100% - 10px) calc(50% - 0px),calc(83.81% - 6.76px) calc(40.94% - -1.81px),calc(93.3% - 8.66px) calc(25% - -5px),calc(74.75% - 4.95px) calc(25.25% - -4.95px),calc(75% - 5px) calc(6.7% - -8.66px),calc(59.06% - 1.81px) calc(16.19% - -6.76px),calc(50% - 0px) calc(0% - -10px),calc(40.94% - -1.81px) calc(16.19% - -6.76px),calc(25% - -5px) calc(6.7% - -8.66px),calc(25.25% - -4.95px) calc(25.25% - -4.95px),calc(6.7% - -8.66px) calc(25% - -5px),calc(16.19% - -6.76px) calc(40.94% - -1.81px),calc(0% - -10px) calc(50% - 0px),calc(16.19% - -6.76px) calc(59.06% - 1.81px),calc(6.7% - -8.66px) calc(75% - 5px),calc(25.25% - -4.95px) calc(74.75% - 4.95px),calc(25% - -5px) calc(93.3% - 8.66px),calc(40.94% - -1.81px) calc(83.81% - 6.76px),calc(50% - 0px) calc(100% - 10px),calc(59.06% - 1.81px) calc(83.81% - 6.76px),calc(75% - 5px) calc(93.3% - 8.66px),calc(74.75% - 4.95px) calc(74.75% - 4.95px),calc(93.3% - 8.66px) calc(75% - 5px),calc(83.81% - 6.76px) calc(59.06% - 1.81px),calc(100% - 10px) calc(50% - 0px))',
                      top: '70px',
                      left: '65px'
                    }}
                    animate={{ rotate: -360 }}
                    transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
                  >
                  </Box>
                </Slide>
                {/* striped circle */}
                <Slide direction='right' appear={true} in={!open && !trigger} timeout={400}>
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
                    whileTap={{ scale: 1 }}
                  ></Box>
                </Slide>
                {/* little stars */}
                <Slide direction='right' appear={true} in={!open && !trigger} timeout={300}>
                  <Box
                    component={motion.div}
                    sx={{
                      position: 'absolute',
                      width: '30px',
                      height: '30px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: 'blue',
                      clipPath: 'polygon(100% 50%,74.27% 67.63%,65.45% 97.55%,40.73% 78.53%,9.55% 79.39%,20% 50%,9.55% 20.61%,40.73% 21.47%,65.45% 2.45%,74.27% 32.37%)',
                      top: '0px',
                      left: '5px'
                    }}
                  >
                  </Box>
                </Slide>
                <Slide direction='right' appear={true} in={!open && !trigger} timeout={300}>
                  <Box
                    component={motion.div}
                    sx={{
                      position: 'absolute',
                      width: '15px',
                      height: '15px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: 'blue',
                      clipPath: 'polygon(100% 50%,74.27% 67.63%,65.45% 97.55%,40.73% 78.53%,9.55% 79.39%,20% 50%,9.55% 20.61%,40.73% 21.47%,65.45% 2.45%,74.27% 32.37%)',
                      top: '0px',
                      left: '30px'
                    }}
                  >
                  </Box>
                </Slide>
                {/* spikes */}
                <Slide direction='right' appear={true} in={!open && !trigger} timeout={350}>
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
                </Slide>
              </Grid>
              <Grid item>
                <SideBar open={open} setOpen={handleToggle} />
              </Grid>
              <Grid item>
                <Slide direction='right' appear={true} in={!open && !trigger} timeout={300}>
                  <Box
                    component={motion.div}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 1 }}
                  >
                    <Button
                      onClick={handleToggle}
                      variant='contained'
                      sx={{
                        color: 'error.main',
                        border: '5px solid',
                        borderColor: 'error.main',
                        borderRadius: '10px',
                        backgroundColor: 'white',
                        '&:hover': {
                          backgroundColor: 'white',
                          borderColor: 'error.main',
                        },
                        '&:active': {
                          backgroundColor: 'white.main',
                          borderColor: 'error.main',
                        },
                      }}
                    >
                      <IconArrowBigRightLinesFilled />
                    </Button>
                  </Box>
                </Slide>
              </Grid>
            </Grid>
          </ZigzagContainer>
          {/* stars long shadow */}
          <Slide direction='down' appear={true} in={!open && !trigger} timeout={300}>
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
                  width="200px"
                  height="700px"
                  fill="blue"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="0" y="80" width="100%" height="100%" fill="blue" />
                  <path d="M100 0.587l30.52 66.76L200 81.25l-50 48.5L161.92 200 100 165.83 38.08 200 50 129.75 0 81.25l69.44-13.29z" />
                  <path d="M100 0.587l30.52 66.76L200 81.25l-50 48.5L161.92 200 100 165.83 38.08 200 50 129.75 0 81.25l69.44-13.29z" transform='scale(0.7) translate(42.5, 47)' fill='white' />
                </svg>
              </div>
            </Box>
          </Slide>
          <Slide direction='down' appear={true} in={!open && !trigger} timeout={300}>
            <Box
              sx={{
                position: 'absolute',
                '& svg': {
                  filter: 'drop-shadow(-2px 3px 10px rgba(0,0,0,0.5))',
                },
                top: '75px',
                left: '195px'
              }}>
              <div style={{ transform: 'scale(0.1) rotate(135deg)', width: '1px', height: '1px' }}>
                <svg
                  width="200px"
                  height="1000px"
                  fill="blue"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="0" y="80" width="100%" height="100%" fill="blue" />
                  <path d="M100 0.587l30.52 66.76L200 81.25l-50 48.5L161.92 200 100 165.83 38.08 200 50 129.75 0 81.25l69.44-13.29z" />
                  <path d="M100 0.587l30.52 66.76L200 81.25l-50 48.5L161.92 200 100 165.83 38.08 200 50 129.75 0 81.25l69.44-13.29z" transform='scale(0.7) translate(42.5, 47)' fill='white' />
                </svg>
              </div>
            </Box>
          </Slide>
          <Slide direction='down' appear={true} in={!open && !trigger} timeout={300}>
            <Box
              sx={{
                position: 'absolute',
                '& svg': {
                  filter: 'drop-shadow(-2px 3px 10px rgba(0,0,0,0.5))',
                },
                top: '120px',
                left: '45px'
              }}>
              <div style={{ transform: 'scale(0.1) rotate(135deg)', width: '1px', height: '1px' }}>
                <svg
                  width="200px"
                  height="1000px"
                  fill="blue"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="0" y="80" width="100%" height="100%" fill="blue" />
                  <path d="M100 0.587l30.52 66.76L200 81.25l-50 48.5L161.92 200 100 165.83 38.08 200 50 129.75 0 81.25l69.44-13.29z" />
                  <path d="M100 0.587l30.52 66.76L200 81.25l-50 48.5L161.92 200 100 165.83 38.08 200 50 129.75 0 81.25l69.44-13.29z" transform='scale(0.7) translate(42.5, 47)' fill='white' />
                </svg>
              </div>
            </Box>
          </Slide>
          <Slide direction='down' appear={true} in={!open && !trigger} timeout={200}>
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
                  border: '5px solid blue'
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
                  border: '5px solid blue'
                }}
              >
              </Box>
            </Box>
          </Slide>
          <Slide direction='down' appear={true} in={!open && !trigger} timeout={200}>
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
                border: '20px solid blue',
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
          </Slide>
        </Box>
      </AppBar>
    </HideOnScroll >
  )
}

export default Navbar