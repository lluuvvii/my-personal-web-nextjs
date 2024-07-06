import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import NextButton from './NextButton'

const IntroductionCard = () => {
  return (
    <Box
      sx={{
        padding: '10px',
        background: 'linear-gradient(100deg, #008cff, #007cff, blue)',
        borderRadius: '20px',
        filter: 'drop-shadow(-2px 3px 5px rgba(0,0,0,0.5))',
      }}>
      <Box sx={{ borderRadius: '10px', backgroundColor: 'white', padding: '10px' }}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography
              variant='body1'
              sx={{
                fontFamily: 'Nunito, Arial, sans-serif',
                fontWeight: 700,
                color: 'white',
                textShadow: '0px 2.5px 1px rgba(0,0,0,1), 0px -1px 1px rgba(0,0,0,1), 2px -0px 1px rgba(0,0,0,1), -2px 0px 1px rgba(0,0,0,1), 2px 2px 1px rgba(0,0,0,1), -2px 2px 1px rgba(0,0,0,1)'
              }}
            >
              YAYAYA
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