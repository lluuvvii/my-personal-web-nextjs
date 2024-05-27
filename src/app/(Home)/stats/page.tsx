'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardMedia, Typography, Box, Grid, Container, CircularProgress, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import Link from 'next/link'
import useGithubStats from 'react-github-user-stats'
import GitHubCalendar from 'react-github-calendar'

type GitHubCalendarComponentProps = {
  username: string;
};

const GithubStats = () => {
  const { userData: user }: any = useGithubStats("lluuvvii")
  const currentYear = new Date().getFullYear()
  const [year, setYear] = useState<string>(currentYear.toString())
  const [val, setVal] = useState([])

  const getData = async () => {
    const response = await fetch('https://github-contributions-api.jogruber.de/v4/lluuvvii')

    const data = await response.json()

    setVal(data)
  }

  useEffect(() => {
    getData()
  }, [])

  const handleChange = (event: any) => {
    setYear(event.target.value as string)
  }

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
            <Card>
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  GitHub Contributions
                </Typography>
                <FormControl fullWidth variant="outlined" margin="normal">
                  <InputLabel id="year-select-label">Year</InputLabel>
                  <Select
                    labelId="year-select-label"
                    id="year-select"
                    value={year}
                    onChange={handleChange}
                    label="Year"
                  >
                    {Array.from({ length: 5 }, (_, i) => currentYear - i).map(yearOption => (
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
      }
    </>
  )
}

export default GithubStats