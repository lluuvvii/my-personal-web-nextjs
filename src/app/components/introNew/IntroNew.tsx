import { Box, Button, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import React from 'react'

function IntroNew() {
  return (
    <main style={{ backgroundColor: "#000", color: "#fff", minHeight: "100vh" }}>
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        minHeight="100vh"
        px={2}
      >
        <Typography variant="h2" fontWeight="bold" gutterBottom>
          Halo, Saya <span style={{ color: "#888" }}>Nama Anda</span>
        </Typography>
        <Typography variant="h6" maxWidth="600px" gutterBottom>
          Seorang web developer yang berfokus pada pembuatan pengalaman digital yang bersih, minimalis, dan responsif.
        </Typography>
        <Button
          variant="outlined"
          sx={{
            mt: 4,
            borderColor: "#fff",
            color: "#fff",
            "&:hover": {
              borderColor: "#888",
              color: "#888",
            },
          }}
          component={motion.a}
          href="#"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Lihat Portofolio
        </Button>
      </Box>
    </main>
  )
}

export default IntroNew