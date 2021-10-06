import React from 'react'
import PrimarySearchAppBar from '../uielements/nav/navbar'
import Paper from '@mui/material/Paper';
import useStyless from '../uielements/styles/style'
import { Typography, Grid } from '@material-ui/core'
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import RadioCircleRatio from '../uielements/elements/RadioCircleRatio';
import Avatar from '../uielements/elements/Avatar';
import './sitescss/register.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const CV = () => {
    const classes = useStyless();
    const handleClick1 = () => {
        window.open('https://github.com/lisek091/', '_blank');
    }
    const handleClick2 = () => {
        window.open('https://www.linkedin.com/in/mateusz-lisowski-08676b161/', '_blank');
    }
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
                                <Grid container direction="column" justifyContent="center" item spacing={0} className='center'>
                                    <Grid  >
                                        <Avatar />
                                        <Typography variant='h3' className='cvleft' >
                                            Skills
                                        </Typography>
                                        <RadioCircleRatio value={3} name="React" desribtion='I started on react 16 and from beginning I worked with hooks' />
                                        <RadioCircleRatio value={3} name="MUI" desribtion='I made this site with it. I know bootstrap as well' />
                                        <RadioCircleRatio value={2} name="Redux" desribtion='Basics so far' />
                                        <RadioCircleRatio value={4} name="HTML5+CSS3" desribtion='I know why and where to use specific tags and how to style in css' />
                                    </Grid>
                                    <Grid >
                                        <Typography variant='h3' className='cvleft'>
                                            Languages
                                        </Typography>
                                        <RadioCircleRatio value={4.5} name="Englinsh:C1" desribtion='I am comfortable with english team if there will be need for it' />
                                        <RadioCircleRatio value={5} name="Polish:native" desribtion=':)' />
                                    </Grid>
                                    <Grid >
                                        <Typography variant='h4' className='cvleft'>
                                            Additional skills
                                        </Typography>
                                        <Typography variant='h5'>
                                            - Drive License
                                        </Typography>
                                        <Typography variant='h6'>
                                            - Vast eletronic knowledge
                                        </Typography>
                                    </Grid>
                                    <Grid >
                                        <Typography variant='h3' className='cvleft'>
                                            Contact
                                        </Typography>
                                        <Typography variant='h5'>
                                            lisek091@gmail.com
                                        </Typography>
                                        <Typography variant='h5'>
                                            +48 722 187 712
                                        </Typography>
                                        <div className='gitlink'>
                                            <GitHubIcon fontSize='large' className='giticon' onClick={handleClick1} />
                                            <LinkedInIcon fontSize='large' className='linkicon' onClick={handleClick2} />
                                        </div>
                                    </Grid>

                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid item lg={8} md={8} sm={8} xs={8}>
                            <Paper className={classes.CVRight}>
                                <Grid container item spacing={0} direction="column">
                                    <ul>
                                        <Grid  >
                                            <Typography variant='h4'>
                                                Personal data
                                            </Typography>
                                            <ul>
                                                <Typography>
                                                    Name : Mateusz Lisowski
                                                </Typography>
                                                <Typography>
                                                    Birth: 31.07.1996
                                                </Typography>
                                                <Typography>
                                                    Status : Student
                                                </Typography>
                                            </ul>
                                        </Grid>
                                        <Grid >
                                            <Typography>
                                                <Typography variant='h4'>
                                                    Expirience:
                                                </Typography>
                                                <ul>
                                                    <Typography>
                                                        09.2021 - frontend components in:Tracardi
                                                    </Typography>
                                                    <Typography>
                                                        04.2021 - now Learning web-dev
                                                    </Typography>
                                                    <Typography>
                                                        07.2019 – 09.2019 Assistant shift manager in Maasoever Cold Store B.V.
                                                    </Typography>
                                                    <Typography>
                                                        09.2017 - 12.2017 Office work Costa Coffee
                                                    </Typography>
                                                </ul>
                                            </Typography>
                                        </Grid>
                                        <Grid >
                                            <Typography variant='h4'>
                                                About me
                                            </Typography>
                                            <ul>
                                                <Typography>




                                                    Zainteresowanie web devem złapałem niedawno gdy znajomy poprosił mnie o pomoc przy tworzeniu strony.
                                                    Umiałem programować c i c++ dość dobrze więc chciałem jakoś pomóc, ale niestety nie umiałem.
                                                    Zacząłem wtedy powoli nauke html css itd... Od 0 praktycznie ale powoli do przodu.
                                                </Typography>
                                            </ul>
                                        </Grid>
                                        <Grid >
                                            <Typography variant='h4'>
                                                Education
                                            </Typography>
                                            <ul>
                                                <Typography>
                                                    10.2019 – now Wrocław univeristy of since and technology: ICT
                                                </Typography>
                                                <Typography>
                                                    10.2015 – 08.2018 Warsaw univeristy of since and technology: Electric and hybrid vehicle engeniring
                                                </Typography>
                                                <Typography>
                                                    09.2012 - 06.2015 High school S. Żeromskiego in Kielce
                                                </Typography>
                                            </ul>
                                        </Grid>
                                    </ul>
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
