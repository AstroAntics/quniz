import Box from "@mui/material/Box";
import ResponsiveAppBar from "../../components/Navbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

export default function QuizPage6() {
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
          <Typography component="h6" variant="h6" paragraph={true}>
            Question 6 of <strong>7</strong>
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              padding: "1rem",
            }}
          >
            <Button
              variant="outlined"
              color="error"
              sx={{
                marginBottom: "0.25em",
                marginRight: "2rem",
              }}
              onClick={() => {
                window.location.href = "q5";
              }}
            >
              Go Back
            </Button>
            <Button
              variant="contained"
              color="success"
              sx={{
                marginBottom: "1em",
              }}
              onClick={() => {
                window.location.href = "q7";
              }}
            >
              Next Question
            </Button>
          </Box>
          <Typography
            component="h4"
            variant="h4"
            paragraph={true}
            gutterBottom={true}
            sx={{
              fontWeight: 900,
            }}
          >
            Are you an international student?
          </Typography>
          <Box
            sx={{
              padding: "0.5rem",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Button
              onClick={() => {
                window.location.href = "q7";
              }}
              variant="contained"
              color="success"
              sx={{
                margin: "0.75rem",
              }}
            >
              Yes
            </Button>
            <Button
              onClick={() => {
                window.location.href = "q7";
              }}
              variant="contained"
              color="error"
              sx={{
                margin: "0.75rem",
              }}
            >
              No
            </Button>
            <Button
              onClick={() => {
                window.location.href = "q7";
              }}
              variant="contained"
              color="secondary"
              sx={{
                margin: "0.75rem",
              }}
            >
              Well, not exactly... 🤷
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}