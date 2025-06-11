'use client'

import SelectMenu from '@/app/components/selectMenu/Menus'
import { Box } from '@mui/material'
import React, { useState } from 'react'

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const [onClose, setOnClose] = useState(false)
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
        <SelectMenu onClose={onClose} setOnClose={setOnClose} />
        {children}
      </Box>
    </Box>
  )
}

export default Layout