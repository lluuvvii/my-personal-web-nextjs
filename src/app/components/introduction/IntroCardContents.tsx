'use client'

import { Button, Stack, Typography, Box, Slide } from '@mui/material'
import { IconBrandGithub, IconBrandInstagram, IconCaretLeftFilled, IconCaretRightFilled, IconExclamationCircle, IconSquareXFilled } from '@tabler/icons-react'
import { motion } from 'framer-motion'
import { useState } from 'react'

const IntroCardContents = () => {
  const [dialogVal, setDialogVal] = useState(0)
  const [askActive, setAskActive] = useState(false)
  const [socialMediaActive, setSocialMediaActive] = useState(false)
  const [markQuestions, setMarkQuestions] = useState({ thisWebsite: false, secondOption: false })
  const [markAskMe, setMarkAskMe] = useState(false)
  const [markSocialMedia, setMarkSocialMedia] = useState(false)
  const [questionDialog, setQuestionDialog] = useState({ thisWebsite: false, secondOption: false })
  const [questionActive, setQuestionActive] = useState(false)

  const resetQuestionDialog = () => {
    setQuestionDialog({
      thisWebsite: false,
      secondOption: false
    })
  }

  return (
    <Box position='relative'>
      <Stack direction='column' justifyContent='center' spacing={1}>
        {/* screen content */}
        <Box
          component={motion.div}
          initial={{ scale: 0 }}
          animate={{ opacity: !askActive ? 1 : 0, scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 30
          }}>
          {!questionActive && dialogVal === 0 ?
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
                  background: 'linear-gradient(120deg, transparent, rgba(255,255,255,0.8), transparent)',
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
                    Welcome Visitors !!<br />
                    My Name Is :
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
                    I Love Shollakhuddin Kurniawan
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
          {!questionActive && dialogVal === 1 ?
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
                  background: 'linear-gradient(120deg, transparent, rgba(255,255,255,0.8), transparent)',
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
          {!questionActive && dialogVal === 2 ?
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
                  background: 'linear-gradient(120deg, transparent, rgba(255,255,255,0.8), transparent)',
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
                    I have been studying web development since 2023 and continue to explore it until now, at that time I also tried to learn consistently and balance mentally by playing games or other hobbies.
                  </Typography>
                </Box>
              </Slide>
            </Box>
            : null}
          {!questionActive && dialogVal === 3 ?
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
                  background: 'linear-gradient(120deg, transparent, rgba(255,255,255,0.8), transparent)',
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
                    On this personal website, I created it because I wanted to express how I can pour out the creativity, knowledge, logic, and innovation that is in my mind, Enjoy !!.
                  </Typography>
                </Box>
              </Slide>
            </Box>
            : null}
          {questionActive && questionDialog.thisWebsite ?
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
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(120deg, transparent, rgba(255,255,255,0.8), transparent)',
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
              <Slide direction='right' in={questionDialog.thisWebsite}>
                <Box
                  sx={{
                    // width: '100%',
                    // height: '100%',
                    overflow: 'auto'
                  }}>
                  <Typography
                    sx={{
                      fontSize: '18px',
                      fontFamily: 'Nunito, Arial, sans-serif',
                      fontWeight: 700,
                    }}>
                    This website is inspired by the UI of the game Sonic Generations and I made it for personal use and to introduce myself and my work to visitors.
                  </Typography>
                </Box>
              </Slide>
            </Box>
            : null}
          {questionActive && questionDialog.secondOption ?
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
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(120deg, transparent, rgba(255,255,255,0.8), transparent)',
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
              <Slide direction='right' in={questionDialog.secondOption}>
                <Box
                  sx={{
                    // width: '100%',
                    height: '100%',
                    overflow: 'auto'
                  }}>
                  <Typography
                    sx={{
                      fontSize: '18px',
                      fontFamily: 'Nunito, Arial, sans-serif',
                      fontWeight: 700,
                    }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni deleniti doloremque laudantium quo molestias neque quas, optio voluptas sunt doloribus tempora dolores assumenda labore voluptatum expedita, aut, natus inventore facere? Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti delectus impedit quisquam molestias nam repellat sint aliquid, dolorum et eos, suscipit sapiente doloribus alias odio iure? Ullam vel molestias neque?
                  </Typography>
                </Box>
              </Slide>
            </Box>
            : null}
        </Box>
        {/* pagination introduction and close question navigation */}
        <Box
          position='relative'
          component={motion.div}
          initial={{ scale: 0 }}
          animate={{ opacity: !askActive ? 1 : 0, scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 25,
          }}>
          {!questionActive ?
            <Stack direction='row' justifyContent='space-between' alignItems='center'>
              <Box
                mr={1}
                component={motion.div}
                initial={{ scale: 0 }}
                whileHover={{ scale: dialogVal > 0 ? 1.1 : 0 }}
                whileTap={{ scale: dialogVal > 0 ? 1 : 0 }}
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
                      top: 6,
                      left: 29,
                      position: 'absolute',
                      fontFamily: 'Nunito, Arial, sans-serif',
                      fontWeight: 700,
                      color: 'red',
                      WebkitTextStroke: '10px red',
                      textTransform: 'none',
                    }}
                  >
                    Prev
                  </Typography>
                  <Typography
                    variant='h5'
                    sx={{
                      top: 6,
                      left: 29,
                      position: 'absolute',
                      fontFamily: 'Nunito, Arial, sans-serif',
                      fontWeight: 700,
                      color: 'black',
                      WebkitTextStroke: '5px black',
                      textTransform: 'none',
                    }}
                  >
                    Prev
                  </Typography>
                  <Typography
                    variant='h5'
                    sx={{
                      position: 'relative',
                      fontFamily: 'Nunito, Arial, sans-serif',
                      fontWeight: 700,
                      color: 'white',
                      textTransform: 'none',
                    }}
                  >
                    Prev
                  </Typography>
                </Button>
              </Box>
              <Box sx={{ width: '100%', height: '5px', backgroundColor: 'red', borderRadius: '5px' }} />
              <Box
                ml={1}
                component={motion.div}
                initial={{ scale: 0 }}
                whileHover={{ scale: dialogVal < 3 ? 1.1 : 0 }}
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
                    component={motion.div}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: 'spring',
                      stiffness: 500,
                      damping: 30,
                      delay: 0.1
                    }}
                    variant='h5'
                    sx={{
                      top: 6,
                      left: 5,
                      position: 'absolute',
                      fontFamily: 'Nunito, Arial, sans-serif',
                      fontWeight: 700,
                      color: 'red',
                      WebkitTextStroke: '10px red',
                      textTransform: 'none',
                    }}
                  >
                    Next
                  </Typography>
                  <Typography
                    component={motion.div}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: 'spring',
                      stiffness: 500,
                      damping: 30,
                      delay: 0.2
                    }}
                    variant='h5'
                    sx={{
                      top: 6,
                      left: 5,
                      position: 'absolute',
                      fontFamily: 'Nunito, Arial, sans-serif',
                      fontWeight: 700,
                      color: 'black',
                      WebkitTextStroke: '5px black',
                      textTransform: 'none',
                    }}
                  >
                    Next
                  </Typography>
                  <Typography
                    component={motion.div}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: 'spring',
                      stiffness: 500,
                      damping: 30,
                      delay: 0.3
                    }}
                    variant='h5'
                    sx={{
                      position: 'relative',
                      fontFamily: 'Nunito, Arial, sans-serif',
                      fontWeight: 700,
                      color: 'white',
                      textTransform: 'none'
                    }}
                  >
                    Next
                  </Typography>
                  <IconCaretRightFilled color='red' />
                </Button>
              </Box>
            </Stack>
            : null}
          {questionActive ?
            <Box
              position='relative'
              display='flex'
              alignItems='center'
              justifyContent='center'
              component={motion.div}
              whileHover={{ scale: 1.1 }}
              initial={{ scale: 0 }}
              whileTap={{ scale: 1 }}
              animate={{ scale: questionActive ? 1 : 0 }}
              transition={{
                type: 'spring',
                stiffness: 500,
                damping: 20
              }}>
              <Button
                onClick={() => {
                  resetQuestionDialog()
                  setQuestionActive(false)
                }}
                size='small'
                sx={{
                  px: 0,
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
                <IconSquareXFilled color='red' size={32} />
              </Button>
            </Box>
            : null}
        </Box>
        {/* ask me button */}
        <Box
          sx={{
            width: '100%',
            backgroundColor: 'red',
            borderRadius: '5px',
            overflow: 'hidden',
            position: 'relative'
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
          <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Box
              component={motion.div}
              initial={{ x: 0 }}
              animate={{ x: markAskMe ? 20 : 0 }}
              transition={{
                type: 'spring',
                stiffness: 500,
                damping: 20
              }}>
              <IconCaretRightFilled color='white' />
            </Box>
            <Box
              component={motion.div}
              whileHover={{ scale: 1.1 }}
              onHoverStart={() => setMarkAskMe(true)}
              onHoverEnd={() => setMarkAskMe(false)}
              onTouchStart={() => setMarkAskMe(true)}
              onTouchEnd={() => setMarkAskMe(false)}
              initial={{ scale: 0 }}
              whileTap={{ scale: 1 }}
              animate={{ scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 500,
                damping: 20
              }}>
              <Button
                onClick={() => {
                  setAskActive(!askActive)
                }}
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
                    <Typography
                      variant='h5'
                      sx={{
                        position: 'absolute',
                        width: '100%',
                        top: '6px',
                        left: '0px',
                        textAlign: 'center',
                        fontFamily: 'Nunito, Arial, sans-serif',
                        fontWeight: 700,
                        color: 'white',
                        WebkitTextStroke: '10px white'
                      }}>
                      {askActive ?
                        <>Close</>
                        :
                        <>Ask Me?</>}
                    </Typography>
                    <Typography
                      variant='h5'
                      sx={{
                        position: 'absolute',
                        width: '100%',
                        top: '6px',
                        left: '0px',
                        textAlign: 'center',
                        fontFamily: 'Nunito, Arial, sans-serif',
                        fontWeight: 700,
                        color: 'black',
                        WebkitTextStroke: '5px black'
                      }}>
                      {askActive ?
                        <>Close</>
                        :
                        <>Ask Me?</>}
                    </Typography>
                    <Typography
                      variant='h5'
                      sx={{
                        position: 'relative',
                        textAlign: 'center',
                        fontFamily: 'Nunito, Arial, sans-serif',
                        fontWeight: 700,
                        color: 'white',
                      }}>
                      {askActive ?
                        <>Close</>
                        :
                        <>Ask Me?</>}
                    </Typography>
                  </Stack>
                </Box>
              </Button>
            </Box>
            <Box
              component={motion.div}
              initial={{ x: 0 }}
              animate={{ x: markAskMe ? -20 : 0 }}
              transition={{
                type: 'spring',
                stiffness: 500,
                damping: 20
              }}>
              <IconCaretLeftFilled color='white' />
            </Box>
          </Stack>
        </Box>
        {/* ask me about card */}
        <Box
          position='absolute'
          component={motion.div}
          initial={{ opacity: 0, y: 300, scale: 0 }}
          animate={{ scale: askActive ? 1 : 0, opacity: askActive ? 1 : 0, y: askActive ? 0 : 300 }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 30
          }}
          sx={{
            top: '0px',
            left: '0px',
            borderRadius: '10px',
          }}>
          <Box
            component={motion.div}
            initial={{ scale: 2 }}
            position='absolute'
            sx={{
              top: '264px',
              left: '-6px',
            }}>
            <IconCaretRightFilled color='red' />
          </Box>
          <Box
            sx={{
              position: 'relative',
              width: '260px',
              height: '280px',
              p: '10px',
              backgroundColor: 'red',
              borderRadius: '10px',
              overflow: 'hidden',
            }}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, scale: 0, rotate: 15 }}
              animate={{ opacity: 1, scale: 1 }}
              position='absolute'
              sx={{ top: -15, left: 157 }}>
              <Typography variant='h2'
                sx={{
                  textAlign: 'center',
                  fontFamily: 'Nunito, Arial, sans-serif',
                  fontWeight: 900,
                  color: 'black',
                }}>
                <IconExclamationCircle color='black' size='100px' />
              </Typography>
            </Box>
            <Box
              component={motion.div}
              initial={{ opacity: 0, scale: 0, rotate: 15 }}
              animate={{ opacity: 1, scale: 1 }}
              position='absolute'
              sx={{ top: -19, left: 165 }}>
              <Typography variant='h2'
                sx={{
                  textAlign: 'center',
                  fontFamily: 'Nunito, Arial, sans-serif',
                  fontWeight: 900,
                  color: 'white',
                }}>
                <IconExclamationCircle color='white' size='100px' />
              </Typography>
            </Box>
            {/* ask me about title */}
            <Box>
              <Typography
                variant='h5'
                mb={1}
                sx={{
                  position: 'absolute',
                  width: '100%',
                  top: 12,
                  left: 0,
                  textAlign: 'center',
                  fontFamily: 'Nunito, Arial, sans-serif',
                  fontWeight: 700,
                  color: 'white',
                  WebkitTextStroke: '10px white'
                }}>Ask Me About :</Typography>
              <Typography
                variant='h5'
                mb={1}
                sx={{
                  position: 'absolute',
                  width: '100%',
                  top: 12,
                  left: 0,
                  textAlign: 'center',
                  fontFamily: 'Nunito, Arial, sans-serif',
                  fontWeight: 700,
                  color: 'black',
                  WebkitTextStroke: '5px black'
                }}>Ask Me About :</Typography>
              <Typography
                variant='h5'
                mb={1}
                sx={{
                  position: 'relative',
                  textAlign: 'center',
                  fontFamily: 'Nunito, Arial, sans-serif',
                  fontWeight: 700,
                  color: 'white',
                }}>Ask Me About :</Typography>
            </Box>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: '219px',
                backgroundColor: 'white',
                borderRadius: '5px',
              }}>
              {/* this website button */}
              <Box>
                <Stack direction='row' alignItems='center' justifyContent='space-between'>
                  <Box
                    component={motion.div}
                    initial={{ scale: 0 }}
                    animate={{ scale: markQuestions.thisWebsite ? 1 : 0 }}
                    transition={{
                      type: 'spring',
                      stiffness: 500,
                      damping: 20
                    }}>
                    <IconCaretRightFilled color='red' />
                  </Box>
                  {askActive ?
                    <Button
                      component={motion.div}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 1 }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      onHoverStart={() => setMarkQuestions((prevState) => ({ ...prevState, thisWebsite: true }))}
                      onHoverEnd={() => setMarkQuestions((prevState) => ({ ...prevState, thisWebsite: false }))}
                      onTouchStart={() => setMarkQuestions((prevState) => ({ ...prevState, thisWebsite: true }))}
                      onTouchEnd={() => setMarkQuestions((prevState) => ({ ...prevState, thisWebsite: false }))}
                      transition={{
                        type: 'spring',
                        stiffness: 500,
                        damping: 20
                      }}
                      onClick={() => {
                        resetQuestionDialog()
                        setQuestionDialog(prevState => ({ ...prevState, thisWebsite: true }))
                        setAskActive(false)
                        setQuestionActive(true)
                      }}
                      size='small'
                      sx={{
                        width: '100%',
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
                      <Typography
                        component={motion.div}
                        initial={{ scale: 0 }}
                        animate={{ scale: askActive ? 1 : 0 }}
                        transition={{
                          type: 'spring',
                          stiffness: 500,
                          damping: 30,
                          delay: 0.1
                        }}
                        variant='h6'
                        sx={{
                          position: 'absolute',
                          width: '100%',
                          top: 6,
                          left: 0,
                          textAlign: 'center',
                          fontFamily: 'Nunito, Arial, sans-serif',
                          fontWeight: 700,
                          color: 'red',
                          WebkitTextStroke: '10px red'
                        }}>
                        This Website
                      </Typography>
                      <Typography
                        component={motion.div}
                        initial={{ scale: 0 }}
                        animate={{ scale: askActive ? 1 : 0 }}
                        transition={{
                          type: 'spring',
                          stiffness: 500,
                          damping: 30,
                          delay: 0.2
                        }}
                        variant='h6'
                        sx={{
                          position: 'absolute',
                          width: '100%',
                          top: 6,
                          left: 0,
                          textAlign: 'center',
                          fontFamily: 'Nunito, Arial, sans-serif',
                          fontWeight: 700,
                          color: 'black',
                          WebkitTextStroke: '5px black'
                        }}>
                        This Website
                      </Typography>
                      <Typography
                        component={motion.div}
                        initial={{ scale: 0 }}
                        animate={{ scale: askActive ? 1 : 0 }}
                        transition={{
                          type: 'spring',
                          stiffness: 500,
                          damping: 30,
                          delay: 0.3
                        }}
                        variant='h6'
                        sx={{
                          position: 'relative',
                          textAlign: 'center',
                          fontFamily: 'Nunito, Arial, sans-serif',
                          fontWeight: 700,
                          color: 'white',
                        }}>
                        This Website
                      </Typography>
                    </Button>
                    : null}
                  <Box
                    component={motion.div}
                    initial={{ scale: 0 }}
                    animate={{ scale: markQuestions.thisWebsite ? 1 : 0 }}
                    transition={{
                      type: 'spring',
                      stiffness: 500,
                      damping: 20
                    }}>
                    <IconCaretLeftFilled color='red' />
                  </Box>
                </Stack>
              </Box>
              {/* yayaya button */}
              <Box>
                <Stack direction='row' alignItems='center' justifyContent='space-between'>
                  <Box
                    component={motion.div}
                    initial={{ scale: 0 }}
                    animate={{ scale: markQuestions.secondOption ? 1 : 0 }}
                    transition={{
                      type: 'spring',
                      stiffness: 500,
                      damping: 20
                    }}>
                    <IconCaretRightFilled color='red' />
                  </Box>
                  {askActive ?
                    <Button
                      component={motion.div}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 1 }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      onHoverStart={() => setMarkQuestions((prevState) => ({ ...prevState, secondOption: true }))}
                      onHoverEnd={() => setMarkQuestions((prevState) => ({ ...prevState, secondOption: false }))}
                      onTouchStart={() => setMarkQuestions((prevState) => ({ ...prevState, secondOption: true }))}
                      onTouchEnd={() => setMarkQuestions((prevState) => ({ ...prevState, secondOption: false }))}
                      transition={{
                        type: 'spring',
                        stiffness: 500,
                        damping: 20
                      }}
                      onClick={() => {
                        resetQuestionDialog()
                        setQuestionDialog(prevState => ({ ...prevState, secondOption: true }))
                        setAskActive(false)
                        setQuestionActive(true)
                      }}
                      size='small'
                      sx={{
                        width: '100%',
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
                      <Typography
                        component={motion.div}
                        initial={{ scale: 0 }}
                        animate={{ scale: askActive ? 1 : 0 }}
                        transition={{
                          type: 'spring',
                          stiffness: 500,
                          damping: 30,
                          delay: 0.1
                        }}
                        variant='h6'
                        sx={{
                          position: 'absolute',
                          width: '100%',
                          top: 6,
                          left: 0,
                          textAlign: 'center',
                          fontFamily: 'Nunito, Arial, sans-serif',
                          fontWeight: 700,
                          color: 'red',
                          WebkitTextStroke: '10px red'
                        }}>
                        Second Option
                      </Typography>
                      <Typography
                        component={motion.div}
                        initial={{ scale: 0 }}
                        animate={{ scale: askActive ? 1 : 0 }}
                        transition={{
                          type: 'spring',
                          stiffness: 500,
                          damping: 30,
                          delay: 0.2
                        }}
                        variant='h6'
                        sx={{
                          position: 'absolute',
                          width: '100%',
                          top: 6,
                          left: 0,
                          textAlign: 'center',
                          fontFamily: 'Nunito, Arial, sans-serif',
                          fontWeight: 700,
                          color: 'black',
                          WebkitTextStroke: '5px black'
                        }}>
                        Second Option
                      </Typography>
                      <Typography
                        component={motion.div}
                        initial={{ scale: 0 }}
                        animate={{ scale: askActive ? 1 : 0 }}
                        transition={{
                          type: 'spring',
                          stiffness: 500,
                          damping: 30,
                          delay: 0.3
                        }}
                        variant='h6'
                        sx={{
                          position: 'relative',
                          textAlign: 'center',
                          fontFamily: 'Nunito, Arial, sans-serif',
                          fontWeight: 700,
                          color: 'white',
                        }}>
                        Second Option
                      </Typography>
                    </Button>
                    : null}
                  <Box
                    component={motion.div}
                    initial={{ scale: 0 }}
                    animate={{ scale: markQuestions.secondOption ? 1 : 0 }}
                    transition={{
                      type: 'spring',
                      stiffness: 500,
                      damping: 20
                    }}>
                    <IconCaretLeftFilled color='red' />
                  </Box>
                </Stack>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* social media */}
        <Box
          sx={{
            width: '100%',
            backgroundColor: 'red',
            p: '5px',
            borderRadius: '5px',
            overflow: 'hidden',
          }}>
          <Box
            sx={{
              width: '100%',
              backgroundColor: 'white',
              borderRadius: '2.5px',
              overflow: 'hidden',
            }}>
            <Stack direction='row' alignItems='center' justifyContent='center' spacing={1}>
              <Box
                component={motion.div}
                initial={{ scale: 0 }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1 }}
                animate={{ scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 500,
                  damping: 20
                }}>
                <Button
                  onClick={() => window.open('https://github.com/lluuvvii', '_blank')}
                  size='small'
                  sx={{
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
                  <IconBrandGithub color='red' size={22} />
                </Button>
              </Box>
              <Box
                component={motion.div}
                initial={{ scale: 0 }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1 }}
                animate={{ scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 500,
                  damping: 20
                }}>
                <Button
                  onClick={() => window.open('https://instagram.com/loovee_luvi', '_blank')}
                  size='small'
                  sx={{
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
                  <IconBrandInstagram color='red' size={22} />
                </Button>
              </Box>
            </Stack>
          </Box>
        </Box>
        <Box
          sx={{
            width: socialMediaActive ? '10%' : '100%',
            backgroundColor: 'red',
            borderRadius: '5px',
            overflow: 'hidden',
            position: 'absolute',
            top: 356,
            transition: 'ease 0.3s',
          }}
        >
          <Box position='absolute'
            sx={{ top: -8, left: 25, transform: 'rotate(-15deg)' }}>
            <Typography variant='h2'
              sx={{
                textAlign: 'center',
                fontFamily: 'Nunito, Arial, sans-serif',
                fontWeight: 900,
                color: 'black',
              }}>
              <IconBrandInstagram color='black' size={60} />
            </Typography>
          </Box>
          <Box position='absolute'
            sx={{ top: -12, left: 33, transform: 'rotate(-15deg)' }}>
            <Typography variant='h2'
              sx={{
                textAlign: 'center',
                fontFamily: 'Nunito, Arial, sans-serif',
                fontWeight: 900,
                color: 'white',
              }}>
              <IconBrandInstagram color='white' size={60} />
            </Typography>
          </Box>
          <Stack direction='row' alignItems='center' justifyContent='space-between'>
            {!socialMediaActive ?
              <Box
                component={motion.div}
                initial={{ x: 0 }}
                animate={{ x: markSocialMedia ? 20 : 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 500,
                  damping: 20
                }}>
                <IconCaretRightFilled color='white' />
              </Box>
              : null}
            <Box
              component={motion.div}
              whileHover={{ scale: socialMediaActive ? 1 : 1.1, x: socialMediaActive ? 5 : 0 }}
              onHoverStart={() => setMarkSocialMedia(true)}
              onHoverEnd={() => setMarkSocialMedia(false)}
              onTouchStart={() => setMarkSocialMedia(true)}
              onTouchEnd={() => setMarkSocialMedia(false)}
              initial={{ scale: 0 }}
              whileTap={{ scale: 1 }}
              animate={{ scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 500,
                damping: 20
              }}
              sx={{
                height: '40px'
              }}>
              <Button
                onClick={() => setSocialMediaActive(!socialMediaActive)}
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
                <Box width='142px'>
                  <Stack direction='row' alignItems='center' justifyContent='space-between'>
                    <Typography
                      variant='h5'
                      sx={{
                        position: 'absolute',
                        width: '100%',
                        top: '6px',
                        left: '0px',
                        textAlign: 'center',
                        fontFamily: 'Nunito, Arial, sans-serif',
                        fontWeight: 700,
                        color: 'white',
                        WebkitTextStroke: '10px white'
                      }}>
                      {socialMediaActive ?
                        <></>
                        :
                        <>Social Media</>}
                    </Typography>
                    <Typography
                      variant='h5'
                      sx={{
                        position: 'absolute',
                        width: '100%',
                        top: '6px',
                        left: '0px',
                        textAlign: 'center',
                        fontFamily: 'Nunito, Arial, sans-serif',
                        fontWeight: 700,
                        color: 'black',
                        WebkitTextStroke: '5px black',
                      }}>
                      {socialMediaActive ?
                        <></>
                        :
                        <>Social Media</>}
                    </Typography>
                    <Typography
                      variant='h5'
                      sx={{
                        top: 0,
                        left: 0,
                        position: 'relative',
                        textAlign: 'center',
                        fontFamily: 'Nunito, Arial, sans-serif',
                        fontWeight: 700,
                        color: 'white',
                        wordBreak: 'none'
                      }}>
                      <Box
                        component={motion.div}
                        initial={{ scale: 1 }}
                        animate={{ scale: socialMediaActive ? 1 : 0 }}
                        sx={{
                          position: 'absolute',
                          top: 0,
                          lef: 0
                        }}>
                        <IconCaretRightFilled color='white' size={32} style={{ position: 'relative', left: -9, top: -9, transform: 'scale(0.75)' }} />
                      </Box>
                      {!socialMediaActive ?
                        <>Social Media</>
                        : null}
                    </Typography>
                  </Stack>
                </Box>
              </Button>
            </Box>
            {!socialMediaActive ?
              <Box
                component={motion.div}
                initial={{ x: 0 }}
                animate={{ x: markSocialMedia ? -20 : 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 500,
                  damping: 20
                }}>
                <IconCaretLeftFilled color='white' />
              </Box>
              : null}
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}

export default IntroCardContents