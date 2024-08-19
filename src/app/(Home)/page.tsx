import { Box, Container, Grid } from '@mui/material'
import IntroductionCard from '../components/introduction/IntroductionCard'
import TechStackIconMenu from '../components/techStack/TechStackIconMenu'

const Home = () => {
  return (
    <Container sx={{ overflow: 'hidden' }}>
      <Box p={10}>
        {/* background */}
        <Box sx={{
          position: 'fixed',
          width: '100%',
          height: '100vh',
          top: 0,
          left: 0,
          background: 'linear-gradient(-15deg, black 50px, #d10000 50px, #d10000 70px, black 70px, black 150px, #d10000 150px, #d10000 400px, white 400px, white 600px, #d10000 600px, #d10000 760px, black 760px, black 780px, #d10000 780px, #d10000 800px, black 800px)',
        }} />
        <Grid container spacing={2} justifyContent='center'>
          <Grid item>
            <IntroductionCard />
          </Grid>
          {/* <Grid item>
            <TechStackIconMenu />
          </Grid> */}
          {/* <Grid item>
            <IntroductionCard />
          </Grid>
          <Grid item>
            <IntroductionCard />
          </Grid>
          <Grid item>
            <IntroductionCard />
          </Grid>
          <Grid item>
            <IntroductionCard />
          </Grid>
          <Grid item>
            <IntroductionCard />
          </Grid>
          <Grid item>
            <IntroductionCard />
          </Grid>
          <Grid item>
            <IntroductionCard />
          </Grid>
          <Grid item>
            <IntroductionCard />
          </Grid> */}
        </Grid>
      </Box>
    </Container>
  )
}

export default Home