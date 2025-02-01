'use client'

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
  })

  const { RiveComponent: IsoToy } = useRive({
    src: 'iso_toy_001.riv',
    stateMachines: 'State Machine 1',
    layout: new Layout({
      fit: Fit.FitWidth,
      alignment: Alignment.Center,
    }),
    autoplay: true,
  })

  return (
    <div>
      <div style={{ width: '100%', height: '800px' }}>
        <DumbWays />
      </div>
      <div style={{ width: '100%', height: '800px' }}>
        <IsoToy />
      </div>
    </div>
  )
}

export default RiveDemo