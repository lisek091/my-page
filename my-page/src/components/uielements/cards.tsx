import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import obrazek from './testowa.jpg'
const useStyles = makeStyles({
    root: {
        maxWidth: 500,
    },
    media: {
        height: 200,
    },
});

export default function MediaCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={obrazek}
                    title="kodzik"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        kodzikdawny
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Nie warto tego czytac ::))
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    nie o tym
                </Button>
                <Button size="small" color="primary">
                    jak to robic
                </Button>
            </CardActions>
        </Card>
    );
}