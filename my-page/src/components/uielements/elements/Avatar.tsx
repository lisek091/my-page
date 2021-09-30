import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import JA from '../imgs/profilowe.jpg';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@mui/material/Button';
import ImageListItem from '@mui/material/ImageListItem';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const useStyless = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: '0px'
        },

    }),

);

export default function ImageAvatars() {
    const [hover, setHover] = React.useState(false);
    const [show, setShow] = React.useState('classes.hide')
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const classes = useStyless();
    return (
        <div>

            <Button onClick={handleClick}>
                <ImageListItem >
                    <Avatar className={classes.root}
                        alt="Mateusz Lisowski"
                        src={JA}
                        sx={{ width: 160, height: 200 }}
                        variant='square'
                    />
                </ImageListItem>
            </Button>
            <Menu
                id="Avatar menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                className={classes.root}
            >
                <MenuItem onClick={handleClose} className={classes.root}>
                    <Avatar className={classes.root}
                        alt="Mateusz Lisowski"
                        src={JA}
                        sx={{ width: 500, height: 650 }}
                        variant='square'
                    />
                </MenuItem>
            </Menu>
        </div>
    );
}
/*width: 2649, height: 3353

*/