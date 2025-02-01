'use client'

import { Box } from '@mui/material'
import { useRive, Layout, Fit, Alignment } from '@rive-app/react-canvas'

const RiveDemo = () => {
  const { RiveComponent: DumbWays } = useRive({
    // Load a local riv `clean_the_car.riv` or upload your own!
    src: 'eletrical_wire_-_dumb_ways_to_die.riv',
    // Be sure to specify the correct state machine (or animation) name
    stateMachines: 'Game Machine',
    // This is optional.Provides additional layout control.
    layout: new Layout({
      fit: Fit.FitWidth, // Change to: rive.Fit.Contain, or Cover
      alignment: Alignment.Center,
    }),
    autoplay: true,
    isTouchScrollEnabled: true
  })

  const { RiveComponent: IsoToy } = useRive({
    src: 'iso_toy_001.riv',
    stateMachines: 'State Machine 1',
    layout: new Layout({
      fit: Fit.FitWidth,
      alignment: Alignment.Center,
    }),
    autoplay: true,
    isTouchScrollEnabled: true
  })

  return (
    <Box>
      <Box sx={{ p: '10px', width: '100%', height: { xs: '200px', sm: '420px', md: '640px', lg: '860px', xl: '1080px' } }}>
        <DumbWays />
      </Box>
      <Box sx={{ p: '10px', width: '100%', height: { xs: '200px', sm: '420px', md: '640px', lg: '860px', xl: '1080px' } }}>
        <IsoToy />
      </Box>
    </Box>
  )
}

export default RiveDemo