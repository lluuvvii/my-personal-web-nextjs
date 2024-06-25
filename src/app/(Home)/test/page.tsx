import ZigzagContainer from '@/app/components/materials/ZigzagContainer'
import { Box, Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AudioPlayer from '@/app/components/audio/AudioPlayer'

const BackgroundContainer = () => {
  return (
    <>
      <Grid container spacing={1} alignItems='center' justifyContent='center'>
        <Grid item>
          <Typography variant='overline'>Reference : Sonic Generations UI theme</Typography>
          <AudioPlayer />
        </Grid>
        <Grid item>
          <Image src='/assets/img/sonic_generations_background_by_sonicguru_d66i4ax.png' alt='sonicbg' width={500} height={500} />
          <Image src='/assets/img/sonic_generations_background_by_sonicguru_d66i4ax.png' alt='sonicbg' width={500} height={500} />
          <Image src='/assets/img/sonic_generations_background_by_sonicguru_d66i4ax.png' alt='sonicbg' width={500} height={500} />
          <Image src='/assets/img/sonic_generations_background_by_sonicguru_d66i4ax.png' alt='sonicbg' width={500} height={500} />
          <Image src='/assets/img/sonic_generations_background_by_sonicguru_d66i4ax.png' alt='sonicbg' width={500} height={500} />
          <Image src='/assets/img/sonic_generations_background_by_sonicguru_d66i4ax.png' alt='sonicbg' width={500} height={500} />
          <Image src='/assets/img/sonic_generations_background_by_sonicguru_d66i4ax.png' alt='sonicbg' width={500} height={500} />
        </Grid>
      </Grid>
      <Box component='footer' mt={4}>
        <ZigzagContainer width='100%' height='200px' color='yellow' top>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Stack direction='row' alignItems='center' justifyContent='space-around'>
                <Stack direction='column' alignItems='center'>
                  <Typography variant='h6' gutterBottom>
                    Company
                  </Typography>
                  <Link href='#'>
                    About Us
                  </Link>
                  <Link href='#'>
                    Careers
                  </Link>
                  <Link href='#'>
                    Press
                  </Link>
                </Stack>
                <Stack direction='column' alignItems='center'>
                  <Typography variant='h6' gutterBottom>
                    Support
                  </Typography>
                  <Link href='#'>
                    Contact Us
                  </Link>
                  <Link href='#'>
                    Help Center
                  </Link>
                  <Link href='#'>
                    Privacy Policy
                  </Link>
                </Stack>
                <Stack direction='column' alignItems='center'>
                  <Typography variant='h6' gutterBottom>
                    Follow Us
                  </Typography>
                  <Link href='#'>
                    Facebook
                  </Link>
                  <Link href='#'>
                    Twitter
                  </Link>
                  <Link href='#'>
                    Instagram
                  </Link>
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Box>
                <Typography variant='body2' color='text.secondary' align='center'>
                  {'© '}
                  <Link color='inherit' href='https://yourwebsite.com/'>
                    Your Website
                  </Link>{' '}
                  {new Date().getFullYear()}
                  {'.'}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </ZigzagContainer>
      </Box>
    </>
  )
}

export default BackgroundContainer
