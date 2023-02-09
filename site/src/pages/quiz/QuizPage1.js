import Box from "@mui/material/Box";
import ResponsiveAppBar from "../../components/Navbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

export default function QuizPage1() {
    return(
    <>
        <ResponsiveAppBar/>
        <Container maxWidth="xl">
            <Box
            sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "white",
                padding: "2rem",
              }}>
                <Typography component="h6" variant="h6" paragraph={true}>
                    Question 1 of <strong>7</strong>
                </Typography>
                <Button 
                variant='contained' 
                color='success'
                sx={{
                    marginBottom: '1em',
                }}
                onClick={() => {window.location.href = 'q2';}}>Next Question</Button>
            <Typography
            component="h4"
            variant="h4"
            paragraph={true}
            gutterBottom={true}
            sx={{
              fontWeight: 900,
            }}
          >
            What a-levels are you taking?
          </Typography>
          <Box sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              padding: '2rem',
          }}>
            <Card sx={{
                margin: '1rem'
            }}>
                <CardContent>
                    <Typography>test</Typography>
                    <Button 
                    onClick={() => {window.location.href = 'q2';}}
                    variant='contained'>Choose This Option</Button>
                </CardContent>
            </Card>
            <Card sx={{
                margin: '1rem'
            }}>
                <CardContent>
                    <Typography>test 2</Typography>
                    <Button 
                    onClick={() => {window.location.href = 'q2';}}
                    variant='contained'>Choose This Option</Button>
                </CardContent>
            </Card>
            <Card sx={{
                margin: '1rem'
            }}>
                <CardContent>
                    <Typography>test 3</Typography>
                    <Button 
                    onClick={() => {window.location.href = 'q2';}}
                    variant='contained'>Choose This Option</Button>
                </CardContent>
            </Card>
          </Box>
        </Box>
        </Container>
    </>
    );
}