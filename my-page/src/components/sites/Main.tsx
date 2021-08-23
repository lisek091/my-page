import React, { Fragment } from 'react'
import '../uielements/mypage.css'
import { Typography, Card, CardMedia, CardActions, CardContent, CssBaseline, AppBar, Grid, Toolbar, Container, Button, ButtonGroup, Box } from '@material-ui/core'
import PrimarySearchAppBar from '../uielements/navbar'
import LabelBottomNavigation from '../uielements/bottombar'
import Header from '../uielements/header'
import MediaCard from '../uielements/cards'
import addsize from '../uielements/addsize.jpg'
import useStyless from '../uielements/styles/style'




const Main = () => {
    const classes = useStyless();

    return (
        <Fragment>
            <CssBaseline />
            <nav>
                <PrimarySearchAppBar />
            </nav>
            <main>
                <div className={classes.container}>
                    <Container maxWidth="lg">
                        <Typography variant="h4" align='center' className={classes.powitanie}  >
                            Witaj na stronie pokazowej moich skromnych zdolności!
                        </Typography>
                        <Typography variant="h5" align='center' className={classes.powitanie}>
                            Zapraszam do obejrzenia wszystkich jej możliwości i kontaktu ze mną.
                        </Typography>
                        <Grid container spacing={4} justify="center">
                            <Grid item xs={12} sm={6} md={4} >
                                <MediaCard />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <MediaCard />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <MediaCard />
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </main >
        </Fragment>
    )
}
//<LabelBottomNavigation />

/*
                <div className="wrapper">
                    <div className="navbar">

                    </div>
                    <div className="body">

                    </div>
                    <div className="sidebarleft">

                    </div>
                    <div className="sidebarright">

                    </div>
                    <div className="footer">

                    </div>
                </div>

*/
export default Main
