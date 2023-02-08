import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ResponsiveAppBar from "../components/Navbar";

export default function QuizStartPage() {
  return (
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
            Ready to find your next uni?
          </Typography>
        </Box>
      </Container>
    </div>
  );
}
