import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import { aboutTextBody, aboutTextTitle } from "../constants/sectionTexts";

const About = () => {
  return (
    <section id="about">
      <Box
        className="animation-scroll"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "50px 20px",
          maxWidth: "800px",
          margin: "0 auto",
          minHeight: "100vh",
        }}
      >
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          justifyContent="center"
          alignItems="center"
          gap={4}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "auto" },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Avatar
              alt="Gregory Jung"
              src="https://source.unsplash.com/random/200x200"
              sx={{
                width: 200,
                height: 200,
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                border: "1px solid rgba(255, 255, 255, 0.5)",
              }}
            />
          </Box>
          <Box
            sx={{
              flex: 1,
              padding: "20px",
              borderRadius: "10px",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
              color: "primary.main",
              border: "1px solid rgba(255, 255, 255, 0.5)",
            }}
          >
            <Typography variant="h4" component="h2" gutterBottom>
              {aboutTextTitle}
            </Typography>
            <Typography variant="body1">{aboutTextBody}</Typography>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default About;
