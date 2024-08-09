import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundPosition: 'center',
        color: '#fff',
        textAlign: 'center',
        padding: '0 20px',
      }}
    >
        <Typography variant="h2" component="h1" gutterBottom>
            Welcome to My Portfolio
        </Typography>
        <Typography variant="h5" component="p" gutterBottom>
            I'm an aspiring Full Stack Developer passionate about building web applications to help shape the future.
        </Typography>
        <Link to="Projects" smooth={true} duration={500}>
            <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{ mt: 3 }}
            >
                View My Work
            </Button>
        </Link>
    </Box>
  );
};

export default Hero;
