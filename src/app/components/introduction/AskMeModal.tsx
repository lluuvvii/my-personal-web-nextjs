'use client'

import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { IconCaretDownFilled } from '@tabler/icons-react'

const AskMeModal = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const [askActive, setAskActive] = useState(false)
  const [askAbout, setAskAbout] = useState(searchParams.get('ask') !== null ? searchParams.get('ask') : '')

  const handleAskAbout = () => {
    router.push(`${pathname}?ask=${askAbout}`, { scroll: false })
  }

  return (
    <>
      <Box
        sx={{ position: 'relative' }}
        component={motion.div}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 20
        }}>
        {/* circle */}
        <Box
          sx={{
            position: 'absolute',
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'black',
            top: '0px',
            left: '5px',
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
            backgroundColor: 'black',
            top: '0px',
            left: '25px',
          }}
        >
        </Box>
        <Box
          sx={{
            position: 'absolute',
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'red',
            top: '5px',
            left: '50px',
          }}
        >
        </Box>
        <Box
          sx={{
            position: 'absolute',
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'transparent',
            border: '3px solid red',
            top: '15px',
            left: '70px',
          }}
        >
        </Box>
        {/* striped circle */}
        <Box
          sx={{
            position: 'absolute',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'repeating-linear-gradient(45deg, white, white, 4px, transparent 4px, transparent 7px)',
            filter: 'drop-shadow(-2px 2px 2px rgba(0,0,0,0.5))',
            top: '5px',
            left: '-10px',
          }}>
        </Box>
        {/* spike */}
        <Box
          sx={{
            position: 'absolute',
            width: '40px',
            height: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'red',
            clipPath: 'polygon(100% 50%,83.81% 59.06%,93.3% 75%,74.75% 74.75%,75% 93.3%,59.06% 83.81%,50% 100%,40.94% 83.81%,25% 93.3%,25.25% 74.75%,6.7% 75%,16.19% 59.06%,0% 50%,16.19% 40.94%,6.7% 25%,25.25% 25.25%,25% 6.7%,40.94% 16.19%,50% 0%,59.06% 16.19%,75% 6.7%,74.75% 25.25%,93.3% 25%,83.81% 40.94%)',
            top: '10px',
            left: '0px'
          }}
        >
        </Box>
        {/* ask me button */}
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
            onClick={() => {
              setAskActive(!askActive)
            }}
            size='small'
            sx={{
              color: 'grey',
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
            <Typography
              variant='h6'
              sx={{
                textAlign: 'center',
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
              }}>
              Ask Me?
            </Typography>
          </Button>
        </Box>
      </Box>
      {/* ask about modal */}
      <Box
        sx={{
          position: 'asbolute',
          top: '0px',
          left: '-100px',
          mt: '10px'
        }}
        component={motion.div}
        initial={{ x: 500, y: 500 }}
        animate={{ x: askActive ? 0 : 500, y: askActive ? 0 : 500 }}
        transition={{
          type: 'keyframes',
        }}
      >
        {/* star long shadow */}
        <Box
          sx={{
            position: 'relative',
            '& svg': {
              filter: 'drop-shadow(-2px 3px 10px rgba(0,0,0,0.5))',
            }
          }}>
          <div style={{ transform: 'scale(0.1) rotate(315deg)', width: '1px', height: '1px' }}>
            <svg
              width='200px'
              height='500px'
              fill={'red'}
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect x='0' y='80' width='100%' height='100%' fill={'red'} />
              <path d='M100 0.587l30.52 66.76L200 81.25l-50 48.5L161.92 200 100 165.83 38.08 200 50 129.75 0 81.25l69.44-13.29z' />
              <path d='M100 0.587l30.52 66.76L200 81.25l-50 48.5L161.92 200 100 165.83 38.08 200 50 129.75 0 81.25l69.44-13.29z' transform='scale(0.7) translate(42.5, 47)' fill='white' />
            </svg>
          </div>
        </Box>
        <Box
          sx={{
            position: 'relative',
            '& svg': {
              filter: 'drop-shadow(-2px 3px 10px rgba(0,0,0,0.5))',
            },
            left: '30px',
            top: '0px'
          }}>
          <div style={{ transform: 'scale(0.2) rotate(315deg)', width: '1px', height: '1px' }}>
            <svg
              width='200px'
              height='400px'
              fill={'black'}
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect x='0' y='80' width='100%' height='100%' fill={'black'} />
              <path d='M100 0.587l30.52 66.76L200 81.25l-50 48.5L161.92 200 100 165.83 38.08 200 50 129.75 0 81.25l69.44-13.29z' />
              <path d='M100 0.587l30.52 66.76L200 81.25l-50 48.5L161.92 200 100 165.83 38.08 200 50 129.75 0 81.25l69.44-13.29z' transform='scale(0.7) translate(42.5, 47)' fill='white' />
            </svg>
          </div>
        </Box>
        <Box
          sx={{
            position: 'relative',
            '& svg': {
              filter: 'drop-shadow(-2px 3px 10px rgba(0,0,0,0.5))',
            },
            left: '-30px',
            top: '10px'
          }}>
          <div style={{ transform: 'scale(0.15) rotate(315deg)', width: '1px', height: '1px' }}>
            <svg
              width='200px'
              height='400px'
              fill={'#ffc800'}
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect x='0' y='80' width='100%' height='100%' fill={'#ffc800'} />
              <path d='M100 0.587l30.52 66.76L200 81.25l-50 48.5L161.92 200 100 165.83 38.08 200 50 129.75 0 81.25l69.44-13.29z' />
              <path d='M100 0.587l30.52 66.76L200 81.25l-50 48.5L161.92 200 100 165.83 38.08 200 50 129.75 0 81.25l69.44-13.29z' transform='scale(0.7) translate(42.5, 47)' fill='white' />
            </svg>
          </div>
        </Box>
        <Box
          sx={{ position: 'absolute', width: '200px', mt: '10px' }}>
          <Accordion>
            <AccordionSummary
              expandIcon={<IconCaretDownFilled color='blue' />}
            >
              Ask Me About :
            </AccordionSummary>
            <AccordionDetails>
              yayaya
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </>
  )
}

export default AskMeModal