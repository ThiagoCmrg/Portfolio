import { Box, Container, Grid, Typography, styled } from "@mui/material"
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StyledButton from "../../../../components/StyledButton/StyledButton";

const Hero = () => {
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
                    <Grid container spacing={0}>
                        <Grid item xs={12} md={5}>
                            <Box position="relative">
                                <Box position="absolute" width={"150%"} top={-100} right={0}>
                                </Box>
                                <Box position="relative" textAlign="center">
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>Thiago Camargo</Typography>
                            <Typography color="primary.contrastText" variant="h4" textAlign="center" >I turn your dreams into code</Typography>
                            <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                                <Grid item xs={12} md={2} display="flex" justifyContent="center">
                                    <StyledButton>
                                        <DownloadIcon />
                                        <Typography>
                                            Download CV
                                        </Typography>
                                    </StyledButton>
                                </Grid>
                                <Grid item xs={12} md={2} display="flex" justifyContent="center">
                                    <StyledButton>
                                        <MailOutlineIcon />
                                        <Typography>
                                            Contact me
                                        </Typography>
                                    </StyledButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>
        </>
    )
}

export default Hero