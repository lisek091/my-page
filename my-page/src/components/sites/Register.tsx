import React, { Fragment } from 'react'
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(4),
                width: '30ch',
            },
        },
        blockchain: {
            verticalAlign: "center"
        },
    }),
);


const Register = () => {
    const classes = useStyles();
    return (
        <Fragment>
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
                    />
                </div>
            </form>
        </Fragment>
    )
}

export default Register
