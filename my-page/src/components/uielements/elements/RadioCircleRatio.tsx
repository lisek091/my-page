import React from 'react'
import CircleIcon from '@mui/icons-material/Circle';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#ff6d75',
    },
    '& .MuiRating-iconHover': {
        color: '#ff3d47',
    },
});
const RadioCircleRatio = (props: any) => {
    return (
        <Box
            sx={{
                '& > legend': { mt: 2 },
            }}
        >
            <Typography component="legend" variant='h5'>{props.name}</Typography>
            <StyledRating
                name={props.name}
                defaultValue={props.value}
                disabled
                precision={0.5}
                icon={<CircleIcon fontSize="medium" color="secondary" />}
                emptyIcon={<CircleIcon fontSize="medium" color="info" />}
            />
        </Box>
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
*/