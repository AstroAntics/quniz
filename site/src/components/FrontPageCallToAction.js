import { Box, Typography, Container, Button } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";

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

export default function FrontPageCallToAction() {
  return (
    <>
      <ThemeProvider theme={newTheme}>
        <Container maxWidth="lg" height="150pt">
          <Box mt={5}>
            <div
              style={{
                backgroundColor: "rgb(40, 75, 99)",
                textAlignLast: "center !important",
                color: "white",
                paddingTop: "1rem",
                paddingBottom: "1rem",
              }}
            >
              <Typography
                sx={{
                  ml: "150px",
                  mr: "150px",
                }}
                align="center"
                gutterBottom={true}
                paragraph={true}
                variant="h3"
                mt={6}
                mb={2}
              >
                Take our detailed quiz to find out the university for you,
                today!
              </Typography>
              <Typography
                align="center"
                gutterBottom={false}
                paragraph={true}
                variant="h5"
                mt={2}
                mb={4}
              >
                It's free forever and always will be.
              </Typography>
              <Box textAlign="center">
                <Button variant="contained" size="medium" href="the-quiz" color="navcolors">
                  Take the Quiz
                </Button>
              </Box>
            </div>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}