import { Box, Container, Grid } from '@mui/material'
import IntroductionCard from '../components/introduction/IntroductionCard'
// import TechSkillsCard from '../components/techStack/TechSkillsCard'

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
          // background: 'linear-gradient(-15deg, black 6%, #d10000 6%, #d10000 8%, black 8%, black 17%, #d10000 17%, #d10000 42%, white 42%, white 50%, #d10000 50%, #d10000 85%, black 85%, black 87%, #d10000 87%, #d10000 90%, black 90%)',
          backgroundColor: 'rgba(200, 0, 0, 1)'
        }} />
        <Grid container spacing={2} rowSpacing={3} justifyContent='center'>
          <Grid item>
            <IntroductionCard />
          </Grid>
          {/* <Grid item>
            <TechSkillsCard />
          </Grid> */}
        </Grid>
      </Box>
    </Container>
  )
}

export default Home