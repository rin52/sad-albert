import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});

export default function ItemAndAmount(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography>{props.item}</Typography>
            <Typography>{props.amount}</Typography>
        </div>
    );
}
