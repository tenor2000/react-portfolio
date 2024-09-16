import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-scroll';
// import '../styles/index.css'

const Hero = () => {
  return (
    <Box
      className="animation-appear"
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
      <Box sx={{ 
        padding: '0 20px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' },
        transition: 'background-color 0.3s ease',
        maxWidth: '700px',
        borderRadius: '10px' }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
            Welcome to My Portfolio
        </Typography>
        <Typography variant="h5" component="p" gutterBottom>
            I'm an aspiring Full Stack Developer passionate about building web applications to help shape the future.
        </Typography>
      </Box>
      <Link to="Projects" smooth={true} duration={500}>
            <Button
                variant="outlined"
                color="primary"
                size="large"
                sx={{ mt: 3, backgroundColor: 'rgba(0, 0, 0, 0.5)', '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' } }}
            >
                View My Work
            </Button>
        </Link>
    </Box>
  );
};

export default Hero;
