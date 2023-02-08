import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ResponsiveAppBar from "../components/Navbar";

export default function HelpPage() {
  return (
    <div id="helpPage">
      <ResponsiveAppBar />
      <Container>
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
            We don't actually have a Help page yet. But thanks for checking it out anyway!
          </Typography>
        </Box>
      </Container>
    </div>
  );
}
