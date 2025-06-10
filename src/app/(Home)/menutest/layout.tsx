import SelectMenu from '@/app/components/selectMenu/Menus'
import { Box } from '@mui/material'
import React from 'react'

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <Box
      sx={{
        width: '100vw',
        overflow: 'hidden'
      }}>
      <Box
        sx={{
          display: 'flex',
          width: '155vw'
        }}>
        <SelectMenu />
        {children}
      </Box>
    </Box>
  )
}

export default layout