import {
  createTheme,
  CssBaseline,
  Paper,
  Switch,
  ThemeProvider,
} from "@mui/material";
import React, { useState } from "react";
import HeroCard from "./HeroCard";

const Project04 = () => {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createTheme({
    palette: {
      mode: "light",
    },
  });
  const theme2 = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#52BE80",
      },
    },
  });

  return (
    <ThemeProvider theme={darkMode ? theme2 : theme}>
      <Paper
        sx={{
          height: "70vh",
          width: "50vw",
          display: "grid",
          placeItems: "center",
          
        
        }}
      >
        <Switch onClick={() => setDarkMode(!darkMode)} />
        <CssBaseline />
        <HeroCard />
      </Paper>
    </ThemeProvider>
  );
};

export default Project04;
