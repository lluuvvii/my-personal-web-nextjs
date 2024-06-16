'use client'

import { motion } from 'framer-motion'
import HideOnScroll from '@/app/components/navbar/HideOnScroll'
import { AppBar, Box, Button, Grid } from '@mui/material'
import ZigzagContainer from '../materials/ZigzagContainer'
import { useState } from 'react'
import SideBar from '../sidebar/SideBar'
import { IconArrowBigRightLinesFilled } from '@tabler/icons-react'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <HideOnScroll>
      <AppBar position='fixed' color='transparent' sx={{ boxShadow: 'none' }}>
        <Box component='header'>
          <ZigzagContainer width='100%' height='100px' color='blue' bottom>
            <Grid container p={2}>
              <Grid item>
                {/* big Stars */}
                <Box
                  component={motion.div}
                  sx={{
                    position: 'absolute',
                    width: '200px',
                    height: '200px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'red',
                    clipPath: 'polygon(100% 50%,74.27% 67.63%,65.45% 97.55%,40.73% 78.53%,9.55% 79.39%,20% 50%,9.55% 20.61%,40.73% 21.47%,65.45% 2.45%,74.27% 32.37%,100% 50%,74.27% 67.63%,calc(74.27% - 24.27px) calc(67.63% - 17.63px),calc(100% - 50px) calc(50% - 0px),calc(74.27% - 24.27px) calc(32.37% - -17.63px),calc(65.45% - 15.45px) calc(2.45% - -47.55px),calc(40.73% - -9.27px) calc(21.47% - -28.53px),calc(9.55% - -40.45px) calc(20.61% - -29.39px),calc(20% - -30px) calc(50% - 0px),calc(9.55% - -40.45px) calc(79.39% - 29.39px),calc(40.73% - -9.27px) calc(78.53% - 28.53px),calc(65.45% - 15.45px) calc(97.55% - 47.55px),calc(74.27% - 24.27px) calc(67.63% - 17.63px),calc(100% - 50px) calc(50% - 0px))',
                    top: '-20px',
                    left: '100px'
                  }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 1 }}
                >
                </Box>
                <Box
                  component={motion.div}
                  sx={{
                    position: 'absolute',
                    width: '200px',
                    height: '200px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'red',
                    clipPath: 'polygon(100% 50%,74.27% 67.63%,65.45% 97.55%,40.73% 78.53%,9.55% 79.39%,20% 50%,9.55% 20.61%,40.73% 21.47%,65.45% 2.45%,74.27% 32.37%,100% 50%,74.27% 67.63%,calc(74.27% - 24.27px) calc(67.63% - 17.63px),calc(100% - 50px) calc(50% - 0px),calc(74.27% - 24.27px) calc(32.37% - -17.63px),calc(65.45% - 15.45px) calc(2.45% - -47.55px),calc(40.73% - -9.27px) calc(21.47% - -28.53px),calc(9.55% - -40.45px) calc(20.61% - -29.39px),calc(20% - -30px) calc(50% - 0px),calc(9.55% - -40.45px) calc(79.39% - 29.39px),calc(40.73% - -9.27px) calc(78.53% - 28.53px),calc(65.45% - 15.45px) calc(97.55% - 47.55px),calc(74.27% - 24.27px) calc(67.63% - 17.63px),calc(100% - 50px) calc(50% - 0px))',
                    top: '-20px',
                    left: '120px'
                  }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 1 }}
                >
                </Box>
                <Box
                  component={motion.div}
                  sx={{
                    position: 'absolute',
                    width: '200px',
                    height: '200px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    clipPath: 'polygon(100% 50%,74.27% 67.63%,65.45% 97.55%,40.73% 78.53%,9.55% 79.39%,20% 50%,9.55% 20.61%,40.73% 21.47%,65.45% 2.45%,74.27% 32.37%,100% 50%,74.27% 67.63%,calc(74.27% - 24.27px) calc(67.63% - 17.63px),calc(100% - 50px) calc(50% - 0px),calc(74.27% - 24.27px) calc(32.37% - -17.63px),calc(65.45% - 15.45px) calc(2.45% - -47.55px),calc(40.73% - -9.27px) calc(21.47% - -28.53px),calc(9.55% - -40.45px) calc(20.61% - -29.39px),calc(20% - -30px) calc(50% - 0px),calc(9.55% - -40.45px) calc(79.39% - 29.39px),calc(40.73% - -9.27px) calc(78.53% - 28.53px),calc(65.45% - 15.45px) calc(97.55% - 47.55px),calc(74.27% - 24.27px) calc(67.63% - 17.63px),calc(100% - 50px) calc(50% - 0px))',
                    top: '-20px',
                    left: '140px'
                  }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 1 }}
                >
                </Box>
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
                    clipPath: 'polygon(100% 50%,83.81% 59.06%,93.3% 75%,74.75% 74.75%,75% 93.3%,59.06% 83.81%,50% 100%,40.94% 83.81%,25% 93.3%,25.25% 74.75%,6.7% 75%,16.19% 59.06%,0% 50%,16.19% 40.94%,6.7% 25%,25.25% 25.25%,25% 6.7%,40.94% 16.19%,50% 0%,59.06% 16.19%,75% 6.7%,74.75% 25.25%,93.3% 25%,83.81% 40.94%)',
                    top: '70px',
                    left: '55px'
                  }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 1 }}
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
                    backgroundColor: 'white',
                    clipPath: 'polygon(100% 50%,83.81% 59.06%,93.3% 75%,74.75% 74.75%,75% 93.3%,59.06% 83.81%,50% 100%,40.94% 83.81%,25% 93.3%,25.25% 74.75%,6.7% 75%,16.19% 59.06%,0% 50%,16.19% 40.94%,6.7% 25%,25.25% 25.25%,25% 6.7%,40.94% 16.19%,50% 0%,59.06% 16.19%,75% 6.7%,74.75% 25.25%,93.3% 25%,83.81% 40.94%)',
                    top: '70px',
                    left: '65px'
                  }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 1 }}
                >
                </Box>
                {/* little stars */}
                <Box
                  component={motion.div}
                  sx={{
                    position: 'absolute',
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'yellow',
                    clipPath: 'polygon(100% 50%,74.27% 67.63%,65.45% 97.55%,40.73% 78.53%,9.55% 79.39%,20% 50%,9.55% 20.61%,40.73% 21.47%,65.45% 2.45%,74.27% 32.37%)',
                    top: '60px',
                    left: '10px'
                  }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 1 }}
                >
                </Box>
                <Box
                  component={motion.div}
                  sx={{
                    position: 'absolute',
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'red',
                    clipPath: 'polygon(100% 50%,74.27% 67.63%,65.45% 97.55%,40.73% 78.53%,9.55% 79.39%,20% 50%,9.55% 20.61%,40.73% 21.47%,65.45% 2.45%,74.27% 32.37%)',
                    top: '60px',
                    left: '20px'
                  }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 1 }}
                >
                </Box>
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
                    backgroundColor: 'red',
                    clipPath: 'polygon(100% 50%,83.81% 59.06%,93.3% 75%,74.75% 74.75%,75% 93.3%,59.06% 83.81%,50% 100%,40.94% 83.81%,25% 93.3%,25.25% 74.75%,6.7% 75%,16.19% 59.06%,0% 50%,16.19% 40.94%,6.7% 25%,25.25% 25.25%,25% 6.7%,40.94% 16.19%,50% 0%,59.06% 16.19%,75% 6.7%,74.75% 25.25%,93.3% 25%,83.81% 40.94%)',
                    top: '0px',
                    left: '40px'
                  }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 1 }}
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
                    backgroundColor: 'yellow',
                    clipPath: 'polygon(100% 50%,83.81% 59.06%,93.3% 75%,74.75% 74.75%,75% 93.3%,59.06% 83.81%,50% 100%,40.94% 83.81%,25% 93.3%,25.25% 74.75%,6.7% 75%,16.19% 59.06%,0% 50%,16.19% 40.94%,6.7% 25%,25.25% 25.25%,25% 6.7%,40.94% 16.19%,50% 0%,59.06% 16.19%,75% 6.7%,74.75% 25.25%,93.3% 25%,83.81% 40.94%)',
                    top: '0px',
                    left: '50px'
                  }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 1 }}
                >
                </Box>
                {/* triangles */}
                <Box
                  component={motion.div}
                  sx={{
                    position: 'absolute',
                    width: '50px',
                    height: '50px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    clipPath: 'polygon(100% 50%,25% 93.3%,25% 6.7%)',
                    bottom: '-15px',
                    left: '120px'
                  }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 1 }}
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
                    backgroundColor: 'yellow',
                    clipPath: 'polygon(100% 50%,25% 93.3%,25% 6.7%)',
                    bottom: '-15px',
                    left: '130px'
                  }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 1 }}
                >
                </Box>
              </Grid>
              <Grid item>
                <SideBar open={open} setOpen={setOpen} />
              </Grid>
              <Grid item>
                <Box
                  component={motion.div}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 1 }}
                >
                  <Button
                    onClick={() => setOpen(!open)}
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
              </Grid>
            </Grid>
          </ZigzagContainer>
          {/* <Box
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
              top: '50px',
              left: '-20px'
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
          </Box> */}
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
              border: '20px solid white',
              filter: 'drop-shadow(-2px 3px 5px rgba(0,0,0,0.5))',
              top: '20px',
              left: '-65px'
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
                border: '5px solid red'
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
                border: '5px solid red'
              }}
            >
            </Box>
          </Box>
          {/* <Box
            component={motion.div}
            sx={{
              position: 'absolute',
              width: '70px',
              height: '70px',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'blue',
              filter: 'drop-shadow(-2px 3px 5px rgba(0,0,0,0.5))',
              top: '40px',
              left: '40%'
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1 }}
          >
            <Box
              component={motion.div}
              sx={{
                width: '60px',
                height: '60px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '50%',
                backgroundColor: 'yellow',
              }}
            >
              <Box
                component={motion.div}
                sx={{
                  width: '50px',
                  height: '50px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '50%',
                  backgroundColor: 'blue',
                }}
              >
                <Box
                  component={motion.div}
                  sx={{
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '50%',
                    backgroundColor: 'yellow',
                    filter: 'drop-shadow(-2px 3px 5px rgba(0,0,0,0.5))'
                  }}
                >
                </Box>
              </Box>
            </Box>
          </Box> */}
        </Box>
      </AppBar>
    </HideOnScroll>
  )
}

export default Navbar