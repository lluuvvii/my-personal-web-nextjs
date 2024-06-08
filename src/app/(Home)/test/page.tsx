'use client'

import ZigzagContainer from '@/app/components/materials/ZigzagContainer';
import { AppBar, Box, Button, Collapse, Drawer, Grid, Slide, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const BackgroundContainer = () => {
  const [open, setOpen] = useState(false)
  const [defaultWidth, setDefaultWidth] = useState('100px');
  const [defaultHeight, setDefaultHeight] = useState('100px');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setDefaultWidth(`${window.innerWidth}px`);
        setDefaultHeight(`${window.innerHeight}px`);
      };

      handleResize(); // Set default size on mount
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);
  return (
    <>
      <Drawer
        open={open}
        onClose={() => setOpen(!open)}
        sx={{
          '& .MuiPaper-root': {
            backgroundColor: 'transparent', // Set your desired transparency
            boxShadow: 'none',
          },
        }}>
        <Slide in={open} direction="right" timeout={400}>
          <Box sx={{ height: '100vh', width: '220px' }}>
            <Box sx={{ overflow: 'hidden', transform: 'translate(-15%, 0%)' }}>
              <Box sx={{ transform: 'rotate(3deg)' }}>
                <ZigzagContainer width="200px" height="100vh" color="red">
                  <Grid container padding="50px">
                    <Grid item>
                      <Stack direction="column" spacing={2}>
                        <Typography color="white">Hallo</Typography>
                        <Typography color="white">Hallo</Typography>
                        <Typography color="white">Hallo</Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </ZigzagContainer>
              </Box>
            </Box>
          </Box>
        </Slide>
      </Drawer>
      <AppBar position="static" color="transparent" sx={{ boxShadow: 'none' }}>
        <Slide in={open} direction="down" timeout={400}>
          <Box sx={{ height: 100 }}>
            <Box sx={{ overflow: 'hidden', transform: 'translate(0%, -50%)' }}>
              <Box sx={{ transform: 'rotate(-3deg)', marginBottom: '5%' }}>
                <ZigzagContainer width="100%" height="200px" color="blue" />
              </Box>
            </Box>
          </Box>
        </Slide>
      </AppBar>
      <Grid container spacing={1} alignItems="center" justifyContent="center">
        {/* <Grid item>
          <ZigzagContainer width="800px" height="500px" color="black">
            <Box sx={{ transform: 'translate(0%, 10%)', position: 'absolute' }}>
              <ZigzagContainer width="200px" height="400px">
                <Slide in={open} direction="right" timeout={400}>
                  <Box sx={{ transform: 'translate(0%, 10%)', position: 'absolute' }}>
                    <ZigzagContainer width="200px" height="400px" color="red" />
                  </Box>
                </Slide>
              </ZigzagContainer>
            </Box>
            <Slide in={open} direction="down" timeout={400}>
              <Box sx={{ transform: 'translate(0%, 0%)', position: 'absolute' }}>
                <ZigzagContainer width="800px" height="100px" color="blue" />
              </Box>
            </Slide>
            <Box sx={{ transform: 'translate(0%, 150%)' }}>
              <ZigzagContainer width="800px" height="200px">
                <Slide in={open} direction="up" timeout={400}>
                  <Box sx={{ transform: 'translate(0%, 0%)', position: 'absolute' }}>
                    <ZigzagContainer width="800px" height="200px" color="yellow" />
                  </Box>
                </Slide>
              </ZigzagContainer>
            </Box>
          </ZigzagContainer>
        </Grid> */}
        <Grid item>
          <Button onClick={() => setOpen(!open)} variant='contained'>Show</Button>
        </Grid>
        <Grid item>
          <Typography variant='overline' sx={{ fontSize: 20 }}>Reference : Sonic Generations UI theme</Typography>
          <Image src="/assets/img/sonic_generations_background_by_sonicguru_d66i4ax.png" alt="sonicbg" width={500} height={500} />
        </Grid>
      </Grid>
    </>
  );
};

export default BackgroundContainer;
