'use client'

import React from 'react'
import ReactAudioPlayer from 'react-audio-player'

// interface AudioPlayerProps {
//   autoPlay?: boolean
//   controls?: boolean
//   loop?: boolean
// }

const AudioPlayer = () => {
  
  return (
    <>
      <ReactAudioPlayer
        src="/assets/music/sonic_gallery.weba"
        autoPlay={false}
        controls
        loop
        style={{ border: '5px solid red', borderRadius: '50px' }}
      />
    </>
  )
}

export default AudioPlayer