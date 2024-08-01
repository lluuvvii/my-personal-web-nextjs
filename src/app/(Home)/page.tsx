import { Box, Container, Grid, Stack } from '@mui/material'
import GithubStats from '../components/stats/GithubStats'
import IntroductionCard from '../components/introduction/IntroductionCard'
import AskMeCard from '../components/questions/AskMeCard'

const Home = () => {
  return (
    <Container sx={{ overflow: 'hidden' }}>
      <Box mt={20}>
        <Grid container spacing={2} justifyContent='center'>
          <Grid item>
            <Stack direction='column' spacing={2}>
              <IntroductionCard />
              <AskMeCard />
            </Stack>
          </Grid>
          <Grid item>
            <IntroductionCard />
          </Grid>
          <Grid item>
            <IntroductionCard />
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