import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'

const IntroductionCard = () => {
  return (
    <Card variant='outlined'>
      <CardContent>
        <Typography
          variant='h5'
          sx={{
            fontFamily: 'Nunito, Arial, sans-serif',
            fontWeight: 700,
            color: 'white',
            textShadow: '0px 3px 1px rgba(0,0,0,1), 0px -1px 1px rgba(0,0,0,1), 2px -0px 1px rgba(0,0,0,1), -2px 0px 1px rgba(0,0,0,1), 2px 2px 1px rgba(0,0,0,1), -2px 2px 1px rgba(0,0,0,1)'
          }}
        >
          YAYAYA
        </Typography>
      </CardContent>
    </Card>
  )
}

export default IntroductionCard