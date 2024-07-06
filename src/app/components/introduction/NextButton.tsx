'use client'

import { Button, Stack, Typography, Box } from '@mui/material'
import { IconCaretRightFilled } from '@tabler/icons-react'
import { motion } from 'framer-motion'
import React from 'react'

const NextButton = () => {
  return (
    <Stack direction='column' alignItems='flex-end'>
      <Box
        component={motion.div}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 20
        }}>
        <Button
          size='small'
          sx={{
            color: 'grey',
            borderRadius: '10px',
            backgroundColor: 'transparent',
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
            sx={{
              fontFamily: 'Nunito, Arial, sans-serif',
              fontWeight: 700,
              color: 'yellow',
              textShadow: '0px 2.5px 1px rgba(0,0,0,1), 0px -1px 1px rgba(0,0,0,1), 2px -0px 1px rgba(0,0,0,1), -2px 0px 1px rgba(0,0,0,1), 2px 2px 1px rgba(0,0,0,1), -2px 2px 1px rgba(0,0,0,1)'
            }}
          >
            Next
          </Typography>
          <IconCaretRightFilled color='blue' />
        </Button>
      </Box>
    </Stack >
  )
}

export default NextButton