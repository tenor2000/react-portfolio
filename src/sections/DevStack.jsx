import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import devStackData from "../data/devStackData.json";

const DevStack = () => {
  return (
    <Box
      className="animation-scroll"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "50px 20px",
        margin: "0 auto",
        minHeight: "100vh",
        gap: 2,
      }}
    >
      <Box
        sx={{
          color: "white",
          padding: "10px",
          borderRadius: "10px",
          maxWidth: "300px",
          width: "100%",
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          textAlign="center"
          sx={{
            textShadow:
              "2px 2px 8px rgba(0, 0, 0, 0.6), -2px -2px 8px rgba(0, 0, 0, 0.6)",
          }}
        >
          Development Stack
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: "1000px",
          width: "100%",
          gap: 5,
          flexWrap: "wrap",
        }}
      >
        {devStackData.map((devItem, index) => (
          <Paper
            key={index}
            sx={{
              background: "linear-gradient(#3c52d9, #0c1838)",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.5s ease",
              "&:hover": {
                background:
                  "linear-gradient(rgba(196, 203, 245, 0.8), transparent)",
              },
            }}
          >
            <Box
              tooltip={devItem.name}
              component="a"
              href={devItem.link}
              target="_blank"
              rel="noopener"
              sx={{
                width: "75px",
                height: "75px",
                margin: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                "& img": {
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.2)",
                  },
                },
              }}
            >
              <img src={devItem.wordmark} alt={devItem.name} />
            </Box>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default DevStack;
