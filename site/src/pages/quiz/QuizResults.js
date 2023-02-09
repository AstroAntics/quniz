import Box from "@mui/material/Box";
import ResponsiveAppBar from "../../components/Navbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import UssuImage from "../../images/ussu.jpeg";

export default function QuizResults() {
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
          <Typography variant="h2" component="h2">
            Thank you for completing the quiz! 🎉
          </Typography>
          <Typography variant="h4" component="h4">
            Based on your answers, we've picked a great uni...
          </Typography>
          <Typography variant="h5" component="h5">
            ____ University to study _______
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              color="secondary"
              sx={{ margin: 3 }}
              onClick={() => {
                window.location.href = "/";
              }}
            >
              Find Out More About The Course
            </Button>
            <Button
              variant="contained"
              color="success"
              onClick={() => {
                window.location.href = "/";
              }}
            >
              Go Back to Homepage
            </Button>
          </Box>
          <Box
            sx={{
              marginTop: 4,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: "33%", marginLeft: "1.8em" }}>
              <div id="panelBlurbLeft">
                <Typography variant="h5" component="h5">
                  Why ______?
                </Typography>
                <Typography variant="h6" component="h6" paragraph={true}>
                  <p>
                    You indicated that you are a social butterfly, wanting to
                    come to university to have lots of fun, make new friends and
                    build new relationships. Your keenness for sports means that
                    you would slot right in at ________.
                  </p>
                </Typography>
              </div>
            </Box>
            <Box sx={{ width: "33%", padding: "4rem" }}>
              <div id="resultsPanelCenter">
                <Box
                  component="img"
                  alt="About us."
                  src={UssuImage}
                  sx={{
                    height: 291,
                    marginTop: "2rem",
                    marginBottom: "2rem",
                  }}
                />
              </div>
            </Box>
            <Box sx={{ width: "33%", marginLeft: "1.8em"}}>
              <div id="panelBlurbRight">
                <Typography variant="h5" component="h5">
                  We also think you could thrive here:
                </Typography>
                <Typography variant="h6" component="h6" paragraph={true}>
                  (1) Liverpool University for Business Management and Spanish
                </Typography>
                <Typography variant="h6" component="h6" paragraph={true}>
                  (2) Sheffield Hallam for International Business with Spanish
                  Aston
                </Typography>
                <Typography variant="h6" component="h6" paragraph={true}>
                  (3) University for Business Studies with a Foreign Language
                </Typography>
              </div>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}
