import { Box, Typography } from '@mui/material'
import React from 'react'
import ZigzagContainer from '../materials/ZigzagContainer'

const IntroBanner = () => {
  return (
    <Box sx={{ position: 'absolute', width: '100%', transform: 'rotate(-2deg)', mt: 10 }}>
      <ZigzagContainer width='100%' height='300px' color='yellow' toColor='#ffc800' toGradient='to right' top bottom />
      <Typography
        variant='h4'
        sx={{
          position: 'absolute',
          top: '-20px',
          left: '30px',
          textAlign: 'center',
          fontFamily: 'Nunito, Arial, sans-serif',
          fontWeight: 600,
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
        }}>
        Introduction
      </Typography>
    </Box>
  )
}

export default IntroBanner