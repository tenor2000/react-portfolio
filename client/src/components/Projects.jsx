import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import ProjectCard from './ProjectCards';
import projects from '../data/projectData.json';

const Projects = () => {
  return (
    <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center',
            padding: '50px 20px', 
            margin: '0 auto', 
            minHeight: '100vh'
        }}
    >
        <Typography variant="h4" component="h2" textAlign="center" gutterBottom>
            My Projects
        </Typography>
        <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 4}}>
            {projects.map((project, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <ProjectCard project={project} />
                </Grid>
            ))}
        </Box>
    </Box>
  );
};

export default Projects;
