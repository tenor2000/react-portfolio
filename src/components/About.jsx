import React from 'react';
import { Box, Typography, Avatar, Grid, Paper, useMediaQuery } from '@mui/material';


const About = () => {
  return (
    <Box
        className="animation-scroll" 
        sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center',
            padding: '50px 20px', 
            maxWidth: '800px',
            margin: '0 auto', 
            height: '100vh'
        }}
    >
        <Box 
            display="flex" 
            flexDirection={{ xs: 'column', md: 'row' }} 
            justifyContent="center" 
            alignItems="center" 
            gap={4}
        >
            <Box 
                sx={{ 
                    width: { xs: '100%', md: 'auto' }, 
                    display: 'flex', 
                    justifyContent: 'center',
                }}
            >
                <Avatar
                    alt="Gregory Jung"
                    src="https://source.unsplash.com/random/200x200"
                    sx={{ width: 200, height: 200, backgroundColor: 'rgba(0, 0, 0, 0.7)', border: '1px solid rgba(255, 255, 255, 0.5)', }}
                />
            </Box>
            <Box 
                sx={{ 
                    flex: 1,
                    padding: '20px', 
                    borderRadius: '10px', 
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' },
                    color: 'primary.main',
                    border: '1px solid rgba(255, 255, 255, 0.5)',
                }}
            >
                <Typography variant="h4" component="h2" gutterBottom>
                    About Me
                </Typography>
                <Typography variant="body1" >
                    Hi, I'm Greg, a passionate Full Stack Developer with experience in building web applications. I enjoy solving complex problems and creating intuitive user experiences.
                </Typography>
                <Typography variant="body1" >
                    My skillset includes Python, JavaScript, React, Node.js, Express, and PostgreSQL. I'm always eager to learn new technologies and improve my skills.
                </Typography>
                <Typography variant="body1">
                    When I'm not coding, you can find me exploring new places, reading books, or experimenting with new recipes in the kitchen.
                </Typography>
            </Box>
        </Box>
    </Box>
  );
};

export default About;
