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

const darkTheme  =  {
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
    }
}

export {lightTheme, darkTheme};