import IntroNew from '@/app/components/introNew/IntroNew'
import SelectMenu from '@/app/components/selectMenu/Menus'
import { Box } from '@mui/material'
import React from 'react'

const page = () => {
  return (
    // <Box
    //   sx={{
    //     width: '100vw',
    //     overflow: 'hidden'
    //   }}>
    //   <Box
    //     sx={{
    //       display: 'flex',
    //       width: '155vw'
    //     }}>
    <>
      {/* <SelectMenu /> */}
      <IntroNew />
    </>
    //   </Box>
    // </Box>
  )
}

export default page