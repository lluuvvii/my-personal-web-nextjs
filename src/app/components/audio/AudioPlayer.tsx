'use client'

import React, { useEffect, useRef, useState } from 'react'
import ReactAudioPlayer from 'react-audio-player'

interface AudioPlayerProps {
  autoPlay?: boolean
  controls?: boolean
  loop?: boolean
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ autoPlay = false, controls = false, loop = true }) => {
  const audioRef = useRef<ReactAudioPlayer | null>(null)
  const [fadeOutInterval, setFadeOutInterval] = useState<number | null>(null)
  const [fadeInInterval, setFadeInInterval] = useState<number | null>(null)

  useEffect(() => {
    const audioElement = audioRef.current?.audioEl.current
    if (audioElement) {
      if (autoPlay) {
        fadeInAndPlay(audioElement)
      } else {
        fadeOutAndPause(audioElement)
      }
    }

    return () => {
      if (fadeOutInterval) {
        clearInterval(fadeOutInterval)
      }
      if (fadeInInterval) {
        clearInterval(fadeInInterval)
      }
    }
  }, [autoPlay])

  const fadeOutAndPause = (audioElement: HTMLAudioElement) => {
    if (fadeInInterval) {
      clearInterval(fadeInInterval)
      setFadeInInterval(null)
    }
    let volume = audioElement.volume
    const fadeOut = setInterval(() => {
      if (!autoPlay && volume > 0.1) {
        volume -= 0.1
        audioElement.volume = volume
      } else {
        audioElement.volume = 0
        clearInterval(fadeOut)
        audioElement.pause()
        audioElement.volume = 1 // Reset volume for next play
        setFadeOutInterval(null)
      }
    }, 40) // Adjust the interval for smoother or faster fade out
    setFadeOutInterval(null)
  }

  const fadeInAndPlay = (audioElement: HTMLAudioElement) => {
    if (fadeOutInterval) {
      clearInterval(fadeOutInterval)
      setFadeOutInterval(null)
    }
    audioElement.volume = 0 // Start from volume 0
    audioElement.play()
    let volume = 0
    const fadeIn = setInterval(() => {
      if (autoPlay && volume < 0.9) {
        volume += 0.1
        audioElement.volume = volume
      } else {
        audioElement.volume = 1
        clearInterval(fadeIn)
        setFadeInInterval(null)
      }
    }, 40) // Adjust the interval for smoother or faster fade in
    setFadeInInterval(null)
  }

  return (
    <>
      <ReactAudioPlayer
        src="/assets/music/sonic_gallery.weba"
        ref={audioRef}
        autoPlay={autoPlay}
        controls={controls}
        loop={loop}
        style={{ border: '5px solid red', borderRadius: '50px' }}
      />
    </>
  )
}

export default AudioPlayer