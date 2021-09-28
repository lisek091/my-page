import React, { Fragment } from 'react'
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, CssBaseline, Grid, Container } from '@material-ui/core'
import Navbar from '../uielements/nav/navbar';
import MediaCard from '../uielements/elements/cards';
import './sitescss/register.css';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                innerWidth: '100%',
                display: 'block'


            },
        },
        blockchain: {
            verticalAlign: "center"
        },
        powitanie: {
            padding: '70px 15px 25px'
        },
        block: {
            padding: "15px"
        },
    }),
);


const Register = () => {
    const classes = useStyles();

    return (
        <Fragment>
            <CssBaseline />
            <Navbar />
            <div className={classes.powitanie}>

                <Container maxWidth="md" className={classes.powitanie}>
                    <Grid container spacing={4} justify="center">
                        <Grid item xs={12} sm={2}>
                        </Grid>
                        <Grid item sm={12} md={4}>

                            <form className={classes.root} noValidate autoComplete="off">


                                <TextField
                                    required={true}
                                    id="outlined-required"
                                    type="email"
                                    label="Email"
                                    variant="outlined"
                                    autoFocus={true}
                                />
                                <TextField
                                    id="outlined-password-input"
                                    label="Hasło"
                                    type="password"
                                    autoComplete="current-password"
                                    variant="outlined"
                                    required={true}
                                />

                            </form>
                        </Grid>
                        <Grid item sm={12} md={4} className={classes.root}>
                            <Typography align="left">

                                Dla możliwości dodatkowego testowania strony proponuje zarejestrować się.

                            </Typography>
                            <Typography align="left">

                                Możesz utworzyć losowe hasło bo konto zostanie usunięte po 30 dniach.
                                Zapraszam do sekcji gier jeśli nie chesz się rejestrować.
                            </Typography>

                        </Grid>
                        <Grid item xs={12} sm={2}>
                        </Grid>


                    </Grid>

                </Container>
            </div>
        </Fragment>
    )
}

export default Register
