import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import costIcon from '../../../../images/crowns.png';

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

export default function DisplayCost(props) {
    const classes = useStyles();
    return (
        <div className={classes.detailRow}>
            {props.cost !== undefined && (
                <Typography>
                    {props.cost}
                </Typography>
            )}
            <img src={costIcon} alt="cost" className={classes.image} />
        </div>
    );
}