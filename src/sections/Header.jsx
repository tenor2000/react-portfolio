import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import PianoIcon from "../assets/grand-piano.svg";
import { headerText } from "../constants/sectionTexts";
import Icon from "@mui/material/Icon";

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 64);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const pages = [
    { name: "DevStack", iconUrl: "" },
    { name: "Projects", iconUrl: "" },
    { name: "About", iconUrl: "" },
    { name: "Resume", iconUrl: "" },
    { name: "Contact", iconUrl: "" },
  ];

  const handleToggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
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
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
              }}
            >
              <IconButton
                size="large"
                aria-label="navigation menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleToggleDrawer}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={handleToggleDrawer}
                sx={{
                  width: "100vw",
                  height: "100vh",
                  "& .MuiDrawer-paper": {
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    color: "primary.main",
                  },
                }}
              >
                <Box
                  onClick={handleToggleDrawer}
                  onKeyDown={handleToggleDrawer}
                  sx={{
                    display: "flex",
                    alignItems: "left",
                    flexDirection: "column",
                    width: "full",
                    height: "100%",
                    gap: 3,
                    padding: 3,
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  <Link to="Home" smooth={true} duration={500}>
                    <MenuItem onClick={handleToggleDrawer}>
                      <Typography
                        textAlign="center"
                        textTransform={"uppercase"}
                        variant="h4"
                        sx={{
                          color: "primary.main",
                          ":after": {
                            content: "''",
                            display: "block",
                            width: "full",
                            height: "2px",
                            backgroundColor: "primary.main",
                            marginBottom: "10px",
                          },
                        }}
                      >
                        Home
                      </Typography>
                    </MenuItem>
                  </Link>
                  {pages.map((page) => (
                    <Link
                      key={page.name}
                      to={page.name}
                      smooth={true}
                      duration={500}
                    >
                      <MenuItem onClick={handleToggleDrawer}>
                        <Typography
                          variant="h5"
                          textAlign="center"
                          textTransform={"uppercase"}
                        >
                          {/* <img
                            src={page.iconUrl}
                            style={{
                              height: 30,
                              width: "auto",
                              marginRight: 10,
                            }}
                          /> */}
                          <Icon>-</Icon>
                          {page.name}
                        </Typography>
                      </MenuItem>
                    </Link>
                  ))}
                </Box>
              </Drawer>
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
                <Box
                  key={page.name}
                  sx={{ display: { xs: "none", md: "flex" } }}
                >
                  <Link
                    to={page.name}
                    spy
                    smooth
                    activeClass="nav-active"
                    duration={1000}
                    className="nav-link"
                    style={{
                      textTransform: "uppercase",
                    }}
                  >
                    {page.name}
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
