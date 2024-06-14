'use client'

import ZigzagContainer from '@/app/components/materials/ZigzagContainer';
import { AppBar, Box, Button, Collapse, Container, Drawer, Grid, List, ListItem, ListItemText, Slide, Stack, Toolbar, Typography, useScrollTrigger } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

const HideOnScroll = (props: Props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger} timeout={400}>
      {children}
    </Slide>
  );
};

const BackgroundContainer = (props: Props) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <HideOnScroll {...props}>
        <AppBar position="fixed" color="transparent" sx={{ boxShadow: 'none' }}>
          <Box>
            <ZigzagContainer width="100%" height="100px" color="blue" bottom>
              <Grid container padding="25px" justifyContent="flex-end">
                <Grid item>
                  <Stack direction="column" spacing={2}>
                    <Typography color="white">Hallo</Typography>
                  </Stack>
                </Grid>
              </Grid>
            </ZigzagContainer>
          </Box>
        </AppBar>
      </HideOnScroll>
      <Drawer
        anchor="left"
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
              <Box sx={{ marginLeft: '-5%' }}>
                <ZigzagContainer width="200px" height="100vh" color="red" right>
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
      <Grid container spacing={1} alignItems="center" justifyContent="center" sx={{ mt: 12 }}>
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
          <Box
            component={motion.div}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1 }}
          >
            <Button
              // onClick={() => setOpen(!open)}
              variant='contained'
              sx={{
                color: 'error.main',
                border: '5px solid',
                borderColor: 'error.main',
                borderRadius: '10px',
                backgroundColor: 'white',
                '&:hover': {
                  backgroundColor: 'secondary.main',
                  borderColor: 'error.main',
                },
                '&:active': {
                  backgroundColor: 'secondary.main',
                  borderColor: 'error.main',
                },
              }}
            >
              Show
            </Button>
          </Box>
        </Grid>
        <Grid item>
          <Box
            component={motion.div}
            sx={{
              position: 'relative',
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'red',
              filter: 'drop-shadow(-2px 3px 5px rgba(0,0,0,0.5))'
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1 }}
          >
            <Box
              component={motion.div}
              sx={{
                position: 'relative',
                width: '90px',
                height: '90px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '50%',
                backgroundColor: 'white',
              }}
            >
              <Box
                component={motion.div}
                sx={{
                  position: 'relative',
                  width: '80px',
                  height: '80px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '50%',
                  backgroundColor: 'red',
                }}
              >
                <Box
                  component={motion.div}
                  sx={{
                    position: 'relative',
                    width: '60px',
                    height: '60px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '50%',
                    backgroundColor: 'white',
                  }}
                >
                </Box>
              </Box>
            </Box>
          </Box>
          {/* <Box
            sx={{
              position: 'relative',
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'red',
            }}
          >
            <Box
              sx={{
                position: 'relative',
                width: '90px',
                height: '90px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '50%',
                backgroundColor: 'white',
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: '80px',
                  height: '80px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '50%',
                  backgroundColor: 'red',
                }}
              >
              </Box>
            </Box>
          </Box> */}
        </Grid>
        <Grid item>
          <Typography variant='overline' sx={{ fontSize: 20 }}>Reference : Sonic Generations UI theme</Typography>
        </Grid>
        <Grid item>
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
        <ZigzagContainer width="100%" height="500px" color="yellow" top>
          <Grid container spacing={4} justifyContent='center' alignItems='center'>
            <Grid item xs={12} sm={4}>
              <Stack direction='column' alignItems='center'>
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
              </Stack>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Stack direction='column' alignItems='center'>
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
              </Stack>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Stack direction='column' alignItems='center'>
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
              </Stack>
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
        </ZigzagContainer>
      </Box>
    </>
  );
};

export default BackgroundContainer;
