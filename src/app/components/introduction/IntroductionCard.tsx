import React from 'react'
import { Box, Grid, Stack, Typography } from '@mui/material'
import NextButton from './NextButton'

const IntroductionCard = () => {
  return (
    <Box
      sx={{
        padding: '10px',
        background: 'linear-gradient(100deg, yellow, #ffc800)',
        borderRadius: '20px',
        filter: 'drop-shadow(-2px 3px 5px rgba(0,0,0,0.5))',
      }}>
      <Box sx={{ borderRadius: '10px', backgroundColor: 'white', padding: '10px', boxShadow: 'inset 0px 0px 5px rgba(0, 0, 0, 0.5)' }}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography
              variant='h5'
              sx={{
                textAlign: 'center',
                fontFamily: 'Nunito, Arial, sans-serif',
                fontWeight: 700,
                color: 'white',
                textShadow: `
              0px 1.5px 3px rgba(0,0,0,1), 
              0px 1.5px 3px rgba(0,0,0,1), 
              0px 1.5px 3px rgba(0,0,0,1), 
              0px 1.5px 3px rgba(0,0,0,1), 
              0px 1.5px 3px rgba(0,0,0,1), 
              0px 1.5px 3px rgba(0,0,0,1), 
              0px 1.5px 3px rgba(0,0,0,1), 
              0px 1.5px 3px rgba(0,0,0,1), 
              0px 1.5px 3px rgba(0,0,0,1), 
              0px 1.5px 3px rgba(0,0,0,1), 
              0px 1.5px 3px rgba(0,0,0,1), 
              0px 1.5px 3px rgba(0,0,0,1), 
              0px 1.5px 3px rgba(0,0,0,1), 
              0px 1.5px 3px rgba(0,0,0,1), 
              0px 1.5px 3px rgba(0,0,0,1), 
              0px 1.5px 3px rgba(0,0,0,1)`
              }}
            >
              Hi, My name is
            </Typography>
            <Typography
              variant='h5'
              ml={1}
              mb={2}
              sx={{
                textAlign: 'center',
                fontFamily: 'Nunito, Arial, sans-serif',
                fontWeight: 700,
                color: 'yellow',
                textShadow: `
              0px 1.5px 3px rgba(0,0,200,1), 
              0px 1.5px 3px rgba(0,0,200,1), 
              0px 1.5px 3px rgba(0,0,200,1), 
              0px 1.5px 3px rgba(0,0,200,1), 
              0px 1.5px 3px rgba(0,0,200,1), 
              0px 1.5px 3px rgba(0,0,200,1), 
              0px 1.5px 3px rgba(0,0,200,1), 
              0px 1.5px 3px rgba(0,0,200,1), 
              0px 1.5px 3px rgba(0,0,200,1), 
              0px 1.5px 3px rgba(0,0,200,1), 
              0px 1.5px 3px rgba(0,0,200,1), 
              0px 1.5px 3px rgba(0,0,200,1), 
              0px 1.5px 3px rgba(0,0,200,1), 
              0px 1.5px 3px rgba(0,0,200,1), 
              0px 1.5px 3px rgba(0,0,200,1), 
              0px 1.5px 3px rgba(0,0,200,1)`
              }}
            >
              I LOVE SHOLLAKHUDDIN KURNIAWAN
            </Typography>
            <Typography
              variant='body1'
              sx={{
                fontFamily: 'Nunito, Arial, sans-serif',
                fontWeight: 700,
              }}
            >
              I&apos;m a fullstack web developer passionate about getting to the software engineer level, I&apos;m currently pursuing a degree in computer engineering and dedicating my time to gaining knowledge that I will apply in the future.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <NextButton />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default IntroductionCard