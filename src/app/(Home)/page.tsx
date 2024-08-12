import { Box, Container, Grid, Stack } from '@mui/material'
import GithubStats from '../components/stats/GithubStats'
import IntroductionCard from '../components/introduction/IntroductionCard'
import AskMeCard from '../components/questions/AskMeCard'

const Home = () => {
  return (
    <Container sx={{ overflow: 'hidden' }}>
      <Box pt={10} height='100vh'>
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