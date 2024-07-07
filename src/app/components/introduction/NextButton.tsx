'use client'

import { Button, Stack, Typography, Box, Slide } from '@mui/material'
import { IconCaretLeftFilled, IconCaretRightFilled } from '@tabler/icons-react'
import { motion } from 'framer-motion'
import { useState, useRef } from 'react'

const NextButton = () => {
  const [dialogVal, setDialogVal] = useState(0)
  const [dialogDelay, setDialogDelay] = useState(0)
  const containerRef = useRef<HTMLElement>(null)

  return (
    <Box>
      {dialogVal === 0 ?
        <Box ref={containerRef} sx={{ height: '100px', overflow: 'scroll' }}>
          <Slide direction='right' in={dialogVal === 0} container={containerRef.current}>
            <Box>
              <Typography
                variant='h5'
                sx={{
                  textAlign: 'center',
                  fontFamily: 'Nunito, Arial, sans-serif',
                  fontWeight: 700,
                  color: 'white',
                  textShadow: `
              0px 1.5px 3px rgba(0,0,0,1), 
              0px 1.5px 3px rgba(0,0,0,1), 
              0px 1.5px 3px rgba(0,0,0,1), 
              0px 1.5px 3px rgba(0,0,0,1), 
              0px 1.5px 3px rgba(0,0,0,1), 
              0px 1.5px 3px rgba(0,0,0,1), 
              0px 1.5px 3px rgba(0,0,0,1), 
              0px 1.5px 3px rgba(0,0,0,1), 
              0px 1.5px 3px rgba(0,0,0,1), 
              0px 1.5px 3px rgba(0,0,0,1), 
              0px 1.5px 3px rgba(0,0,0,1), 
              0px 1.5px 3px rgba(0,0,0,1), 
              0px 1.5px 3px rgba(0,0,0,1), 
              0px 1.5px 3px rgba(0,0,0,1), 
              0px 1.5px 3px rgba(0,0,0,1), 
              0px 1.5px 3px rgba(0,0,0,1)`
                }}
              >
                Hi, My name is
              </Typography>
              <Typography
                variant='h5'
                ml={1}
                mb={2}
                sx={{
                  textAlign: 'center',
                  fontFamily: 'Nunito, Arial, sans-serif',
                  fontWeight: 700,
                  color: 'yellow',
                  textShadow: `
              0px 1.5px 3px rgba(0,0,200,1), 
              0px 1.5px 3px rgba(0,0,200,1), 
              0px 1.5px 3px rgba(0,0,200,1), 
              0px 1.5px 3px rgba(0,0,200,1), 
              0px 1.5px 3px rgba(0,0,200,1), 
              0px 1.5px 3px rgba(0,0,200,1), 
              0px 1.5px 3px rgba(0,0,200,1), 
              0px 1.5px 3px rgba(0,0,200,1), 
              0px 1.5px 3px rgba(0,0,200,1), 
              0px 1.5px 3px rgba(0,0,200,1), 
              0px 1.5px 3px rgba(0,0,200,1), 
              0px 1.5px 3px rgba(0,0,200,1), 
              0px 1.5px 3px rgba(0,0,200,1), 
              0px 1.5px 3px rgba(0,0,200,1), 
              0px 1.5px 3px rgba(0,0,200,1), 
              0px 1.5px 3px rgba(0,0,200,1)`
                }}
              >
                I LOVE SHOLLAKHUDDIN KURNIAWAN
              </Typography>
              <Typography
                variant='body1'
                sx={{
                  fontFamily: 'Nunito, Arial, sans-serif',
                  fontWeight: 700,
                }}>
                I&apos;m a fullstack web developer passionate about getting to the software engineer level, I&apos;m from indonesia and currently pursuing a degree in computer engineering and dedicating my time to gaining knowledge that I will apply in the future.
              </Typography>
            </Box>
          </Slide>
        </Box>
        : null}
      {dialogVal === 1 ?
        <Box ref={containerRef} sx={{ height: '100px', overflow: 'scroll' }}>
          <Slide direction='right' in={dialogVal === 1} container={containerRef.current}>
            <Box>
              <Typography
                variant='body1'
                sx={{
                  fontFamily: 'Nunito, Arial, sans-serif',
                  fontWeight: 700,
                }}
              >
                I have been studying web development since 2023 and continue to explore it until now, at that time I also tried to learn consistently and balance mentally by playing games or other hobbies
              </Typography>
            </Box>
          </Slide>
        </Box>
        : null}
      {dialogVal === 2 ?
        <Box ref={containerRef} sx={{ height: '100px', overflow: 'scroll' }}>
          <Slide direction='right' in={dialogVal === 2} container={containerRef.current}>
            <Box>
              <Typography
                variant='body1'
                sx={{
                  fontFamily: 'Nunito, Arial, sans-serif',
                  fontWeight: 700,
                }}
              >
                On this personal website, I created it because I wanted to express how I can pour out the creativity, knowledge, logic, and innovation that is in my mind, Enjoy !!
              </Typography>
            </Box>
          </Slide>
        </Box>
        : null}
      <Stack direction='row' justifyContent='space-between'>
        <Box
          component={motion.div}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1 }}
          initial={{ scale: 0 }}
          animate={{ scale: dialogVal > 0 ? 1 : 0 }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 20
          }}>
          <Button
            onClick={() => {
              if (dialogVal > 0) {
                setDialogVal(dialogVal - 1)
              }
            }}
            size='small'
            sx={{
              color: 'grey',
              borderRadius: '10px',
              backgroundColor: 'transparent',
              '&:active': {
                color: 'transparent'
              },
              '&:hover': {
                backgroundColor: 'transparent',
                color: 'transparent'
              }
            }}>
            <IconCaretLeftFilled color='blue' />
            <Typography
              variant='h6'
              sx={{
                fontFamily: 'Nunito, Arial, sans-serif',
                fontWeight: 700,
                color: 'yellow',
                textShadow: `
              0px 1.5px 2px rgba(0,0,0,1), 
              0px 1.5px 2px rgba(0,0,0,1), 
              0px 1.5px 2px rgba(0,0,0,1), 
              0px 1.5px 2px rgba(0,0,0,1), 
              0px 1.5px 2px rgba(0,0,0,1), 
              0px 1.5px 2px rgba(0,0,0,1), 
              0px 1.5px 2px rgba(0,0,0,1), 
              0px 1.5px 2px rgba(0,0,0,1), 
              0px 1.5px 2px rgba(0,0,0,1), 
              0px 1.5px 2px rgba(0,0,0,1), 
              0px 1.5px 2px rgba(0,0,0,1), 
              0px 1.5px 2px rgba(0,0,0,1), 
              0px 1.5px 2px rgba(0,0,0,1), 
              0px 1.5px 2px rgba(0,0,0,1), 
              0px 1.5px 2px rgba(0,0,0,1), 
              0px 1.5px 2px rgba(0,0,0,1)`
              }}
            >
              PREV
            </Typography>
          </Button>
        </Box>
        <Box
          component={motion.div}
          whileHover={{ scale: 1.1 }}
          initial={{ scale: 0 }}
          whileTap={{ scale: 1 }}
          animate={{ scale: dialogVal < 2 ? 1 : 0 }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 20
          }}>
          <Button
            onClick={() => {
              if (dialogVal < 2) {
                setDialogVal(dialogVal + 1)
              }
            }}
            size='small'
            sx={{
              color: 'grey',
              borderRadius: '10px',
              backgroundColor: 'transparent',
              '&:active': {
                color: 'transparent'
              },
              '&:hover': {
                backgroundColor: 'transparent',
                color: 'transparent'
              }
            }}>
            <Typography
              variant='h6'
              sx={{
                fontFamily: 'Nunito, Arial, sans-serif',
                fontWeight: 700,
                color: 'yellow',
                textShadow: `
              0px 1.5px 2px rgba(0,0,0,1), 
              0px 1.5px 2px rgba(0,0,0,1), 
              0px 1.5px 2px rgba(0,0,0,1), 
              0px 1.5px 2px rgba(0,0,0,1), 
              0px 1.5px 2px rgba(0,0,0,1), 
              0px 1.5px 2px rgba(0,0,0,1), 
              0px 1.5px 2px rgba(0,0,0,1), 
              0px 1.5px 2px rgba(0,0,0,1), 
              0px 1.5px 2px rgba(0,0,0,1), 
              0px 1.5px 2px rgba(0,0,0,1), 
              0px 1.5px 2px rgba(0,0,0,1), 
              0px 1.5px 2px rgba(0,0,0,1), 
              0px 1.5px 2px rgba(0,0,0,1), 
              0px 1.5px 2px rgba(0,0,0,1), 
              0px 1.5px 2px rgba(0,0,0,1), 
              0px 1.5px 2px rgba(0,0,0,1)`
              }}
            >
              Next
            </Typography>
            <IconCaretRightFilled color='blue' />
          </Button>
        </Box>
      </Stack>
    </Box>
  )
}

export default NextButton