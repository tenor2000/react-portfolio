import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';

function ProjectCard({ project }) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={project.imageUrl}
                alt={project.title}
            />
            <CardContent>
                <Typography variant="h5" component="div">
                    {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {project.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <b>{project.language}</b>
                </Typography>
            </CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'center', pb: 2, gap: 2 }}>
                <Button size="small" variant="contained" color="primary" href={project.link}>
                    Live Demo
                </Button>
                <Button size="small" variant="contained" color="primary" href={project.codelink}>
                    Code
                </Button>
            </Box>
        </Card>
    );
}

export default ProjectCard;