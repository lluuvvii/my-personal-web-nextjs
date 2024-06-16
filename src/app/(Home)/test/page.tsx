'use client'

import ZigzagContainer from '@/app/components/materials/ZigzagContainer'
import { AppBar, Box, Button, Drawer, Grid, Slide, Stack, Typography, useScrollTrigger } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Star from '@/app/components/materials/Star'

interface Props {
  window?: () => Window
  children: React.ReactElement
}

const HideOnScroll: React.FC<Props> = (props) => {
  const { children, window } = props
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  })

  return (
    <Slide appear={false} direction='down' in={!trigger} timeout={400}>
      {children}
    </Slide>
  )
}

const BackgroundContainer: React.FC<Props> = (props) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <HideOnScroll {...props}>
        <AppBar position='fixed' color='transparent' sx={{ boxShadow: 'none' }}>
          <Box component='header'>
            <ZigzagContainer width='100%' height='100px' color='blue' bottom>
              <Grid container p={2}>
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
      <Drawer
        anchor='left'
        open={open}
        onClose={() => setOpen(!open)}
        sx={{
          '& .MuiPaper-root': {
            backgroundColor: 'transparent',
            boxShadow: 'none',
          },
        }}>
        <Slide in={open} direction='right' timeout={400}>
          <Box sx={{ width: '220px' }}>
            <ZigzagContainer width='200px' height='100vh' color='red' right>
              <Grid container padding='50px'>
                <Grid item>
                  <Typography color='white'>Hallo</Typography>
                  <Typography color='white'>Hallo</Typography>
                </Grid>
              </Grid>
            </ZigzagContainer>
          </Box>
        </Slide>
      </Drawer>
      <Grid container spacing={1} alignItems='center' justifyContent='center' sx={{ mt: 12 }}>
        {/* <Grid item>
          <ZigzagContainer width='800px' height='500px' color='black'>
            <Box sx={{ transform: 'translate(0%, 10%)', position: 'absolute' }}>
              <ZigzagContainer width='200px' height='400px'>
                <Slide in={open} direction='right' timeout={400}>
                  <Box sx={{ transform: 'translate(0%, 10%)', position: 'absolute' }}>
                    <ZigzagContainer width='200px' height='400px' color='red' />
                  </Box>
                </Slide>
              </ZigzagContainer>
            </Box>
            <Slide in={open} direction='down' timeout={400}>
              <Box sx={{ transform: 'translate(0%, 0%)', position: 'absolute' }}>
                <ZigzagContainer width='800px' height='100px' color='blue' />
              </Box>
            </Slide>
            <Box sx={{ transform: 'translate(0%, 150%)' }}>
              <ZigzagContainer width='800px' height='200px'>
                <Slide in={open} direction='up' timeout={400}>
                  <Box sx={{ transform: 'translate(0%, 0%)', position: 'absolute' }}>
                    <ZigzagContainer width='800px' height='200px' color='yellow' />
                  </Box>
                </Slide>
              </ZigzagContainer>
            </Box>
          </ZigzagContainer>
        </Grid> */}
        <Grid item>
          <Typography variant='overline'>Reference : Sonic Generations UI theme</Typography>
        </Grid>
        <Grid item>
          <Image src='/assets/img/sonic_generations_background_by_sonicguru_d66i4ax.png' alt='sonicbg' width={500} height={500} />
          <Image src='/assets/img/sonic_generations_background_by_sonicguru_d66i4ax.png' alt='sonicbg' width={500} height={500} />
          <Image src='/assets/img/sonic_generations_background_by_sonicguru_d66i4ax.png' alt='sonicbg' width={500} height={500} />
          <Image src='/assets/img/sonic_generations_background_by_sonicguru_d66i4ax.png' alt='sonicbg' width={500} height={500} />
          <Image src='/assets/img/sonic_generations_background_by_sonicguru_d66i4ax.png' alt='sonicbg' width={500} height={500} />
          <Image src='/assets/img/sonic_generations_background_by_sonicguru_d66i4ax.png' alt='sonicbg' width={500} height={500} />
          <Image src='/assets/img/sonic_generations_background_by_sonicguru_d66i4ax.png' alt='sonicbg' width={500} height={500} />
        </Grid>
      </Grid>
      <Box component='footer' mt={4}>
        <ZigzagContainer width='100%' height='200px' color='yellow' top>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Stack direction='row' alignItems='center' justifyContent='space-around'>
                <Stack direction='column' alignItems='center'>
                  <Typography variant='h6' gutterBottom>
                    Company
                  </Typography>
                  <Link href='#'>
                    About Us
                  </Link>
                  <Link href='#'>
                    Careers
                  </Link>
                  <Link href='#'>
                    Press
                  </Link>
                </Stack>
                <Stack direction='column' alignItems='center'>
                  <Typography variant='h6' gutterBottom>
                    Support
                  </Typography>
                  <Link href='#'>
                    Contact Us
                  </Link>
                  <Link href='#'>
                    Help Center
                  </Link>
                  <Link href='#'>
                    Privacy Policy
                  </Link>
                </Stack>
                <Stack direction='column' alignItems='center'>
                  <Typography variant='h6' gutterBottom>
                    Follow Us
                  </Typography>
                  <Link href='#'>
                    Facebook
                  </Link>
                  <Link href='#'>
                    Twitter
                  </Link>
                  <Link href='#'>
                    Instagram
                  </Link>
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Box>
                <Typography variant='body2' color='text.secondary' align='center'>
                  {'© '}
                  <Link color='inherit' href='https://yourwebsite.com/'>
                    Your Website
                  </Link>{' '}
                  {new Date().getFullYear()}
                  {'.'}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </ZigzagContainer>
      </Box>
    </>
  )
}

export default BackgroundContainer
