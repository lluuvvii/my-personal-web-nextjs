'use client'

import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { motion } from 'framer-motion'

const AskMeModal = () => {
  return (
    <Box sx={{ position: 'relative' }}>
      {/* circle */}
      <Box
        sx={{
          position: 'absolute',
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'black',
          top: '0px',
          left: '5px',
        }}
      >
      </Box>
      <Box
        sx={{
          position: 'absolute',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'black',
          top: '0px',
          left: '25px',
        }}
      >
      </Box>
      <Box
        sx={{
          position: 'absolute',
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'red',
          top: '5px',
          left: '50px',
        }}
      >
      </Box>
      <Box
        sx={{
          position: 'absolute',
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'transparent',
          border: '3px solid red',
          top: '15px',
          left: '75px',
        }}
      >
      </Box>
      {/* striped circle */}
      <Box
        sx={{
          position: 'absolute',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'repeating-linear-gradient(45deg, yellow, yellow, 4px, transparent 4px, transparent 7px)',
          filter: 'drop-shadow(-2px 2px 2px rgba(0,0,0,0.5))',
          top: '5px',
          left: '-10px',
        }}>
      </Box>
      {/* spike */}
      <Box
        sx={{
          position: 'absolute',
          width: '40px',
          height: '40px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'red',
          clipPath: 'polygon(100% 50%,83.81% 59.06%,93.3% 75%,74.75% 74.75%,75% 93.3%,59.06% 83.81%,50% 100%,40.94% 83.81%,25% 93.3%,25.25% 74.75%,6.7% 75%,16.19% 59.06%,0% 50%,16.19% 40.94%,6.7% 25%,25.25% 25.25%,25% 6.7%,40.94% 16.19%,50% 0%,59.06% 16.19%,75% 6.7%,74.75% 25.25%,93.3% 25%,83.81% 40.94%)',
          top: '10px',
          left: '0px'
        }}
      >
      </Box>
      <Box
        component={motion.div}
        whileHover={{ scale: 1.1 }}
        initial={{ scale: 0 }}
        whileTap={{ scale: 1 }}
        animate={{ scale: 1 }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 20
        }}>
        <Button
          onClick={() => { }}
          size='small'
          sx={{
            color: 'grey',
            borderRadius: '10px',
            backgroundColor: 'transparent',
            textTransform: 'none',
            '&:active': {
              color: 'transparent'
            },
            '&:hover': {
              backgroundColor: 'transparent',
              color: 'transparent'
            }
          }}>
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
        </Button>
      </Box>
    </Box>
  )
}

export default AskMeModal