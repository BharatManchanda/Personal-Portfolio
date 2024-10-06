import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const BreakpointDetector = (onBreakpointChange) => {
    const theme = useTheme();

    // Define breakpoints using MUI's breakpoints utility
    const isXs = useMediaQuery(theme.breakpoints.down('xs'));
    const isSm = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
    const isMd = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const isLg = useMediaQuery(theme.breakpoints.between('md', 'lg'));
    const isXl = useMediaQuery(theme.breakpoints.up('xl'));
    
    let currentBreakpoint = '';
    if (isXs) currentBreakpoint = 'xs';
    else if (isSm) currentBreakpoint = 'sm';
    else if (isMd) currentBreakpoint = 'md';
    else if (isLg) currentBreakpoint = 'lg';
    else if (isXl) currentBreakpoint = 'xl';

    // Optional callback for parent component to know when the breakpoint changes
    React.useEffect(() => {
        if (onBreakpointChange) {
            onBreakpointChange(currentBreakpoint);
        }
    }, [currentBreakpoint, onBreakpointChange]);

    return currentBreakpoint;
};

export default BreakpointDetector;