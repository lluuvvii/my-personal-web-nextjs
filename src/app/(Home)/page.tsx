import { Box, Container, Grid, Typography } from '@mui/material'
import GithubStats from '../components/stats/GithubStats'
import IntroductionCard from '../components/introduction/IntroductionCard'

const Home = () => {
  return (
    <Container sx={{ mt: 30 }}>
      <Box>
        <Grid container spacing={3} justifyContent='center'>
          <Grid item xs={12} sm={10} md={8} lg={6} xl={4}>
            <IntroductionCard />
          </Grid>
          <Grid item>
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
          </Grid>
          <Grid item xs={12}>
            <GithubStats />
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default Home