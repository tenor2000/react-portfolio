import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        variant: "outlined",
        color: "primary",
        size: "large",
      },
      styleOverrides: {
        root: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          },
          marginTop: "24px",
        },
      },
    },
    MuiTextField: {
      palette: {
        primary: {
          main: "#1976d2",
        },
        secondary: {
          main: "#9c27b0",
        },
      },
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            color: "lightblue",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "gray",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "lightgray",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "gray",
            },
          },
          "& .MuiInputLabel-root": {
            color: "lightblue",
            "&.Mui-focused": {
              color: "lightblue",
            },
          },
        },
      },
    },
  },
});

export default theme;
