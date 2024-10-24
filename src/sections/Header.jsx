import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import PianoIcon from "../assets/grand-piano.svg";
import { headerText } from "../data/sectionTexts";

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 64);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const pages = ["DevStack", "Projects", "About", "Resume", "Contact"];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <section id="header">
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: `rgba(0, 0, 0, ${hasScrolled ? 0.9 : 0})`,
          transition: "background-color 0.5s ease, height 0.5s ease",
          boxShadow: "none",
          height: hasScrolled ? "64px" : "100px",
          justifyContent: "center",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Toolbar
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "inherit",
            }}
          >
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
                slotProps={{
                  paper: {
                    sx: {
                      backgroundColor: "rgba(0, 0, 0, 0.8)",
                      color: "primary.main",
                    },
                  },
                }}
              >
                <Link to="Home" smooth={true} duration={500}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" textTransform={"uppercase"}>
                      Home
                    </Typography>
                  </MenuItem>
                </Link>
                {pages.map((page) => (
                  <Link key={page} to={page} smooth={true} duration={500}>
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography
                        textAlign="center"
                        textTransform={"uppercase"}
                      >
                        {page}
                      </Typography>
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: { xs: "right", md: "space-evenly" },
                alignItems: "center",
                width: "full",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Link
                  to="Home"
                  spy
                  smooth={true}
                  duration={500}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    cursor: "pointer",
                    "&:hover": {
                      color: "main.primary",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      mr: 2,
                      img: { height: 30, width: "auto" },
                    }}
                  >
                    <img src={PianoIcon} alt={"piano-icon"} />
                  </Box>
                  <Typography
                    variant="h5"
                    noWrap
                    sx={{
                      display: "flex",
                      fontFamily: "monospace",
                      fontWeight: 700,
                      letterSpacing: ".3rem",
                      color: "main.primary",
                      textTransform: "uppercase",
                    }}
                  >
                    {headerText}
                  </Typography>
                </Link>
              </Box>
              {pages.map((page) => (
                <Box sx={{ display: { xs: "none", md: "flex" } }}>
                  <Link
                    key={page}
                    onClick={handleCloseNavMenu}
                    to={page}
                    spy
                    smooth
                    activeClass="nav-active"
                    duration={1000}
                    className="nav-link"
                    style={{
                      textTransform: "uppercase",
                    }}
                  >
                    {page}
                  </Link>
                </Box>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </section>
  );
};

export default Header;
