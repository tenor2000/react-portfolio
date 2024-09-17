import React from 'react';
import { Box, Typography } from '@mui/material';

const Resume = () => {
    return (
        <Box
            className="animation-scroll"
            sx={{ 
                textAlign: 'center', 
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                backgroundPosition: 'center',
                color: '#fff',
                textAlign: 'center',
                padding: '0 20px' 
            }}
        >
            <Typography
                variant="h3"
                component="h2"
                gutterBottom
                sx={{ marginBottom: '20px' }}
            >
                Resume
            </Typography>
        </Box>
    );
};

export default Resume;