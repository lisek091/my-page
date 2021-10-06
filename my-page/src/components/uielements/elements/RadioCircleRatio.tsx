import React from 'react'
import CircleIcon from '@mui/icons-material/Circle';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { Typography, Grid } from '@mui/material';
import Portal from '@mui/material/Portal';
import './mypage.css';
import Popper, { PopperPlacementType } from '@mui/material/Popper';
const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#ff6d75',
    },
    '& .MuiRating-iconHover': {
        color: '#ff3d47',
    },

});
const RadioCircleRatio = (props: any) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };
    const open = Boolean(anchorEl)
    return (
        <div onClick={handleClick} >
            <Grid container spacing={0} className='twoiteminrow'  >
                <Grid item md={6} sm={12} xs={12} >
                    <Typography component="legend" variant='h5'>{props.name}</Typography>
                </Grid >
                <Grid item md={6} sm={12} xs={12}>
                    <StyledRating

                        name={props.name}
                        defaultValue={props.value}
                        disabled
                        precision={0.5}
                        icon={<CircleIcon fontSize="medium" color="secondary" />}
                        emptyIcon={<CircleIcon fontSize="medium" color="info" />}
                    />
                    <Popper id={props.name} open={open} anchorEl={anchorEl} placement='right'>
                        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
                            <Typography>{props.desribtion}</Typography>
                        </Box>
                    </Popper>
                </Grid>
            </Grid >
        </div >
    )
}
export default RadioCircleRatio
/*colors
'inherit'
| 'action'
| 'disabled'
| 'primary'
| 'secondary'
| 'error'
| 'info'
| 'success'
| 'warning'
| string

+<Paper sx={{ display: { xs: 'none', md: 'block' } }} />
+<Box component="button" sx={{ display: { xs: 'none', md: 'block' } }} />
*/