import { Box, Typography } from '@mui/material'
import React from 'react'

const AskMeModal = () => {
  return (
    <>
      <Box sx={{ position: 'relative' }}>
        <Typography
          variant='h6'
          ml={1}
          sx={{
            textAlign: 'center',
            fontFamily: 'Nunito, Arial, sans-serif',
            fontWeight: 700,
            color: 'yellow',
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
          Ask Me?
        </Typography>
      </Box>
    </>
  )
}

export default AskMeModal