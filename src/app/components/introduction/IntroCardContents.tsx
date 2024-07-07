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
      {/* striped circle */}
      <Box
        component={motion.div}
        sx={{
          position: 'absolute',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'repeating-linear-gradient(45deg, yellow, yellow, 5px, transparent 5px, transparent 9px)',
          top: '-15px',
          left: '20px',
        }}
      >
      </Box>
      <Box
        component={motion.div}
        sx={{
          position: 'absolute',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'repeating-linear-gradient(45deg, #ffc800, #ffc800,  5px, transparent 5px, transparent 9px)',
          bottom: '15px',
          right: '-20px',
        }}
      >
      </Box>
      {/* spike */}
      <Box
        sx={{
          position: 'absolute',
          width: '60px',
          height: '60px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          backgroundColor: 'yellow',
          clipPath: 'polygon(100% 50%,83.81% 59.06%,93.3% 75%,74.75% 74.75%,75% 93.3%,59.06% 83.81%,50% 100%,40.94% 83.81%,25% 93.3%,25.25% 74.75%,6.7% 75%,16.19% 59.06%,0% 50%,16.19% 40.94%,6.7% 25%,25.25% 25.25%,25% 6.7%,40.94% 16.19%,50% 0%,59.06% 16.19%,75% 6.7%,74.75% 25.25%,93.3% 25%,83.81% 40.94%)',
          top: '-20px',
          left: '-20px'
        }}
      >
      </Box>
      {/* circle */}
      <Box
        sx={{
          position: 'absolute',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'transparent',
          border: '7px solid #ffc800',
          bottom: '-15px',
          right: '-15px'
        }}
      >
      </Box>
      <Box
        sx={{
          position: 'absolute',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'transparent',
          border: '7px solid yellow',
          top: '10px',
          left: '-20px'
        }}
      >
      </Box>
      <Box
        component={motion.div}
        sx={{
          position: 'absolute',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#ffc800',
          bottom: '-15px',
          right: '20px',
        }}
      >
      </Box>
      {dialogVal === 0 ?
        <Box ref={containerRef} sx={{ height: '200px', overflow: 'hidden', pl: 1 }}>
          <Slide direction='right' in={dialogVal === 0} container={containerRef.current}>
            <Box>
              <Typography
                variant='h6'
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
                }}>
                Hi, My name is
              </Typography>
              <Typography
                variant='h6'
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
                }}>
                I LOVE SHOLLAKHUDDIN KURNIAWAN
              </Typography>
              <Typography
                variant='body1'
                sx={{
                  textAlign: 'center',
                  fontFamily: 'Nunito, Arial, sans-serif',
                  fontWeight: 700,
                }}>
                You can call me luvi, why?
              </Typography>
              <Typography
                variant='body1'
                sx={{
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
        <Box ref={containerRef} sx={{ height: '200px', overflow: 'hidden', pl: 1 }}>
          <Slide direction='right' in={dialogVal === 1} container={containerRef.current}>
            <Box>
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
      {dialogVal === 2 ?
        <Box ref={containerRef} sx={{ height: '200px', overflow: 'hidden', pl: 1 }}>
          <Slide direction='right' in={dialogVal === 2} container={containerRef.current}>
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
      {dialogVal === 3 ?
        <Box ref={containerRef} sx={{ height: '200px', overflow: 'hidden', pl: 1 }}>
          <Slide direction='right' in={dialogVal === 3} container={containerRef.current}>
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

export default IntroCardContents