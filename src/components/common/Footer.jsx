import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Constants from '../../helper/Constants';

const useStyles = makeStyles({
    root: {},
});

export default function Footer(props) {
    const classes = useStyles();

    const chosenSetting = useSelector(state => state.systemState.chosenSetting);

    const msg = chosenSetting === Constants.DND_HOMEBREW ?
        'This is a non-profit fan made homebrew project converting Witcher RPG to D&D ' +
        '5e systems (owned by Wizards of the Coast). Images are the property of NETFLIX, ' +
        'CD PROJECKT RED, and R. TALSORIAN GAMES and used without permission. Excerpts of ' +
        'text are taken from The WITCHER RPG books and D&D 5E books without permission. ' +
        'The Witcher and The Witcher series is owned by Andrzej Sapkowski.'
        :
        'This is a non-profit fan made homebrew project for managing alchemy ingredients from the Witcher RPG tabletop game ' +
        ' (owned by R. TALSORIAN GAMES). Images are the property of NETFLIX, ' +
        'CD PROJECKT RED, and TALSORIAN GAMES and used without permission. Excerpts of ' +
        'text are taken from The WITCHER RPG books without permission. ' +
        'The Witcher and The Witcher series is owned by Andrzej Sapkowski.';
    
    return (
        <div className={classes.root}>
            <Typography variant="caption">
                {msg}
            </Typography>
        </div>
    );
}
