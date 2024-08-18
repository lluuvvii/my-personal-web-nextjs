import { Box, Container, Grid, Stack } from '@mui/material'
import GithubStats from '../components/stats/GithubStats'
import IntroductionCard from '../components/introduction/IntroductionCard'
import AskMeCard from '../components/questions/AskMeCard'
import ScrollAnimation from '../components/animateOnScroll/ScrollAnimation'

const Home = () => {
  return (
    <Container sx={{ overflow: 'hidden', height: '100vh' }}>
      <Box p={10}>
        <Grid container spacing={2} justifyContent='center'>
          <Grid item>
            <IntroductionCard />
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default Home