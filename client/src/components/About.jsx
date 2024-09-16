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
        <Grid container spacing={4} justifyContent="center" alignItems="center">
            <Grid item xs={12} md={4}>
                <Avatar
                    alt="Your Name"
                    src="https://source.unsplash.com/random/200x200"
                    sx={{ width: 200, height: 200, margin: '0 auto', backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
                />
            </Grid>
            <Grid item xs={12} md={8}>
                <Box 
                    sx={{ padding: '20px', 
                        borderRadius: '10px', 
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' },
                        color: 'primary.main' }}
                >
                    <Typography variant="h4" component="h2" gutterBottom>
                        About Me
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Hi, I'm Greg, a passionate Full Stack Developer with experience in building web applications. I enjoy solving complex problems and creating intuitive user experiences.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        My skillset includes Python, JavaScript, React, Node.js, Express, and PostgreSQL. I'm always eager to learn new technologies and improve my skills.
                    </Typography>
                    <Typography variant="body1">
                        When I'm not coding, you can find me exploring new places, reading books, or experimenting with new recipes in the kitchen.
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    </Box>
  );
};

export default About;
