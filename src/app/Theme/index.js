"use client";
import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    palette: {
        red:{
            main:'#ff0000',
            light: '#ff0000',
            dark: '#ff0000',
            contrastText: '#ffffff',
        },
        blue:{
            main:'#0000ff',
            contrastText: '#000',
        },
        white:{
            main:'#fff',
            contrastText: '#000',
            light: '#fff',
            dark: '#fff',
        },
        text:{
            white: '#fff'
        }

    },
});

const darkTheme  =  createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#212121', // Dark background color
            paper: '#121212', // Paper background color in dark mode
        },
        red:{
            main:'#ff0000',
            light: '#ff0000',
            dark: '#ff0000',
            contrastText: '#ffffff',
        },
        blue:{
            main:'#0000ff',
            contrastText: '#000',
        },
        white:{
            main:'#fff',
            contrastText: '#000',
            light: '#fff',
            dark: '#fff',
        },
        text:{
            white: '#fff'
        }
    }
})

export {lightTheme, darkTheme};