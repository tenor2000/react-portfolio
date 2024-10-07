import { useState } from 'react';
import { Link } from 'react-scroll'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import PianoIcon from '../assets/grand-piano.svg';

const Header = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const pages = ['DevStack', 'Projects', 'About', 'Resume', 'Contact'];
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };

  
    return (
      <AppBar position="fixed" sx={{ backgroundColor: 'rgba(0, 0, 0, 0.9)'}}>
        <Container maxWidth="lg">
            <Toolbar disableGutters>
                <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 2, img: { height: 30, width: 'auto'}}}>
                    <img src={PianoIcon} alt={'piano-icon'} />
                </Box>
                <Link to="Home" smooth={true} duration={500}>    
                    <Typography
                        variant="h6"
                        noWrap
                        sx={{
                            
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            cursor: 'pointer'
                        }}
                    >
                        JUNG
                    </Typography>
                </Link>
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="navigation menu"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                            
                        }}
                        slotProps={{ 
                            paper: {
                                sx: { 
                                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                                color: 'primary.main',
                                } 
                            }
                        }}
                    >
                        {pages.map((page) => (
                            <Link key = {page} to={`${page}`} smooth={true} duration={500}>
                                <MenuItem onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            </Link>
                        ))}
                    </Menu>
                </Box>
                <Box sx={{ display: { xs: 'flex', md: 'none' }, margin: 1,img: { height: 30, width: 'auto'}}}>
                    <img src={PianoIcon} alt={'piano-icon'} />
                </Box>
                <Link to="Home" smooth={true} duration={500}>
                    <Typography
                        variant="h5"
                        noWrap
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        JUNG
                    </Typography>
                </Link>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page) => (
                        <Link key={page} to={`${page}`} smooth={true} duration={500}>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        </Link>
                    ))}
                </Box>
            </Toolbar>
        </Container>
      </AppBar>
    );
};

export default Header;
