import { Box, Container } from '@mui/material'
import { ReactNode } from 'react'
import GithubStats from '../components/stats/GithubStats'

const Home = ({ children }: { children: ReactNode }) => {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <GithubStats />
      </Box>
    </Container>
  )
}

export default Home