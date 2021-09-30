import React from 'react'
import PrimarySearchAppBar from '../uielements/nav/navbar'
import Paper from '@mui/material/Paper';
import useStyless from '../uielements/styles/style'
import { Typography, Grid } from '@material-ui/core'
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import RadioCircleRatio from '../uielements/elements/RadioCircleRatio';
import Avatar from '../uielements/elements/Avatar';




const CV = () => {
    const classes = useStyless();
    return (
        <Paper className={classes.oneforall}>
            <nav>
                <PrimarySearchAppBar />
            </nav>

            <main>
                <Box sx={{ flexGrow: 0 }}>
                    <div className={classes.Movedown}>

                    </div>
                    <Grid container spacing={0}  >
                        <Grid item lg={1} md={12} >
                        </Grid>
                        <Grid item lg={2} md={4} sm={4} xs={4}>
                            <Paper className={classes.CVLeft}>
                                <Grid container direction="column" justifyContent="center" item spacing={0}>
                                    <Grid  >
                                        <Avatar />
                                        <Typography variant='h3'>
                                            Skills
                                        </Typography>
                                        <RadioCircleRatio value={3} name="React" />
                                        <RadioCircleRatio value={3} name="MUI" />
                                        <RadioCircleRatio value={2} name="Redux" />
                                        <RadioCircleRatio value={4} name="HTML5" />
                                    </Grid>
                                    <Grid >
                                        <Typography variant='h3'>
                                            Languages
                                        </Typography>
                                        <RadioCircleRatio value={4.5} name="Englinsh:C1" />
                                        <RadioCircleRatio value={5} name="Polish:native" />
                                    </Grid>
                                    <Grid >
                                        <Typography variant='h3'>
                                            Additional skills:
                                            <Typography variant='h5'>
                                                - Drive License
                                            </Typography>
                                            <Typography variant='h5'>
                                                - Vast eletronic knowledge
                                            </Typography>
                                        </Typography>
                                    </Grid>
                                    <Grid >
                                        <Typography variant='h3'>
                                            Contact
                                            <Typography variant='h5'>
                                                lisek091@gmail.com
                                            </Typography>
                                            <Typography variant='h5'>
                                                +48 722 187 712
                                            </Typography>
                                            <Typography variant='h5'>
                                                <a href="https://www.linkedin.com/in/mateusz-lisowski-08676b161/" />
                                            </Typography>
                                            <Typography variant='h5'>
                                                <a href="https://github.com/lisek091/" />
                                            </Typography>
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid item lg={8} md={8} sm={8} xs={8}>
                            <Paper className={classes.CVRight}>
                                <Grid container item spacing={0} direction="column">
                                    <Grid  >
                                        <Typography>
                                            Personal data
                                            Name : Mateusz Lisowski
                                            Birth: 31.07.1996
                                            Status : Student
                                        </Typography>
                                    </Grid>
                                    <Grid >
                                        <Typography>
                                            Expirience:
                                            10.04.2021 - now web dev
                                            22.07.2019 – 15.09.2019 Assistant shift manager in Maasoever Cold Store B.V.
                                            02.09.2017 - 29.12.2017 Office work Costa Coffee
                                        </Typography>
                                    </Grid>
                                    <Grid >
                                        <Typography>
                                            About me

                                        </Typography>
                                        <Typography>
                                            Education
                                            10.2019 – obecnie Politechnika Wrocławska Kierunek Teleinformatyka – studia stacjonarne
                                            09.2012 - 06.2015 Liceum Ogólnokształcące im. S. Żeromskiego w Kielcach profil: matematyczno-fizyczno-informatyczny
                                            10.2015 – 08.2018 Politechnika Warszawska Kierunek: Inżynieria pojazdów elektrycznych i hybrydowych - studia stacjonarne
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid item lg={1} md={12}  >
                        </Grid>
                    </Grid>
                </Box>
            </main>
        </Paper >
    )
}

export default CV
