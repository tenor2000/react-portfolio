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
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: 'grab',
            }}
        >
            <CardMedia
                component="img"
                height={height * 0.4}
                image={project.imageUrl}
                alt={project.title}
            />
            <CardContent sx={{ flex: 1, textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', overflow: 'hidden', pb: 1 }}>
                <Typography variant="h5" component="div" color="primary" fontWeight={'bold'}>
                    {project.title}
                </Typography>
                <Typography variant="body2" color="primary" sx={{mb: 1}}>
                    <b>{project.language}</b>
                </Typography>
                <Typography variant="body2" color="white" sx={{ flexGrow: 1, overflowY: 'auto', padding: '0 8px' }}>
                    {project.description}
                </Typography>
            </CardContent>
            
            <Box sx={{ display: 'flex', justifyContent: 'center', pb:1, gap: 2, mt: 1,  }}>
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