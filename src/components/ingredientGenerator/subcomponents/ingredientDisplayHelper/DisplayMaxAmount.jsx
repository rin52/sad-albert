import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
    title: {
        paddingRight: '4px',
    },
    detailBlock: {
        paddingLeft: '36px',
    },
    detailRow: {
        display: 'flex',
    }
}));

export default function DisplayMaxAmount(props) {
    const classes = useStyles();
    return (
        <div className={classes.detailBlock}>
            <div className={classes.detailRow}>
                <Typography
                    className={classes.title}
                    variant="body2"
                >
                    Max Amount:
                    </Typography>
                <Typography
                    variant="body2"
                >
                    {props.maxAmount}
                </Typography>
            </div>
        </div>
    );
}