'use client'

import { Card, CardContent, CardMedia, Typography, Box, Grid, Container, CircularProgress } from '@mui/material'
import Link from 'next/link'
import useGithubStats from 'react-github-user-stats'

const GithubStats = () => {
  const { userData: user }: any = useGithubStats("lluuvvii")

  return (
    <>
      {!user ?
        <Container>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <CircularProgress />
            <Typography variant="h6" component="div" sx={{ ml: 2 }}>
              Loading data...
            </Typography>
          </Box>
        </Container>
        :
        <Card sx={{ maxWidth: 600, margin: 'auto', mt: 4 }}>
          <CardMedia
            component="img"
            alt={user.name}
            height="140"
            image={user.avatar_url}
          />
          <CardContent>
            <Typography variant="h5" component="div">
              {user.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              @{user.username}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Location: {user.location}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Public Repos: {user.public_repos}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Followers: {user.followers}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Following: {user.following}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Stars: {user.total_stars}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Forks: {user.total_forks}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Link href={user.url} target="_blank" rel="noopener noreferrer">
                GitHub Profile
              </Link>
            </Typography>
          </CardContent>
        </Card >
      }
    </>
  )
}

export default GithubStats