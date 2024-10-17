import { Box, Container, Grid, Typography, styled } from "@mui/material"

const About = () => {
    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up('xs')]: {
            paddingTop: "100px",

        },
        [theme.breakpoints.up('md')]: {
            paddingTop: "0",
        }
    }))

    return (
        <>
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={5}>
                            <Box position="relative">
                                <Box position="absolute" width={"150%"} top={-100} right={0}>
                                </Box>
                                <Box position="relative" textAlign="center">
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={4}>About me</Typography>
                            <Typography color="primary.contrastText" variant="h4" textAlign="center" style={{ wordWrap: 'break-word', whiteSpace: 'normal' }}> I'm a Front-End Developer, studying software engineering. I'm passionate about innovation and problem-solving. I have skills mainly in web and mobile development. I have experience with real-world projects and skills acquired through them, and my goal is to handle challenges well, constantly learning and delivering great results. If you're looking for someone who's hard-working and eager to learn, let's connect and achieve great results together!</Typography>
                            <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                                <Grid item xs={12} md={12} display="flex" justifyContent="center">
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>
        </>
    )
}

export default About