'use client'

import { Button, Stack, Typography, Box, Slide } from '@mui/material'
import { IconCaretLeftFilled, IconCaretRightFilled } from '@tabler/icons-react'
import { motion } from 'framer-motion'
import { useState } from 'react'

const IntroCardContents = () => {
  const [dialogVal, setDialogVal] = useState(0)
  const [askActive, setAskActive] = useState(false)

  return (
    <Box>
      {dialogVal === 0 ?
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '260px',
            overflow: 'hidden',
            px: 1,
            boxShadow: 'inset 0px 0px 5px rgba(0, 0, 0, 0.5)',
            borderRadius: '5px',
            position: 'relative',
            backgroundColor: 'rgba(250, 250, 250, 1)',
            overFlow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(120deg, transparent, rgba(255,255,255,0.6), transparent)',
              opacity: 0,
              animation: 'moveGradient 0.5s forwards',
              animationDelay: '0.5s',
            },
            '@keyframes moveGradient': {
              '0%': {
                opacity: 1,
                transform: 'translateX(-100%)',
              },
              '100%': {
                opacity: 1,
                transform: 'translateX(100%)',
              },
            },
          }}>
          <Slide direction='right' in={dialogVal === 0}>
            <Box>
              <Typography
                variant='h5'
                sx={{
                  textAlign: 'center',
                  fontFamily: 'Nunito, Arial, sans-serif',
                  fontWeight: 700,
                  color: 'black',
                }}>
                Welcome Visitors !!
              </Typography>
              <Typography
                variant='h5'
                mt={1}
                sx={{
                  textAlign: 'center',
                  fontFamily: 'Nunito, Arial, sans-serif',
                  fontWeight: 700,
                  color: 'red',
                }}>
                My name is I Love Shollakhuddin Kurniawan
              </Typography>
              <Typography
                variant='h6'
                mt={1}
                sx={{
                  textAlign: 'center',
                  fontFamily: 'Nunito, Arial, sans-serif',
                  fontWeight: 700,
                }}>
                You can call me Luvi
              </Typography>
            </Box>
          </Slide>
        </Box>
        : null}
      {dialogVal === 1 ?
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '260px',
            overflow: 'hidden',
            px: 1,
            boxShadow: 'inset 0px 0px 5px rgba(0, 0, 0, 0.5)',
            borderRadius: '5px',
            position: 'relative',
            backgroundColor: 'rgba(250, 250, 250, 1)',
            overFlow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(120deg, transparent, rgba(255,255,255,0.6), transparent)',
              opacity: 0,
              animation: 'moveGradient 0.5s forwards',
              animationDelay: '0.5s',
            },
            '@keyframes moveGradient': {
              '0%': {
                opacity: 1,
                transform: 'translateX(-100%)',
              },
              '100%': {
                opacity: 1,
                transform: 'translateX(100%)',
              },
            },
          }}>
          <Slide direction='right' in={dialogVal === 1}>
            <Box>
              <Typography
                variant='h6'
                sx={{
                  fontFamily: 'Nunito, Arial, sans-serif',
                  fontWeight: 700,
                }}>
                I&apos;m a  full stack web developer from Indonesia who is currently studying in college and wants to continue innovating in the field of software development.
              </Typography>
            </Box>
          </Slide>
        </Box>
        : null}
      {dialogVal === 2 ?
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '260px',
            overflow: 'hidden',
            px: 1,
            boxShadow: 'inset 0px 0px 5px rgba(0, 0, 0, 0.5)',
            borderRadius: '5px',
            position: 'relative',
            backgroundColor: 'rgba(250, 250, 250, 1)',
            overFlow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(120deg, transparent, rgba(255,255,255,0.6), transparent)',
              opacity: 0,
              animation: 'moveGradient 0.5s forwards',
              animationDelay: '0.5s',
            },
            '@keyframes moveGradient': {
              '0%': {
                opacity: 1,
                transform: 'translateX(-100%)',
              },
              '100%': {
                opacity: 1,
                transform: 'translateX(100%)',
              },
            },
          }}>
          <Slide direction='right' in={dialogVal === 2}>
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
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '260px',
            overflow: 'hidden',
            px: 1,
            boxShadow: 'inset 0px 0px 5px rgba(0, 0, 0, 0.5)',
            borderRadius: '5px',
            position: 'relative',
            backgroundColor: 'rgba(250, 250, 250, 1)',
            overFlow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(120deg, transparent, rgba(255,255,255,0.6), transparent)',
              opacity: 0,
              animation: 'moveGradient 0.5s forwards',
              animationDelay: '0.5s',
            },
            '@keyframes moveGradient': {
              '0%': {
                opacity: 1,
                transform: 'translateX(-100%)',
              },
              '100%': {
                opacity: 1,
                transform: 'translateX(100%)',
              },
            },
          }}>
          <Slide direction='right' in={dialogVal === 3}>
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
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <Box
          mr={1}
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
                color: 'white',
                textShadow: `
              0px 1.5px 3px rgba(200,0,0,1), 
              0px 1.5px 3px rgba(200,0,0,1), 
              0px 1.5px 3px rgba(200,0,0,1), 
              0px 1.5px 3px rgba(200,0,0,1), 
              0px 1.5px 3px rgba(200,0,0,1), 
              0px 1.5px 3px rgba(200,0,0,1), 
              0px 1.5px 3px rgba(200,0,0,1), 
              0px 1.5px 3px rgba(200,0,0,1), 
              0px 1.5px 3px rgba(200,0,0,1), 
              0px 1.5px 3px rgba(200,0,0,1), 
              0px 1.5px 3px rgba(200,0,0,1), 
              0px 1.5px 3px rgba(200,0,0,1), 
              0px 1.5px 3px rgba(200,0,0,1), 
              0px 1.5px 3px rgba(200,0,0,1), 
              0px 1.5px 3px rgba(200,0,0,1), 
              0px 1.5px 3px rgba(200,0,0,1)`
              }}
            >
              PREV
            </Typography>
          </Button>
        </Box>
        <Box sx={{ width: '100%', height: '3px', backgroundColor: 'red', borderRadius: '3px' }} />
        <Box
          ml={1}
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
                color: 'white',
                textShadow: `
              0px 1.5px 3px rgba(200,0,0,1), 
              0px 1.5px 3px rgba(200,0,0,1), 
              0px 1.5px 3px rgba(200,0,0,1), 
              0px 1.5px 3px rgba(200,0,0,1), 
              0px 1.5px 3px rgba(200,0,0,1), 
              0px 1.5px 3px rgba(200,0,0,1), 
              0px 1.5px 3px rgba(200,0,0,1), 
              0px 1.5px 3px rgba(200,0,0,1), 
              0px 1.5px 3px rgba(200,0,0,1), 
              0px 1.5px 3px rgba(200,0,0,1), 
              0px 1.5px 3px rgba(200,0,0,1), 
              0px 1.5px 3px rgba(200,0,0,1), 
              0px 1.5px 3px rgba(200,0,0,1), 
              0px 1.5px 3px rgba(200,0,0,1), 
              0px 1.5px 3px rgba(200,0,0,1), 
              0px 1.5px 3px rgba(200,0,0,1)`
              }}
            >
              Next
            </Typography>
            <IconCaretRightFilled color='red' />
          </Button>
        </Box>
      </Stack>
      <Box
        sx={{
          width: '100%',
          background: 'linear-gradient(100deg, red, #d10000)',
          borderRadius: '5px',
          overflow: 'hidden',
          position: 'relative'
          // filter: 'drop-shadow(-2px 2px 2px rgba(0,0,0,0.5))',
        }}
      >
        <Box position='absolute'
          sx={{ top: -10, left: 155, transform: 'rotate(15deg)' }}>
          <Typography variant='h2'
            sx={{
              textAlign: 'center',
              fontFamily: 'Nunito, Arial, sans-serif',
              fontWeight: 900,
              color: 'black',
            }}>
            ?
          </Typography>
        </Box>
        <Box position='absolute'
          sx={{ top: -14, left: 163, transform: 'rotate(15deg)' }}>
          <Typography variant='h2'
            sx={{
              textAlign: 'center',
              fontFamily: 'Nunito, Arial, sans-serif',
              fontWeight: 900,
              color: 'white',
            }}>
            ?
          </Typography>
        </Box>
        <Box
          component={motion.div}
          whileHover={{ scale: 1.1 }}
          initial={{ scale: 0 }}
          whileTap={{ scale: 1 }}
          animate={{ scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 20
          }}>
          <Button
            onClick={() => setAskActive(!askActive)}
            size='small'
            sx={{
              width: '100%',
              borderRadius: '10px',
              backgroundColor: 'transparent',
              textTransform: 'none',
              '&:active': {
                color: 'transparent'
              },
              '&:hover': {
                backgroundColor: 'transparent',
                color: 'transparent'
              }
            }}>
            <Box width='100%'>
              <Stack direction='row' alignItems='center' justifyContent='space-between'>
                <IconCaretRightFilled color='white' />
                <Typography
                  variant='h5'
                  sx={{
                    textAlign: 'center',
                    fontFamily: 'Nunito, Arial, sans-serif',
                    fontWeight: 700,
                    color: 'white',
                    textShadow: `
                    0px 1.5px 3px rgba(200,0,0,1), 
                    0px 1.5px 3px rgba(200,0,0,1), 
                    0px 1.5px 3px rgba(200,0,0,1), 
                    0px 1.5px 3px rgba(200,0,0,1), 
                    0px 1.5px 3px rgba(200,0,0,1), 
                    0px 1.5px 3px rgba(200,0,0,1), 
                    0px 1.5px 3px rgba(200,0,0,1), 
                    0px 1.5px 3px rgba(200,0,0,1), 
                    0px 1.5px 3px rgba(200,0,0,1), 
                    0px 1.5px 3px rgba(200,0,0,1), 
                    0px 1.5px 3px rgba(200,0,0,1), 
                    0px 1.5px 3px rgba(200,0,0,1), 
                    0px 1.5px 3px rgba(200,0,0,1), 
                    0px 1.5px 3px rgba(200,0,0,1), 
                    0px 1.5px 3px rgba(200,0,0,1), 
                    0px 1.5px 3px rgba(200,0,0,1)`
                  }}>
                  Ask Me?
                </Typography>
                <IconCaretLeftFilled color='white' />
              </Stack>
            </Box>
          </Button>
        </Box>
      </Box>
      <Box
        component={motion.div}
        initial={{ scale: 0 }}
        animate={{ scale: askActive ? 1 : 0 }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 20
        }}
        position='absolute'
        sx={{
          background: 'linear-gradient(100deg, blue, blue)',
          borderRadius: '5px',
          overflow: 'hidden',
          top: '100px',
          left: '0px'
        }}>
        <Typography variant='h2'>yayaya</Typography>
      </Box>
    </Box>
  )
}

export default IntroCardContents