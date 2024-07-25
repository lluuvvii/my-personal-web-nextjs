import { Box, Container, Grid, Typography } from '@mui/material'
import GithubStats from '../components/stats/GithubStats'
import IntroductionCard from '../components/introduction/IntroductionCard'
import IntroBanner from '../components/introduction/IntroBanner'
import AskMeModal from '../components/introduction/AskMeModal'

const Home = () => {
  return (
    <Container sx={{ overflow: 'hidden' }}>
      <Box mt={20}>
        <Grid container spacing={3} justifyContent='center'>
          {/* <Grid item xs={12}>
            <IntroBanner />
          </Grid> */}
          <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
            <IntroductionCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
            <IntroductionCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
            <IntroductionCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
            <IntroductionCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
            <IntroductionCard />
          </Grid>
          <Grid item>
            <AskMeModal />
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