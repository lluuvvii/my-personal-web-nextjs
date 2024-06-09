'use client'

import ZigzagContainer from '@/app/components/materials/ZigzagContainer';
import { AppBar, Box, Button, Collapse, Container, Drawer, Grid, Slide, Stack, Typography, useScrollTrigger } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const HideOnScroll = ({ children }: any) => {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger} timeout={400}>
      {children}
    </Slide>
  );
};

const BackgroundContainer = () => {
  const [open, setOpen] = useState(false)
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
          <Box sx={{ width: '220px' }}>
            <Box sx={{ overflow: 'hidden', transform: 'translate(-15%, 0%)' }}>
              <Box sx={{ transform: 'rotate(3deg)', marginLeft: '-5%' }}>
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
      <HideOnScroll>
        <AppBar position="fixed" color="transparent" sx={{ boxShadow: 'none' }}>
          <Box sx={{ height: 100 }}>
            <Box sx={{ overflow: 'hidden', transform: 'translate(0%, -50%)' }}>
              <Box sx={{ transform: 'rotate(3deg)', marginBottom: '5%' }}>
                <ZigzagContainer width="100%" height="200px" color="blue">
                  <Grid container padding="50px" justifyContent="flex-end">
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
        </AppBar>
      </HideOnScroll>
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
          <Image src="/assets/img/sonic_generations_background_by_sonicguru_d66i4ax.png" alt="sonicbg" width={500} height={500} />
          <Image src="/assets/img/sonic_generations_background_by_sonicguru_d66i4ax.png" alt="sonicbg" width={500} height={500} />
          <Image src="/assets/img/sonic_generations_background_by_sonicguru_d66i4ax.png" alt="sonicbg" width={500} height={500} />
          <Image src="/assets/img/sonic_generations_background_by_sonicguru_d66i4ax.png" alt="sonicbg" width={500} height={500} />
          <Image src="/assets/img/sonic_generations_background_by_sonicguru_d66i4ax.png" alt="sonicbg" width={500} height={500} />
          <Image src="/assets/img/sonic_generations_background_by_sonicguru_d66i4ax.png" alt="sonicbg" width={500} height={500} />
          <Image src="/assets/img/sonic_generations_background_by_sonicguru_d66i4ax.png" alt="sonicbg" width={500} height={500} />
          <Image src="/assets/img/sonic_generations_background_by_sonicguru_d66i4ax.png" alt="sonicbg" width={500} height={500} />
        </Grid>
      </Grid>
      <Box component="footer">
        <ZigzagContainer width="100%" height="200px" color="yellow">
          {/* <Container maxWidth="lg">
            <Grid container spacing={4}>
              <Grid item xs={12} sm={4}>
                <Typography variant="h6" gutterBottom>
                  Company
                </Typography>
                <ul>
                  <li>
                    <Link href="#">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      Press
                    </Link>
                  </li>
                </ul>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="h6" gutterBottom>
                  Support
                </Typography>
                <ul>
                  <li>
                    <Link href="#">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="h6" gutterBottom>
                  Follow Us
                </Typography>
                <ul>
                  <li>
                    <Link href="#">
                      Facebook
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      Twitter
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      Instagram
                    </Link>
                  </li>
                </ul>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Typography variant="body2" color="text.secondary" align="center">
                {'© '}
                <Link color="inherit" href="https://yourwebsite.com/">
                  Your Website
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
              </Typography>
            </Box>
          </Container> */}
        </ZigzagContainer>
      </Box>
    </>
  );
};

export default BackgroundContainer;
