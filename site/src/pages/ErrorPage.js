import ResponsiveAppBar from "../components/Navbar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
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
          <div id="error-page">
            <h1>Oops!</h1>
            <p>An unexpected error has occurred.</p>
            <p>
              <Typography variant="h3" sx={{ color: "red" }}>
                {error.statusText || error.message}
              </Typography>
            </p>
          </div>
        </Box>
      </Container>
    </>
  );
}
