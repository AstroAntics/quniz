import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ResponsiveAppBar from "../components/Navbar";
import AboutUsImage from "../images/qunizaboutus.png";

export default function AboutUsPage() {
  return (
    <>
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
          <Box
            component="img"
            alt="About us."
            src={AboutUsImage}
            sx={{
              height: '250px',
              width: '501px',
              marginTop: '2rem',
              marginBottom: '2rem'
            }}
          />
          <Typography
            component="h4"
            variant="h4"
            paragraph={true}
            gutterBottom={true}
            sx={{
              fontWeight: 900,
            }}
          >
            Hi, we're qUNIz, a hackathon project hoping to change how people
            choose their universities. Our aim is to match the university to
            your preferences.
          </Typography>
          <Typography
            component="h4"
            variant="h4"
            paragraph={true}
            gutterBottom={true}
            sx={{
              fontWeight: 900,
            }}
          >
            UCAS is always there to help you find your university based on
            grades and what you want to study, but we want to find the uni that
            is the best fit for YOU.
          </Typography>
        </Box>
      </Container>
    </>
  );
}
