'use client';

import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

const menuItems = ['INTRODUCTION', 'PROJECTS', 'GALLERIES', 'JOURNEY', 'CONTACT ME'];

export default function SelectMenu() {
  const router = useRouter()
  const [selectedIndex, setSelectedIndex] = useState(0);
  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    menuRef.current?.focus();
  }, []);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLUListElement>) => {
    if (event.key === 'ArrowDown') {
      setSelectedIndex((prev) => (prev + 1) % menuItems.length);
    } else if (event.key === 'ArrowUp') {
      setSelectedIndex((prev) => (prev - 1 + menuItems.length) % menuItems.length);
    } else if (event.key === 'Enter') {
      alert(`Selected: ${menuItems[selectedIndex]}`);
    }
  };

  return (
    <div style={{ overflow: 'hidden', perspective: '500px', height: '100vh' }}>
      <Box sx={{ position: 'relative', transform: 'rotateY(-15deg)' }}>
        {menuItems.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, rotate: '5deg' }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0 }}
          >
            <motion.div initial={{ rotate: `${index * 2}deg` }}>
              <AnimatePresence mode="wait">
                {selectedIndex === index && (
                  <Box
                    component={motion.div}
                    initial={{ width: '0%' }}
                    animate={{ width: '120%' }}
                    exit={{ width: '0%' }}
                    sx={{
                      position: "absolute",
                      inset: 0,
                      width: "100vw",
                      height: { xs: "2rem", sm: "2.5rem", md: "3rem", lg: "3.5rem" },
                      backgroundColor: "#ef4444"
                    }}
                    transition={{ duration: 0.1, ease: 'easeInOut' }}
                  />
                )}
              </AnimatePresence>
              <Typography
                component={motion.div}
                onHoverStart={() => setSelectedIndex(index)}
                onTouchStart={() => setSelectedIndex(index)}
                variant="h4"
                sx={{
                  fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" },
                  fontFamily: "Oswald, serif",
                  marginLeft: "20%",
                  fontWeight: "bold",
                  transform: 'scale(1.5, 1)', // font stretch
                  textAlign: "start",
                  position: "relative",
                  color: `${selectedIndex === index ? 'white' : 'black'}`
                }}>{item}</Typography>
            </motion.div>
          </motion.div>
        ))}
      </Box>
    </div>
  );
}
