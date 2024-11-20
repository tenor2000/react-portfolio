import React from "react";
import { Box, Typography } from "@mui/material";
import { Button } from "@mui/material";

const Resume = () => {
  return (
    <section id="resume">
      <Box
        className="animation-scroll"
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "auto",
          minHeight: "100vh",
          backgroundPosition: "center",
          color: "#fff",
          padding: "0 20px",
        }}
      >
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          sx={{ marginBottom: "20px" }}
        >
          Resume
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            maxWidth: "700px",
            width: "100%",
          }}
        >
          <Button
            component="a"
            href="/react-portfolio/gj-resume-2024-soft-dev.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </Button>
          <Button
            component="a"
            href="/react-portfolio/gj-resume-2024-soft-dev.pdf"
            download="gj-resume-2024-soft-dev.pdf"
          >
            Download
          </Button>
        </Box>
      </Box>
    </section>
  );
};

export default Resume;
