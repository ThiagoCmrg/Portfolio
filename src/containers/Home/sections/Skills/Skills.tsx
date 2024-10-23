import { Box, Container, Grid, Typography, styled } from "@mui/material"

const Projects = () => {
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
                            <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={12}>Skills</Typography>
                            <Typography color="primary.contrastText" variant="h4" textAlign="center" ></Typography>
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

export default Projects