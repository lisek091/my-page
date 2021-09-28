import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { Typography, Grid } from '@material-ui/core';
import { cardValues } from './CardSetUpvalues';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import obrazek from '../imgs/cardimg.jpg'
import { setInterval } from 'timers';
import IdleTimer from 'react-idle-timer';

const useStyles = makeStyles({
    root: {
        width: '100%',

    },
    media: {
        height: 450,
    },
    order: {
        display: 'block',

    },
    neworde: {
        alignItems: 'center',
    },
    pagigig: {
        paddingTop: '5px',
        paddingBottom: '5px',
    }
});



export default function MediaCard() {

    const wtfiamdoing = Object.values(cardValues);
    const classes = useStyles();
    const [card, setCard] = useState(1);
    const Paginacja = () => {
        return (
            <Stack spacing={2} className={classes.neworde} >
                <Pagination count={Object.keys(cardValues).length} color="primary" onChange={handleChange} page={card} size='large' />
            </Stack>
        )
    }
    const idleTimerRef: any = useRef(null);
    const onIdle = () => {
        (card === 10) ? setCard(1) : setCard(card + 1);
    }
    const handleChange = (event: any, page: number) => {
        setCard(page);
    }
    const CardTable = () => {
        return (
            < Card className={classes.root}  >
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        component="img"
                        image={obrazek}
                        alt="Code Screen"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {wtfiamdoing[card - 1].name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {wtfiamdoing[card - 1].value}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" href={wtfiamdoing[card - 1].link1}>
                        Więcej
                    </Button>
                    <Button size="small" color="primary" href={wtfiamdoing[card - 1].link2}>
                        Coś dalej
                    </Button>
                </CardActions>
            </Card >
        )
    }

    return (
        <div className={classes.order}>
            <IdleTimer ref={idleTimerRef} timeout={5000} onIdle={onIdle} />
            <CardTable />
            <div className={classes.pagigig}>
                <Paginacja />
            </div>
        </div >
    )
}
/*
const tabela = () => {
    return (
        <Grid container spacing={4} justify="center">
            {Object.values(cardValues).map((card) => (
                <Grid item xs={12} sm={6} md={4} >
                    < Card className={classes.root}  >
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                title="nope"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {card.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {card.value}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" href={card.link1}>
                                Więcej
                            </Button>
                            <Button size="small" color="primary" href={card.link2}>
                                Coś dalej
                            </Button>
                        </CardActions>
                    </Card >
                </Grid >
            ))}
        </Grid>
    )
}
Działą siatka wiec jak cos to do tego powrocic lub wykorzystać inaczej
*/