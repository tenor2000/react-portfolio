import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import devStackData from '../data/devStackData.json';


// const techIcons = [
//     'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg',
//     'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
//     'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg',
//     'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg',
//     'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg',
//     'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg',
//     'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg',
//     'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg',
//     'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg',
//     'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg',
// ]

const DevStack = () => {
    return (
        <Box
            className="animation-scroll"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '50px 20px',
                margin: '0 auto',
                minHeight: '100vh',
                gap: 2,
            }}
        >
            <Box
                sx={{
                    color: 'white',
                    padding: '10px',
                    borderRadius: '10px',
                    maxWidth: '300px',
                    width: '100%',
                }}
            >
                <Typography variant="h4" component="h2" textAlign="center" 
                    sx={{ textShadow: 
                        '2px 2px 8px rgba(0, 0, 0, 0.6), -2px -2px 8px rgba(0, 0, 0, 0.6)'
                    }}
                >
                    Development Stack
                </Typography>
            </Box>
            <Box 
                sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    maxWidth: '1000px', 
                    width: '100%', 
                    gap: 10,
                    flexWrap: 'wrap',
                }}    
            >
                
                {devStackData.map((devItem, index) => (
                    <Paper
                        key={index}
                        sx={{
                            backgroundColor: 'primary.main',
                            borderRadius: '10px',

                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'background-color 0.3s ease',
                            '&:hover': {
                                backgroundColor: '#f5f5f5',
                                transition: 'background-color 0.3s ease',
                                
                            },
                        }}
                    >
                        <Box
                            tooltip={devItem.name}
                            sx={{
                                width: '100px',
                                height: '100px',
                                margin: '15px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                '& img': {
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                    transition: 'transform 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.1)',
                                    },
                                },
                            }}
                        >
                            <img src={devItem.link} alt={devItem.name} />
                        </Box>
                    </Paper>
                ))}

            </Box>
        </Box>
    );
};

export default DevStack;