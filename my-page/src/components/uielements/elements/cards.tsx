import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { Typography, Grid } from '@material-ui/core';
import { cardValues } from './CardSetUpvalues';

const useStyles = makeStyles({
    root: {
        width: 350,
    },
    media: {
        height: 200,
    },
});

export default function MediaCard() {
    const classes = useStyles();

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
