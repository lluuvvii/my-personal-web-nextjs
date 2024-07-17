'use client'

import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { motion } from 'framer-motion'

const AskMeModal = () => {
  return (
    <Box sx={{ position: 'relative' }}>
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