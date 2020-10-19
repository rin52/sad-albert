import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Logo from '../../images/logo.svg';
import TitleLogo from '../../images/titleLogo.svg';
import AppsButton from './AppsButton';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    row: {
        display: 'flex',
    },
    image: {
        width: '32px',
        height: '32px',
        paddingRight: '8px'
    },
    titleImage: {
        height: '32px',
        width: 'auto',
    },
});

export default function CenteredTabs(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.row}>
                <img src={Logo} className={classes.image} alt="logo" />
                <img src={TitleLogo} className={classes.titleImage} alt="titleLogo" />
            </div>
            <AppsButton/>
        </div>
    );
}
