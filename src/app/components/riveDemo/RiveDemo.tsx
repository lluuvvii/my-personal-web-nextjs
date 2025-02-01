'use client'

import { useRive, Layout, Fit, Alignment } from '@rive-app/react-canvas'

const RiveDemo = () => {
  const { RiveComponent } = useRive({
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
  })

  return (
    <div style={{ width: '100%', height: '800px' }}>
      <RiveComponent />
    </div>
  )
}

export default RiveDemo