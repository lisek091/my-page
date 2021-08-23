import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';


const useStyless = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        toolbar: {
            borderBottom: `1px solid ${theme.palette.divider}`,
        },
        toolbarTitle: {
            flex: 1,
        },
        toolbarSecondary: {
            justifyContent: 'space-between',
            overflowX: 'auto',
        },
        toolbarLink: {
            padding: theme.spacing(1),
            flexShrink: 0,
        },
        container: {

        },
        powitanie: {
            padding: '20px'
        },

    }),

);


export default useStyless
