'use client'

import { Box, Button, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import React from 'react'

function IntroNew() {
  return (
    <Box sx={{
      backgroundColor: 'white', height: '100vh', width: '100vw', position: { xs: 'absolute', md: 'relative' },
      zIndex: { xs: -1 }
    }}>
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        textAlign='center'
        minHeight='100vh'
        px={2}
      >
        <Typography variant='h2' fontWeight='bold' gutterBottom>
          Halo, I&apos;m <span style={{ color: '#888' }}>Your Name</span>
        </Typography>
        <Typography variant='h6' maxWidth='600px' gutterBottom>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt placeat, sint fuga sequi quas eius dicta ut necessitatibus eum doloribus voluptatibus similique tempore sed quae explicabo in tenetur adipisci delectus.
        </Typography>
        <Button
          variant='outlined'
          sx={{
            mt: 4,
            borderColor: '#fff',
            color: '#fff',
            '&:hover': {
              borderColor: '#888',
              color: '#888',
            },
          }}
          component={motion.a}
          href='#'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Lihat Portofolio
        </Button>
      </Box>
    </Box>
  )
}

export default IntroNew