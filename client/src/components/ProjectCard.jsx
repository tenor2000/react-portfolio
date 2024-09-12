import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Button, useMediaQuery } from '@mui/material';

function ProjectCard({ project }) {
    const isMobile = useMediaQuery('(max-height: 600px)');

    const height = isMobile ? 350 : 450;
    const width = isMobile ? 250 : 300;


    return (
        <Card sx={{ 
                maxWidth: width,
                maxHeight: height,
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                color: 'white',
                borderRadius: '10px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)'
            }}
        >
            <CardMedia
                component="img"
                height={height * 0.4}
                image={project.imageUrl}
                alt={project.title}
            />
            <Typography variant="h5" component="div" sx={{ textAlign: 'center' }}>
                {project.title}
            </Typography>
            <CardContent sx={{ textAlign: 'center', height: height * 0.3, overflow: 'auto'  }}>
                <Typography variant="body2" color="primary">
                    {project.description}
                </Typography>
                <Typography variant="body2" color="primary">
                    <b>{project.language}</b>
                </Typography>
            </CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'center', pb: 2, gap: 2, mt: 2 }}>
                <Button 
                    component="a" 
                    size="small" 
                    variant="contained" 
                    color="primary" 
                    href={project.link} 
                    target="_blank"
                >
                    Live Demo
                </Button>
                <Button    
                    component="a" 
                    size="small" 
                    variant="contained" 
                    color="primary" 
                    href={project.codelink} 
                    target="_blank"
                >
                    Code
                </Button>
            </Box>
        </Card>
    );
}

export default ProjectCard;