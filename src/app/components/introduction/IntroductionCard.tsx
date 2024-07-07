import React from 'react'
import { Box } from '@mui/material'
import IntroCardContents from './IntroCardContents'

const IntroductionCard = () => {
  return (
    <Box
      sx={{
        padding: '10px',
        background: 'linear-gradient(100deg, yellow, #ffc800)',
        borderRadius: '20px',
        filter: 'drop-shadow(-2px 2px 2px rgba(0,0,0,0.5))',
      }}>
      <Box sx={{ borderRadius: '10px', backgroundColor: 'white', padding: '10px', boxShadow: 'inset 0px 0px 5px rgba(0, 0, 0, 0.5)' }}>
        <IntroCardContents />
      </Box>
    </Box>
  )
}

export default IntroductionCard