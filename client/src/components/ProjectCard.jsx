import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Button, useMediaQuery, IconButton } from '@mui/material';
import gitHubIcon from '../assets/github-mark.svg';
import newTabIcon from '../assets/new-tab-svgrepo-com.svg';


function ProjectCard({ project }) {
    const isMobile = useMediaQuery('(max-height: 600px)');

    const height = isMobile ? 350 : 450;
    const width = isMobile ? 250 : 300;


    return (
        <Card sx={{ 
                maxWidth: width,
                maxHeight: height,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' },
                transition: 'background-color 0.3s ease',
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
                <Typography variant="body2" color="skyblue" sx={{ flexGrow: 1, overflowY: 'auto', padding: '0 8px' }}>
                    {project.description}
                </Typography>
            </CardContent>
            
            <Box sx={{ display: 'flex', justifyContent: 'center', pb:1, gap: 2, mt: 1,  }}>
                <Button 
                    component="a" 
                    size="small" 
                    variant="outlined" 
                    color="primary" 
                    href={project.link} 
                    target="_blank"
                    startIcon={
                        <img src={newTabIcon} alt="New Tab" style={{ width: 24, height: 24 }} />
                    }
                >
                    Demo
                </Button>
                <Button    
                    component="a" 
                    size="small" 
                    variant="outlined" 
                    color="primary" 
                    href={project.codelink} 
                    target="_blank"
                    startIcon={<img src={gitHubIcon} alt="GitHub" style={{ width: 24, height: 24 }} />}
                >
                    GitHub
                </Button>
            </Box>
        </Card>
    );
}

export default ProjectCard;