import { Box, Drawer, Grid, Slide, Typography } from '@mui/material'
import React from 'react'
import ZigzagContainer from '../materials/ZigzagContainer'

const SideBar = ({ open, setOpen }: any) => {
  return (
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
          <ZigzagContainer width='200px' height='100vh' color='yellow' toColor='#ffe100' toGradient='180deg' right>
            <Grid container padding='50px'>
              <Grid item>
                <Typography>Hallo</Typography>
                <Typography>Hallo</Typography>
              </Grid>
            </Grid>
          </ZigzagContainer>
        </Box>
      </Slide>
    </Drawer>
  )
}

export default SideBar