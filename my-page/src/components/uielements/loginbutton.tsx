import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu, { MenuProps } from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './mypage.css';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '29ch',
            },
        },
    }),
);
const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props: MenuProps) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        /* '&:focus': {
             backgroundColor: theme.palette.primary.main,
             '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                 color: theme.palette.common.white,
             },
         },
         */
    },
}))(MenuItem);

export default function CustomizedMenus() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const classes = useStyles();
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleSubmit = (e: React.SyntheticEvent<EventTarget>) => {
        e.preventDefault();
    };

    return (
        <div>
            <Button
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="contained"
                color="secondary"
                onClick={handleClick}
            >
                Zaloguj się
            </Button>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                onSubmit={handleSubmit}
            >
                <StyledMenuItem>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="standard-basic" label="Email" />
                    </form>
                </StyledMenuItem>
                <StyledMenuItem>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="standard-basic" label="Hasło" />
                    </form>
                </StyledMenuItem>
                <StyledMenuItem>
                    <span >
                        <Button
                            variant="contained"
                            color="primary"
                        //onClick={handleClick}
                        >
                            Zaloguj się
                        </Button>
                    </span>
                </StyledMenuItem>
            </StyledMenu>
        </div>
    );
}