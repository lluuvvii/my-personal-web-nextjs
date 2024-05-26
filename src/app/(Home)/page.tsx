import { Box, Container, Typography, Button } from '@mui/material'
import Link from 'next/link'

const Home = () => {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to My Portfolio
        </Typography>
        <Link href="/stats" passHref>
          <Button variant="contained" color="primary">
            View GitHub Stats
          </Button>
        </Link>
      </Box>
    </Container>
  )
}

export default Home