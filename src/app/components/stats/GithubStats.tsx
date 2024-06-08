'use client'

import { useState } from 'react'
import { Card, CardContent, CardMedia, Typography, Box, FormControl, InputLabel, Select, MenuItem, CardActions, LinearProgress, Grid } from '@mui/material'
import Link from 'next/link'
import useGithubStats from 'react-github-user-stats'
import GitHubCalendar from 'react-github-calendar'

const GithubStats = () => {
  const { userData: user }: any = useGithubStats('lluuvvii')
  const currentYear = new Date().getFullYear()
  const [year, setYear] = useState<string>(currentYear.toString())

  const handleChange = (event: any) => {
    setYear(event.target.value as string)
  }

  const [items, setItems] = useState(['halo', 'test', 'js', 'react'])

  return (
    <Grid container spacing={2}>
      <Grid item>
        <Card sx={{ maxWidth: 600, margin: 'auto' }} variant='outlined'>
          {user ? <CardMedia component="img" alt={user.name} image={user.avatar_url} sx={{ height: 140 }} /> : null}
          <CardContent>
            {!user ?
              <Box sx={{ width: '100%', mb: 2 }}>
                <LinearProgress />
              </Box>
              :
              <>
                <Typography variant="h5" component="div">
                  {user.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  @{user.username}
                </Typography>
                <Box sx={{ mb: 2 }}>
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
                </Box>
                <CardActions>
                  <Link href={user.url} target="_blank" rel="noopener noreferrer">
                    GitHub Profile
                  </Link>
                </CardActions>
              </>
            }
            <Card variant='outlined'>
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  GitHub Contributions
                </Typography>
                <FormControl fullWidth variant="outlined" margin="normal" size='small'>
                  <InputLabel id="year-select-label">Year</InputLabel>
                  <Select
                    labelId="year-select-label"
                    id="year-select"
                    value={year}
                    onChange={handleChange}
                    label="Year"
                  >
                    {Array.from({ length: currentYear - 2022 + 1 }, (_, i) => currentYear - i).map(yearOption => (
                      <MenuItem key={yearOption} value={yearOption.toString()}>
                        {yearOption}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <GitHubCalendar username='lluuvvii' colorScheme="light" year={parseInt(year)} />
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
      </Grid>
    </Grid>
  )
}

export default GithubStats