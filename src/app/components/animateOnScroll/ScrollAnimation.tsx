'use client'

// components/ScrollAnimation.tsx
import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView, useMotionValueEvent, useScroll } from 'framer-motion'
import { Box } from '@mui/material'

interface ScrollAnimationProps {
  children: React.ReactNode
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ children }) => {
  // const ref = useRef(null)
  // const controls = useAnimation()
  // const isInView = useInView(ref)
  const { scrollY, scrollYProgress } = useScroll()

  // useMotionValueEvent(scrollY, "change", (latest) => {
  //   console.log("Page scroll: ", latest)
  // })

  // useEffect(() => {
  //   window.addEventListener('scroll', () => console.log(window.scrollY))
  // }, [])

  // useEffect(() => {
  //   if (isInView) {
  //     controls.start('visible')
  //   } else {
  //     controls.start('hidden')
  //   }
  // }, [controls, isInView])

  // const variants = {
  //   hidden: { opacity: 0, x: -400 },
  //   visible: {
  //     opacity: 1,
  //     x: 0,
  //     transition: {
  //       type: 'spring',
  //       stiffness: 600,
  //       damping: 35,
  //     }
  //   },
  // }

  return (
    <Box component={motion.div} style={{ scale: scrollYProgress }} /* initial="hidden" animate={controls} variants={variants} */>
      {children}
    </Box>
  )
}

export default ScrollAnimation
