import React, { Fragment } from 'react'
import '../uielements/elements/mypage.css'
import { Typography, Grid, Container } from '@material-ui/core'
import PrimarySearchAppBar from '../uielements/nav/navbar'
import MediaCard from '../uielements/elements/cards'
import useStyless from '../uielements/styles/style'
import Paper from '@mui/material/Paper';

const Main = () => {
    const classes = useStyless();
    return (
        <Fragment>

            <nav>
                <PrimarySearchAppBar />
            </nav>
            <main>
                <Paper className={classes.oneforall}>
                    <div className={classes.container}>
                        <Container maxWidth="lg">
                            <div className={classes.powitanie} />
                            <div className={classes.powitanie} />
                            <Typography variant="h4" align='center' className={classes.powitanie}  >
                                Witaj na stronie pokazowej moich skromnych zdolności!
                            </Typography>
                            <Typography variant="h5" align='center' className={classes.powitanie}>
                                Zapraszam do obejrzenia wszystkich jej możliwości i kontaktu ze mną.
                            </Typography>
                            <MediaCard />
                        </Container>
                    </div>
                </Paper>
            </main >
        </Fragment>
    )
}
export default Main

