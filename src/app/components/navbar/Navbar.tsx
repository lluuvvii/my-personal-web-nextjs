'use client'

import { motion } from 'framer-motion'
import Star from '@/app/components/materials/Star'
import HideOnScroll from '@/app/components/navbar/HideOnScroll'
import { AppBar, Box, Button, Grid } from '@mui/material'
import ZigzagContainer from '../materials/ZigzagContainer'
import { useState } from 'react'
import SideBar from '../sidebar/SideBar'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <HideOnScroll>
      <AppBar position='fixed' color='transparent' sx={{ boxShadow: 'none' }}>
        <Box component='header'>
          <ZigzagContainer width='100%' height='100px' color='blue' bottom>
            <Grid container p={2}>
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
                    Show
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </ZigzagContainer>
          <Box
            component={motion.div}
            sx={{
              position: 'relative',
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'red',
              filter: 'drop-shadow(-2px 3px 5px rgba(0,0,0,0.5))',
              top: '-70px',
              left: '-60px'
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1 }}
          >
            <Box
              component={motion.div}
              sx={{
                width: '90px',
                height: '90px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '50%',
                backgroundColor: 'white',
              }}
            >
              <Box
                component={motion.div}
                sx={{
                  width: '80px',
                  height: '80px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '50%',
                  backgroundColor: 'red',
                }}
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
                    backgroundColor: 'white',
                  }}
                >
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            component={motion.div}
            sx={{
              position: 'relative',
              width: '70px',
              height: '70px',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'blue',
              filter: 'drop-shadow(-2px 3px 5px rgba(0,0,0,0.5))',
              top: '-150px',
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
                  }}
                >
                </Box>
              </Box>
            </Box>
          </Box>
          <Star width={100} height={100} color='white' />
        </Box>
      </AppBar>
    </HideOnScroll>
  )
}

export default Navbar