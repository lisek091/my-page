import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { createTheme } from '@mui/material/styles';

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
        oneforall: {
            background: 'linear-gradient(75deg, #7DB7E7 15%, #D6DBC6 40%)',
            border: 0,
            borderRadius: 3,
        },
        Movedown: {
            minHeight: "76px"
        },
        CVLeft: {
            background: 'linear-gradient(75deg, #00a152 15%, #00a152 40%)',
            border: 0,
            borderRadius: 0,
        },
        CVRight: {
            background: 'linear-gradient(75deg, #33eaff 15%, #33eaff 40%)',
            border: 0,
            borderRadius: 0,

        },

    }),

);


export default useStyless
