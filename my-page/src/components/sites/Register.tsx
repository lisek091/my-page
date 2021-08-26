import React, { Fragment } from 'react'
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Card, CardMedia, CardActions, CardContent, CssBaseline, AppBar, Grid, Toolbar, Container, Button, ButtonGroup, Box } from '@material-ui/core'
import Navbar from '../uielements/navbar';
import { Alert, AlertTitle } from '@material-ui/lab';
import MediaCard from '../uielements/cards';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(4),
                width: '28ch',
                display: 'block'
            },
        },
        blockchain: {
            verticalAlign: "center"
        },
        powitanie: {
            padding: '70px'
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

                <Container maxWidth="md">
                    <Grid container spacing={4} justify="center">
                        <Grid item xs={12} sm={6} >
                            <form className={classes.root} noValidate autoComplete="off">
                                <div className={classes.blockchain}>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Login"
                                        //  defaultValue="Login"
                                        variant="outlined"
                                        autoFocus={true}
                                    />
                                    <TextField
                                        required
                                        id="outlined-required"
                                        type="email"
                                        label="Email"
                                        //defaultValue="Email"
                                        variant="outlined"
                                    />
                                    <TextField
                                        id="outlined-password-input"
                                        label="Hasło"
                                        type="password"
                                        autoComplete="current-password"
                                        variant="outlined"
                                        required={true}

                                    />
                                </div>
                            </form>
                        </Grid>
                        <Grid item xs={12} sm={6} className={classes.block}>
                            <h3>w jaki sposob to robic nikt tego nie wie</h3>
                            <h3>w jaki sposob to robic nikt tego nie wie</h3>
                            <h3>w jaki sposob to robic nikt tego nie wie</h3>
                        </Grid>
                        <Grid item xs={12}>
                            <MediaCard />
                        </Grid>
                    </Grid>

                </Container>
            </div>
        </Fragment>
    )
}

export default Register
