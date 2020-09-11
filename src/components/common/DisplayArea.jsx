import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Colors from '../../helper/Colors';

const useStyles = makeStyles((theme) => ({
    area: {
        border: '3px',
        borderStyle: 'double',
        borderColor: Colors.text,
    },
}));

export default function DisplayArea(props) {
    const classes = useStyles();

    return (
        <div className={classes.area}>
            {props.children}
        </div>
    );
}