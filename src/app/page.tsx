'use client'

import { Box, Container } from '@mui/material'
import GithubStats from './components/stats/GithubStats'

const Home = () => {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <GithubStats />
      </Box>
    </Container>
  )
}

export default Home