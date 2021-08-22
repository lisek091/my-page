import React from 'react'
import '../uielements/mypage.css'
import testowe from '../uielements/testowa.jpg'
import tekst from '../uielements/tekst'
import Box from '@material-ui/core/Box'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PrimarySearchAppBar from '../uielements/navbar'
import LabelBottomNavigation from '../uielements/bottombar'
import Header from '../uielements/header'
import MediaCard from '../uielements/cards'



const useStyless = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
    }),
);



const Main = () => {
    const classes = useStyless();

    return (
        <Box color="text.primary">
            <div className={classes.root}>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <PrimarySearchAppBar />
                        <Header sections={[]} title={"Witaj na stronie pokazowej moich skromnych zdolności! Zapraszam do obejrzenia wszystkich jej możliwości i kontaktu ze mną."} />
                    </Grid>
                    <Grid item xs={6}>
                        <MediaCard />
                    </Grid>
                    <Grid item xs={6}>
                        <MediaCard />
                    </Grid>
                    <Grid item xs={4}>
                        <MediaCard />
                    </Grid>
                    <Grid item xs={4}>
                        <MediaCard />
                    </Grid>
                    <Grid item xs={4}>
                        <MediaCard />
                    </Grid>
                    <Grid item xs={12} >
                    </Grid>
                </Grid>
            </div>
        </Box>
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
