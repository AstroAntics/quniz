import Box from "@mui/material/Box";
import ResponsiveAppBar from "../../components/Navbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

export default function QuizPage4() {
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
                    Question 4 of <strong>7</strong>
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
                    onClick={() => {window.location.href = 'q3';}}>Go Back</Button>
                    <Button 
                    variant='contained' 
                    color='success'
                    sx={{
                        marginBottom: '1em',
                    }}
                    onClick={() => {window.location.href = 'q5';}}>Next Question</Button>
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
            How long are you willing to commute to class?
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
                    <Typography>10 minutes</Typography>
                    <Button 
                    onClick={() => {window.location.href = 'q5';}}
                    variant='contained'>Choose This Option</Button>
                </CardContent>
            </Card>
            <Card sx={{
                margin: '1rem'
            }}>
                <CardContent>
                    <Typography>20 minutes</Typography>
                    <Button 
                    onClick={() => {window.location.href = 'q5';}}
                    variant='contained'>Choose This Option</Button>
                </CardContent>
            </Card>
            <Card sx={{
                margin: '1rem'
            }}>
                <CardContent>
                    <Typography>30 minutes</Typography>
                    <Button 
                    onClick={() => {window.location.href = 'q5';}}
                    variant='contained'>Choose This Option</Button>
                </CardContent>
            </Card>
          </Box>
        </Box>
        </Container>
        </>
        );
}

