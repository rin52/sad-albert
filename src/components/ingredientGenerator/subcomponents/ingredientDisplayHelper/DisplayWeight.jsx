import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import weightIcon from '../../../../images/weight.svg';

const useStyles = makeStyles(() => ({
    detailRow: {
        display: 'flex',
        alignItems: 'center',
    },
    image: {
        width: '16px',
        height: '16px',
        paddingLeft: '8px',
    },
}));

export default function DisplayWeight(props) {
    const classes = useStyles();
    return (
        <div className={classes.detailRow}>
            <Typography>
                {props.weight}
            </Typography>
            <img src={weightIcon} alt="weight" className={classes.image} />
        </div>
    );
}