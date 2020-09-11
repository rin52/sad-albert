import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Colors from '../../helper/Colors';

const useStyles = makeStyles((theme) => ({
    area: {
        borderTop: '1px',
        borderTopStyle: 'solid',
        borderColor: Colors.greyBorder,
        padding: '16px',
    },
}));

export default function DisplayItem(props) {
    const classes = useStyles();

    return (
        <div className={classes.area}>
            {props.children}
        </div>
    );
}