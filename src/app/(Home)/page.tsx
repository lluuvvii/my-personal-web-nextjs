import { Box, Container, Grid } from '@mui/material'
import IntroductionCard from '../components/introduction/IntroductionCard'
import TechStackIconMenu from '../components/techStack/TechStackIconMenu'

const Home = () => {
  return (
    <Container sx={{ overflow: 'hidden' }}>
      <Box p={10}>
        <Grid container spacing={2} justifyContent='center'>
          <Grid item>
            <IntroductionCard />
          </Grid>
          <Grid item>
            <TechStackIconMenu />
          </Grid>
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