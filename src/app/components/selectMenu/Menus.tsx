'use client';

import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Box, List, ListItem, ListItemText } from '@mui/material';
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
    <div>
      <List
        ref={menuRef}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        className="text-center space-y-4 outline-none font-sans"
      >
        {menuItems.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <ListItem
              onClick={() => router.push('/test')}
              onMouseEnter={() => setSelectedIndex(index)}
              className={`relative justify-center cursor-pointer ${selectedIndex === index ? 'text-white' : ''}`}
            >
              <AnimatePresence mode="wait">
                {selectedIndex === index && (
                  <motion.div
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    exit={{ width: '0%' }}
                    className="absolute inset-0 w-screen bg-red-500"
                    transition={{ duration: 0.1, ease: 'easeInOut' }}
                  />
                )}
              </AnimatePresence>
              <ListItemText
                primary={
                  <h1 className="relative z-10 text-xl font-bold font-sans">{item}</h1>
                }
              />
            </ListItem>
          </motion.div>
        ))}
      </List>
      <>{selectedIndex}</>
      {/* Flip Card */}
      {/* FLIP CARD */}
      <Box
        sx={{
          width: '300px',
          height: '300px',
          margin: '50px auto',
          perspective: '1000px',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: '100%',
            textAlign: 'center',
            transition: 'transform 0.6s',
            transformStyle: 'preserve-3d',
            boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
            '&:hover': {
              transform: 'rotateY(180deg)',
            },
          }}
        >
          {/* FRONT SIDE */}
          <Box
            sx={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              backgroundColor: '#bbb',
              color: 'black',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px',
              fontWeight: 'bold',
              backfaceVisibility: 'hidden',
            }}
          >
            FRONT SIDE
          </Box>

          {/* BACK SIDE */}
          <Box
            sx={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              backgroundColor: '#2980b9',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px',
              fontWeight: 'bold',
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
          >
            BACK SIDE
          </Box>
        </Box>
      </Box>
    </div>
  );
}
