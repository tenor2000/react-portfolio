import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box 
        component="footer"
        sx={{ 
            backgroundColor: 'rgba(0, 0, 0, 0.5)', 
            color: '#fff', 
            padding: '10px', 
            textAlign: 'center', 
            bottom: 0,
        }}
    >
        <Typography variant="body2">
            Background Image credit to{' '}
            <Link href="https://backiee.com/wallpaper/space/246787" color="inherit" target="_blank" rel="noopener">
                Jeremiah
            </Link>{' '}
                on{' '}
            <Link href="https://backiee.com/" color="inherit" target="_blank" rel="noopener">
                backiee.com
            </Link>.
        </Typography>
        <Typography variant="body2" sx={{ marginTop: '10px' }}>
            <small>Copyright &copy; 2024, Tenor2000</small>
        </Typography>
    </Box>
  );
};

export default Footer;
