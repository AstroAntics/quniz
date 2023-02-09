import Box from "@mui/material/Box";
import ResponsiveAppBar from "../../components/Navbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

export default function QuizPage2() {
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
                    Question 2 of <strong>7</strong>
                </Typography>
                <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    padding: '1rem'
                }}>
                    <Button 
                    variant='outlined' 
                    color='error' 
                    sx={{
                        marginBottom: '0.25em',
                        marginRight: '2rem'
                    }}
                    onClick={() => {window.location.href = 'q1';}}>Go Back</Button>
                    <Button 
                    variant='contained' 
                    color='success'
                    sx={{
                        marginBottom: '1em',
                    }}
                    onClick={() => {window.location.href = 'q3';}}>Next Question</Button>
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
            What bachelors do you want to study (optional question)
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
                    onClick={() => {window.location.href = 'q3';}}
                    variant='contained'>Choose This Option</Button>
                </CardContent>
            </Card>
            <Card sx={{
                margin: '1rem'
            }}>
                <CardContent>
                    <Typography>test 2</Typography>
                    <Button 
                    onClick={() => {window.location.href = 'q3';}}
                    variant='contained'>Choose This Option</Button>
                </CardContent>
            </Card>
            <Card sx={{
                margin: '1rem'
            }}>
                <CardContent>
                    <Typography>test 3</Typography>
                    <Button 
                    onClick={() => {window.location.href = 'q3';}}
                    variant='contained'>Choose This Option</Button>
                </CardContent>
            </Card>
          </Box>
        </Box>
        </Container>
        </>
        );
}