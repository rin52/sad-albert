import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {},
});

export default function Footer(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="caption">
                This is a non-profit fan made homebrew project converting Witcher RPG to D&D 5e systems (owned by Wizards of the Coast). Images are the property of NETFLIX, CD PROJECKT RED, and TALSORIAN GAMES and used without permission. Excerpts of text are taken from The WITCHER RPG books and D&D 5E books without permission. The Witcher and The Witcher series is owned by Andrzej Sapkowski.
            </Typography>
        </div>
    );
}
