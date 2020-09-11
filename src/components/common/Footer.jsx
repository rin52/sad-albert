import React from 'react';
import {  useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
    },
});

export default function CenteredTabs(props) {
    const classes = useStyles();
    const state = useSelector(state => state.systemState.app)
    console.log(window.scrollY);
    return (
        <div className={classes.root}>
            <Typography variant="caption">
                This is a fan made homebrew project converting Witcher RPG to D&D 5e systems. Images are the property of NETFLIX, CD PROJECKT RED, and TALSORIAN GAMES and used without permission. Excerpts of text are taken from The WITCHER RPG books and D&D 5E books without permission.
            </Typography>
        </div>
    );
}
