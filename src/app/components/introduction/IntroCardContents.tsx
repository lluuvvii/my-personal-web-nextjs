'use client'

import { Button, Stack, Typography, Box, Slide } from '@mui/material'
import { IconCaretLeftFilled, IconCaretRightFilled, IconExclamationCircle, IconSquareXFilled } from '@tabler/icons-react'
import { motion } from 'framer-motion'
import { useState } from 'react'

const IntroCardContents = () => {
  const [dialogVal, setDialogVal] = useState(0)
  const [askActive, setAskActive] = useState(false)
  const [markQuestions, setMarkQuestions] = useState({ thisWebsite: false, secondOption: false })
  const [questionDialog, setQuestionDialog] = useState({ thisWebsite: false, secondOption: false })
  const [questionActive, setQuestionActive] = useState(false)

  const resetQuestionDialog = () => {
    setQuestionDialog({
      thisWebsite: false,
      secondOption: false
    })
  }

  return (
    <Box>
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
                  Welcome Visitors !!<br/>
                  My Name Is :
                </Typography>
                <Typography
                  variant='h5'
                  sx={{
                    position: 'absolute',
                    textAlign: 'center',
                    top: '115.5px',
                    left: '0px',
                    fontFamily: 'Nunito, Arial, sans-serif',
                    fontWeight: 600,
                    color: 'red',
                    WebkitTextStroke: '8px red'
                  }}>
                  I Love Shollakhuddin Kurniawan
                </Typography>
                <Typography
                  variant='h5'
                  sx={{
                    position: 'absolute',
                    textAlign: 'center',
                    top: '115.5px',
                    left: '0px',
                    fontFamily: 'Nunito, Arial, sans-serif',
                    fontWeight: 600,
                    color: 'black',
                    WebkitTextStroke: '4px black'
                  }}>
                  I Love Shollakhuddin Kurniawan
                </Typography>
                <Typography
                  variant='h5'
                  mt={1}
                  sx={{
                    position: 'relative',
                    textAlign: 'center',
                    fontFamily: 'Nunito, Arial, sans-serif',
                    fontWeight: 600,
                    color: 'white',
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
      <Box
        position='relative'
        component={motion.div}
        initial={{ scale: 0 }}
        animate={{ opacity: !askActive ? 1 : 0, scale: 1 }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 25
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
          : null}
        <Stack
          component={motion.div}
          initial={{ scale: 0 }}
          animate={{ opacity: !askActive ? 1 : 0, scale: questionActive ? 1 : 0 }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 25
          }}
          direction='row'
          justifyContent='center'
          alignItems='center'
          position={questionActive ? 'relative' : 'absolute'}
          top={0}
          left={questionActive ? -120 : -26.5}>
          <Box
            ml={1}
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
              onClick={() => {
                resetQuestionDialog()
                setQuestionActive(false)
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
              <IconSquareXFilled color='red' size={32} />
            </Button>
          </Box>
        </Stack>
      </Box>
      {/* ask me button */}
      <Box
        sx={{
          width: '100%',
          background: 'linear-gradient(100deg, red, #f70000, #d10000)',
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
                    0px 1.5px 3px rgba(150,0,0,1), 
                    0px 1.5px 3px rgba(150,0,0,1), 
                    0px 1.5px 3px rgba(150,0,0,1), 
                    0px 1.5px 3px rgba(150,0,0,1), 
                    0px 1.5px 3px rgba(150,0,0,1), 
                    0px 1.5px 3px rgba(150,0,0,1), 
                    0px 1.5px 3px rgba(150,0,0,1), 
                    0px 1.5px 3px rgba(150,0,0,1), 
                    0px 1.5px 3px rgba(150,0,0,1), 
                    0px 1.5px 3px rgba(150,0,0,1), 
                    0px 1.5px 3px rgba(150,0,0,1), 
                    0px 1.5px 3px rgba(150,0,0,1), 
                    0px 1.5px 3px rgba(150,0,0,1), 
                    0px 1.5px 3px rgba(150,0,0,1), 
                    0px 1.5px 3px rgba(150,0,0,1), 
                    0px 1.5px 3px rgba(150,0,0,1)`
                  }}>
                  {askActive ?
                    <>Close</>
                    :
                    <>Ask Me?</>}
                </Typography>
                <IconCaretLeftFilled color='white' />
              </Stack>
            </Box>
          </Button>
        </Box>
      </Box>
      <Box
        position='absolute'
        component={motion.div}
        initial={{ scale: 0 }}
        animate={{ scale: askActive ? 1 : 0 }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30
        }}
        sx={{
          top: '10px',
          left: '10px',
          borderRadius: '10px',
          // boxShadow: '0px 0px 4px rgba(0,0,0,0.5)'
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
            background: 'linear-gradient(100deg, red, red, #d10000)',
            borderRadius: '10px',
            overflow: 'hidden',
          }}>
          <Box
            position='absolute'
            sx={{ top: -15, left: 157, transform: 'rotate(15deg)' }}>
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
          <Box position='absolute'
            sx={{ top: -19, left: 165, transform: 'rotate(15deg)' }}>
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
          <Typography
            position='relative'
            variant='h5'
            mb={1}
            sx={{
              textAlign: 'center',
              fontFamily: 'Nunito, Arial, sans-serif',
              fontWeight: 700,
              color: 'white',
              textShadow: `
              0px 1.5px 2.5px rgba(0,0,0,1), 
              0px 1.5px 2.5px rgba(0,0,0,1), 
              0px 1.5px 2.5px rgba(0,0,0,1), 
              0px 1.5px 2.5px rgba(0,0,0,1), 
              0px 1.5px 2.5px rgba(0,0,0,1), 
              0px 1.5px 2.5px rgba(0,0,0,1), 
              0px 1.5px 2.5px rgba(0,0,0,1), 
              0px 1.5px 2.5px rgba(0,0,0,1), 
              0px 1.5px 2.5px rgba(0,0,0,1), 
              0px 1.5px 2.5px rgba(0,0,0,1), 
              0px 1.5px 2.5px rgba(0,0,0,1), 
              0px 1.5px 2.5px rgba(0,0,0,1), 
              0px 1.5px 2.5px rgba(0,0,0,1), 
              0px 1.5px 2.5px rgba(0,0,0,1), 
              0px 1.5px 2.5px rgba(0,0,0,1), 
              0px 1.5px 2.5px rgba(0,0,0,1)`
            }}>Ask Me About :</Typography>
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
                <Button
                  component={motion.div}
                  whileHover={{ scale: 1.1 }}
                  initial={{ scale: 0 }}
                  whileTap={{ scale: 1 }}
                  onHoverStart={() => setMarkQuestions((prevState) => ({ ...prevState, thisWebsite: true }))}
                  onHoverEnd={() => setMarkQuestions((prevState) => ({ ...prevState, thisWebsite: false }))}
                  onTouchStart={() => setMarkQuestions((prevState) => ({ ...prevState, thisWebsite: true }))}
                  onTouchEnd={() => setMarkQuestions((prevState) => ({ ...prevState, thisWebsite: false }))}
                  animate={{ scale: 1 }}
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
                    variant='h6'
                    sx={{
                      textAlign: 'center',
                      fontFamily: 'Nunito, Arial, sans-serif',
                      fontWeight: 700,
                      color: 'white',
                      textShadow: `
              0px 1.5px 2.5px rgba(200,0,0,1), 
              0px 1.5px 2.5px rgba(200,0,0,1), 
              0px 1.5px 2.5px rgba(200,0,0,1), 
              0px 1.5px 2.5px rgba(200,0,0,1), 
              0px 1.5px 2.5px rgba(200,0,0,1), 
              0px 1.5px 2.5px rgba(200,0,0,1), 
              0px 1.5px 2.5px rgba(200,0,0,1), 
              0px 1.5px 2.5px rgba(200,0,0,1), 
              0px 1.5px 2.5px rgba(200,0,0,1), 
              0px 1.5px 2.5px rgba(200,0,0,1), 
              0px 1.5px 2.5px rgba(200,0,0,1), 
              0px 1.5px 2.5px rgba(200,0,0,1), 
              0px 1.5px 2.5px rgba(200,0,0,1), 
              0px 1.5px 2.5px rgba(200,0,0,1), 
              0px 1.5px 2.5px rgba(200,0,0,1), 
              0px 1.5px 2.5px rgba(200,0,0,1)`
                    }}>
                    This Website
                  </Typography>
                </Button>
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
                <Button
                  component={motion.div}
                  whileHover={{ scale: 1.1 }}
                  initial={{ scale: 0 }}
                  whileTap={{ scale: 1 }}
                  onHoverStart={() => setMarkQuestions((prevState) => ({ ...prevState, secondOption: true }))}
                  onHoverEnd={() => setMarkQuestions((prevState) => ({ ...prevState, secondOption: false }))}
                  onTouchStart={() => setMarkQuestions((prevState) => ({ ...prevState, secondOption: true }))}
                  onTouchEnd={() => setMarkQuestions((prevState) => ({ ...prevState, secondOption: false }))}
                  animate={{ scale: 1 }}
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
                    variant='h6'
                    sx={{
                      textAlign: 'center',
                      fontFamily: 'Nunito, Arial, sans-serif',
                      fontWeight: 700,
                      color: 'white',
                      textShadow: `
              0px 1.5px 2.5px rgba(200,0,0,1), 
              0px 1.5px 2.5px rgba(200,0,0,1), 
              0px 1.5px 2.5px rgba(200,0,0,1), 
              0px 1.5px 2.5px rgba(200,0,0,1), 
              0px 1.5px 2.5px rgba(200,0,0,1), 
              0px 1.5px 2.5px rgba(200,0,0,1), 
              0px 1.5px 2.5px rgba(200,0,0,1), 
              0px 1.5px 2.5px rgba(200,0,0,1), 
              0px 1.5px 2.5px rgba(200,0,0,1), 
              0px 1.5px 2.5px rgba(200,0,0,1), 
              0px 1.5px 2.5px rgba(200,0,0,1), 
              0px 1.5px 2.5px rgba(200,0,0,1), 
              0px 1.5px 2.5px rgba(200,0,0,1), 
              0px 1.5px 2.5px rgba(200,0,0,1), 
              0px 1.5px 2.5px rgba(200,0,0,1), 
              0px 1.5px 2.5px rgba(200,0,0,1)`
                    }}>
                    yayayayaya
                  </Typography>
                </Button>
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
    </Box>
  )
}

export default IntroCardContents