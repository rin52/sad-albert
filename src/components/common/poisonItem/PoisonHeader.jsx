import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    row: {
        display: 'flex',
        alignItems: 'center',
    },
    image: {
        width: '32px',
        height: '32px',
        paddingLeft: '4px',
    },
    title: {
        paddingRight: '16px',
    },
    subtitle: {
        paddingLeft: '16px',
    },
}));

export default function PotionHeader(props) {
    const classes = useStyles();

    return (
        <div className={classes.row}>
            <Typography className={classes.title} variant="h6">{props.name}</Typography>
            {props.type && (
                <Typography variant="subtitle1" className={classes.subtitle} >
                    ({props.type})
                </Typography>
            )}

        </div>
    );
}