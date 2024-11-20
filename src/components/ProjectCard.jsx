import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  useMediaQuery,
} from "@mui/material";
import GithubIcon from "../assets/github-mark.svg";
import NewTabIcon from "../assets/new-tab-svgrepo-com.svg";

function ProjectCard({ project }) {
  const isMobile = useMediaQuery("(max-height: 600px)");

  const height = isMobile ? 350 : 450;
  const width = isMobile ? 250 : 300;

  return (
    <Card
      sx={{
        width: width,
        height: height,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.8)" },
        transition: "background-color 0.3s ease",
        color: "white",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        cursor: "grab",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <CardMedia
          component="img"
          height={height * 0.4}
          image={`${import.meta.env.BASE_URL}${project.imageUrl}`}
          alt={project.title}
          sx={{ objectFit: "cover", borderRadius: "10px" }}
        />
      </Box>
      <CardContent
        sx={{
          flex: 1,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          overflow: "hidden",
          pb: 1,
        }}
      >
        <Typography
          variant="h5"
          component="div"
          color="primary"
          fontWeight={"bold"}
        >
          {project.title}
        </Typography>
        <Typography variant="body2" color="primary" sx={{ mb: 1 }}>
          <b>{project.language}</b>
        </Typography>
        <Typography
          variant="body2"
          color="skyblue"
          sx={{ flexGrow: 1, overflowY: "auto", padding: "0 8px" }}
        >
          {project.description}
        </Typography>
      </CardContent>

      <Box
        sx={{ display: "flex", justifyContent: "center", pb: 1, gap: 2, mt: 1 }}
      >
        <Button
          component="a"
          size="small"
          href={project.link || "#"}
          disabled={!project.link}
          target="_blank"
          startIcon={
            <img
              src={NewTabIcon}
              alt="New Tab"
              style={{
                width: 24,
                height: 24,
                filter: !project.link
                  ? "grayscale(100%) brightness(50%)"
                  : "none",
              }}
            />
          }
        >
          Demo
        </Button>
        <Button
          component="a"
          size="small"
          href={project.codelink || "#"}
          disabled={!project.codelink}
          target="_blank"
          startIcon={
            <img
              src={GithubIcon}
              alt="GitHub"
              style={{
                width: 24,
                height: 24,
                filter: !project.codelink
                  ? "grayscale(100%) brightness(50%)"
                  : "none",
              }}
            />
          }
        >
          GitHub
        </Button>
      </Box>
    </Card>
  );
}

export default ProjectCard;
