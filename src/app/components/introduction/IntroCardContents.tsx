'use client'

import { Button, Stack, Typography, Box, Slide } from '@mui/material'
import { IconCaretLeftFilled, IconCaretRightFilled } from '@tabler/icons-react'
import { motion } from 'framer-motion'
import { useState, useRef } from 'react'

const IntroCardContents = () => {
  const [dialogVal, setDialogVal] = useState(0)
  const containerRef = useRef<HTMLElement>(null)

  return (
    <Box>
      {dialogVal === 0 ?
        <Box ref={containerRef} sx={{ height: '260px', overflow: 'auto', px: 1 }}>
          <Slide direction='right' in={dialogVal === 0} container={containerRef.current}>
            <Box>
              <Typography
                variant='h4'
                sx={{
                  position: 'relative',
                  textAlign: 'center',
                  fontFamily: 'Nunito, Arial, sans-serif',
                  fontWeight: 700,
                  color: 'red',
                  //     textShadow: `
                  // 0px 1.5px 4px rgba(0,0,0,1), 
                  // 0px 1.5px 4px rgba(0,0,0,1), 
                  // 0px 1.5px 4px rgba(0,0,0,1), 
                  // 0px 1.5px 4px rgba(0,0,0,1), 
                  // 0px 1.5px 4px rgba(0,0,0,1), 
                  // 0px 1.5px 4px rgba(0,0,0,1), 
                  // 0px 1.5px 4px rgba(0,0,0,1), 
                  // 0px 1.5px 4px rgba(0,0,0,1), 
                  // 0px 1.5px 4px rgba(0,0,0,1), 
                  // 0px 1.5px 4px rgba(0,0,0,1), 
                  // 0px 1.5px 4px rgba(0,0,0,1), 
                  // 0px 1.5px 4px rgba(0,0,0,1), 
                  // 0px 1.5px 4px rgba(0,0,0,1), 
                  // 0px 1.5px 4px rgba(0,0,0,1), 
                  // 0px 1.5px 4px rgba(0,0,0,1), 
                  // 0px 1.5px 4px rgba(0,0,0,1)`
                }}>
                Hi, My name is
              </Typography>
              <Typography
                variant='h4'
                mb={2}
                sx={{
                  position: 'relative',
                  textAlign: 'center',
                  fontFamily: 'Nunito, Arial, sans-serif',
                  fontWeight: 700,
                  color: 'red',
              //     textShadow: `
              // -2px 2px 0px rgba(255,255,255,1), 
              // -2px 2px 0px rgba(255,255,255,1), 
              // -2px 2px 0px rgba(255,255,255,1), 
              // -2px 2px 0px rgba(255,255,255,1), 
              // -2px 2px 0px rgba(255,255,255,1), 
              // -2px 2px 0px rgba(255,255,255,1), 
              // -2px 2px 0px rgba(255,255,255,1), 
              // -2px 2px 0px rgba(255,255,255,1), 
              // -2px 2px 0px rgba(255,255,255,1), 
              // -2px 2px 0px rgba(255,255,255,1), 
              // -2px 2px 0px rgba(255,255,255,1), 
              // -2px 2px 0px rgba(255,255,255,1), 
              // -2px 2px 0px rgba(255,255,255,1), 
              // -2px 2px 0px rgba(255,255,255,1), 
              // -2px 2px 0px rgba(255,255,255,1), 
              // -2px 2px 0px rgba(255,255,255,1)`
                }}>
                I Love Shollakhuddin Kurniawan
              </Typography>
              <Typography
                variant='h6'
                sx={{
                  position: 'relative',
                  textAlign: 'center',
                  fontFamily: 'Nunito, Arial, sans-serif',
                  fontWeight: 700,
                }}>
                You can call me luvi, why?
              </Typography>
              <Typography
                variant='h6'
                sx={{
                  position: 'relative',
                  textAlign: 'center',
                  fontFamily: 'Nunito, Arial, sans-serif',
                  fontWeight: 700,
                }}>
                love -&gt; loovee -&gt; luvi
              </Typography>
            </Box>
          </Slide>
        </Box>
        : null}
      {dialogVal === 1 ?
        <Box ref={containerRef} sx={{ height: '260px', overflow: 'auto', px: 1 }}>
          <Slide direction='right' in={dialogVal === 1} container={containerRef.current}>
            <Box>
              <Typography
                variant='h6'
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
      {dialogVal === 2 ?
        <Box ref={containerRef} sx={{ height: '260px', overflow: 'auto', px: 1 }}>
          <Slide direction='right' in={dialogVal === 2} container={containerRef.current}>
            <Box>
              <Typography
                variant='h6'
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
      {dialogVal === 3 ?
        <Box ref={containerRef} sx={{ height: '260px', overflow: 'auto', px: 1 }}>
          <Slide direction='right' in={dialogVal === 3} container={containerRef.current}>
            <Box>
              <Typography
                variant='h6'
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
          whileHover={{ scale: dialogVal > 0 ? 1.1 : 0 }}
          whileTap={{ scale: dialogVal > 0 ? 1 : 0 }}
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
            <IconCaretLeftFilled color='red' />
            <Typography
              variant='h5'
              sx={{
                fontFamily: 'Nunito, Arial, sans-serif',
                fontWeight: 700,
                color: 'yellow',
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
              PREV
            </Typography>
          </Button>
        </Box>
        <Box
          component={motion.div}
          whileHover={{ scale: dialogVal < 3 ? 1.1 : 0 }}
          initial={{ scale: 0 }}
          whileTap={{ scale: dialogVal < 3 ? 1 : 0 }}
          animate={{ scale: dialogVal < 3 ? 1 : 0 }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 20
          }}>
          <Button
            onClick={() => {
              if (dialogVal < 3) {
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
              variant='h5'
              sx={{
                fontFamily: 'Nunito, Arial, sans-serif',
                fontWeight: 700,
                color: 'yellow',
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
              Next
            </Typography>
            <IconCaretRightFilled color='red' />
          </Button>
        </Box>
      </Stack>
    </Box>
  )
}

export default IntroCardContents