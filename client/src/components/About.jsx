import React from 'react';
import { Box, Typography, Avatar, Grid, Paper } from '@mui/material';


const About = () => {
  return (
    <Box sx={{ 
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
                <Paper elevation={3} sx={{ padding: '20px', backgroundColor: 'rgba(0, 0, 0, 0.7)', color: 'white' }}>
                    <Typography variant="h4" component="h2" gutterBottom>
                        About Me
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Hi, I'm [Your Name], a passionate Full Stack Developer with experience in building web applications. I enjoy solving complex problems and creating intuitive user experiences.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        My skillset includes JavaScript, React, Node.js, Express, and MongoDB. I'm always eager to learn new technologies and improve my skills.
                    </Typography>
                    <Typography variant="body1">
                        When I'm not coding, you can find me exploring new places, reading books, or experimenting with new recipes in the kitchen.
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    </Box>
  );
};

export default About;
