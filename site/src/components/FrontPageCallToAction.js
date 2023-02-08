import { Box, Typography, Container, Button } from "@mui/material";
// import FrontPageButton from "./FrontPageButton";

export default function FrontPageCallToAction() {
  return (
    <Container maxWidth="lg">
      <Box mt={5}>
        {/* <p>Help.</p> */}
        <div
          class="squashedText"
          style={{
            backgroundColor: "white",
            borderColor:"rgb(40, 75, 99)",
            textAlignLast: "center !important",
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
            Take our detailed quiz to find out the university for you, today!
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
            <Button
              variant="contained"
              color="success"
              size="medium"
              href="quiz"
            >
              Take the Quiz
            </Button>
          </Box>
        </div>
      </Box>
    </Container>
  );
}
