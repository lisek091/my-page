import React from 'react';
import PropTypes from 'prop-types';
import useStyless from './styles/style';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';


export default function Header(props: { sections: any; title: string; }) {
    const classes = useStyless();
    const { sections, title } = props;

    return (
        <React.Fragment>
            <Toolbar className={classes.toolbar}>
                <Button size="small" variant="outlined">Rejestracja</Button>
                <Typography
                    variant="h6"
                    color="secondary"
                    align="center"
                    noWrap
                    display="block"


                    className={classes.toolbarTitle}
                >
                    {title}
                </Typography>
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <Button variant="outlined" size="small">
                    Sign up
                </Button>
            </Toolbar>

            <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>

                {sections.map((section: { title: React.Key; url: string; }) => (
                    <Link
                        color="inherit"
                        noWrap
                        key={section.title}
                        variant="body2"
                        href={section.url}
                        className={classes.toolbarLink}
                    >
                        {title}
                    </Link>
                ))}
            </Toolbar>
        </React.Fragment>
    );
}

Header.propTypes = {
    sections: PropTypes.array,
    title: PropTypes.string,
};