import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-scroll";
import { heroTextBody, heroTextTitle } from "../data/sectionTexts";

const Hero = () => {
  return (
    <section id="hero">
      <Box
        className="animation-appear"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundPosition: "center",
          minHeight: "100vh",
          color: "#fff",
          textAlign: "center",
          padding: "0 20px",
        }}
      >
        <Box
          sx={{
            padding: "0 20px",
            transition: "background-color 0.3s ease",
            maxWidth: "700px",
            borderRadius: "10px",
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              textShadow:
                "2px 2px 8px rgba(0, 0, 0, .8), -2px -2px 8px rgba(0, 0, 0, 0.8)",
            }}
          >
            {heroTextTitle}
          </Typography>
          <Typography
            variant="h5"
            component="p"
            gutterBottom
            sx={{
              textShadow:
                "2px 2px 8px rgba(0, 0, 0, 0.8), -2px -2px 8px rgba(0, 0, 0, 0.8)",
            }}
          >
            {heroTextBody}
          </Typography>
        </Box>
        <Link to="Projects" smooth={true} duration={500}>
          <Button>View My Work</Button>
        </Link>
      </Box>
    </section>
  );
};

export default Hero;
