'use client'

import React from 'react'
import ReactAudioPlayer from 'react-audio-player'

const AudioPlayer = () => {
  return (
    <>
      <ReactAudioPlayer
        src="/assets/music/sonic_gallery.weba"
        autoPlay={false}
        controls
        loop
      />
    </>
  )
}

export default AudioPlayer