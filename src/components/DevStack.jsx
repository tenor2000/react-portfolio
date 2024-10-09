import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import devStackData from '../data/devStackData.json';

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
                            border: '1px solid rgba(255, 255, 255, 0.5)',
                        }}
                    >
                        <Box
                            tooltip={devItem.name}
                            component="a"
                            href={devItem.link}
                            target="_blank"
                            rel="noopener"
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
                            <img src={devItem.iconLink} alt={devItem.name} />
                        </Box>
                    </Paper>
                ))}

            </Box>
        </Box>
    );
};

export default DevStack;
