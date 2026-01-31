'use client';
import './globals.css';
import { Box, IconButton, ThemeProvider, Typography } from '@mui/material';
import { lightTheme } from './Theme';
import { darkTheme } from './Theme';
import { Header } from './Common/Dependent/Header';
import { createContext, useEffect, useState } from 'react';
import Footer from './Common/Dependent/Footer';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import 'animate.css';
import { ToastContainer } from 'react-toastify';

export const AppContext = createContext();

export default function RootLayout({ children }) {
  const [mode, setMode] = useState('light');
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <html lang="en">
      <title>Bharat Manchanda | Full Stack Developer</title>
      <link rel="icon" type="image/png" href="/favicon.png" />
      <body
        className={`bg-${mode == 'dark' ? 'gray-900' : 'white'} text-${mode == 'dark' ? 'white' : 'black'}`}>
        <ToastContainer />
        <AppContext.Provider value={{ mode }}>
          <ThemeProvider theme={mode == 'dark' ? darkTheme : lightTheme}>
            <Box mx={{ lg: 15, xs: 2 }} my={1}>
              <Header mode={mode} setMode={setMode} />
              {children}
            </Box>
            <Box px={{ lg: 15, xs: 2 }} py={1} bgcolor={'#121212'}>
              <Footer />
            </Box>
            <Box px={{ lg: 15, xs: 2 }} py={2} bgcolor={'#000'} className="flex justify-center">
              <Typography variant="body1" color="white">
                Copyright @2023 All Right Reserved
              </Typography>
            </Box>
            {isVisible && (
              <IconButton
                color="primary"
                onClick={scrollToTop}
                sx={{
                  position: 'fixed',
                  bottom: '5%',
                  right: '3%',
                  zIndex: '1000',
                  background: '#ebebff',
                  ':hover': {
                    background: '#0000ffff',
                  },
                }}>
                <KeyboardArrowUpIcon />
              </IconButton>
            )}
          </ThemeProvider>
        </AppContext.Provider>
      </body>
    </html>
  );
}
