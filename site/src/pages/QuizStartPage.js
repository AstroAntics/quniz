import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import ResponsiveAppBar from "../components/Navbar";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";

const newTheme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#0971f1",
      darker: "#053e85",
      navcol: "#3C6E71",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
    navcolors: {
      main: "#3C6E71",
    }
  },
});


export default function QuizStartPage() {
  return (
    <ThemeProvider theme={newTheme}>

    <div id="quizPage">
      <ResponsiveAppBar />
      <Container maxWidth="xl">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "white",
            padding: "2rem",
          }}
        >
          <Typography
            component="h4"
            variant="h4"
            paragraph={true}
            gutterBottom={true}
            sx={{
              fontWeight: 900,
            }}
          >
            Ready to find your uni?
          </Typography>
          <Button 
          variant="contained" 
          color="navcolors"
          to="the-quiz/q1"
          href="the-quiz/q1"
          sx={{
            color: "white",
          }}
          >
            Take the Quiz
          </Button>
        </Box>
      </Container>
    </div>
    </ThemeProvider>
  );
}
