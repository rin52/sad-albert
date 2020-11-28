import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import Colors from '../../helper/Colors';
import { switchApp } from '../../actions/SystemActions';
import Constants from '../../helper/Constants';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
    },
    iconButton: {
        padding: '4px',
    },
    icon: {
        color: '#eaeaea',
    },
    menuItemStyle: {
        color: Colors.text,
        backgroundColor: Colors.background,
        '&:hover': {
            backgroundColor: Colors.button,
            color: Colors.buttonText,
        },
    },
    selected: {
        color: Colors.buttonText,
        backgroundColor: Colors.accent + '!important',
        '&:hover': {
            backgroundColor: Colors.button + '!important',
            color: Colors.buttonText,
        },
    }
});

export default function AppsButton() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const curApp = useSelector(state => state.systemState.app);
    const options = [
        Constants.INGREDIENT_GENERATOR,
        Constants.INGREDIENTS,
        Constants.WITCHER_RECIPES,
        Constants.ALCHEMY_FORMULAE,
        Constants.LAB,
        Constants.DMG_POISONS,
        Constants.SATCHEL,
    ];

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (app) => {
        setAnchorEl(null);
        if (options.indexOf(app) !== -1) {
            dispatch(switchApp(app));
        }
    };


    return (
        <div className={classes.root}>
            <Typography className={classes.icon}>{curApp}</Typography>
            <IconButton className={classes.iconButton} onClick={handleClick}>
                <MenuIcon className={classes.icon} />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {
                    options.map(option => (
                        <MenuItem
                            key={option}
                            value={option}
                            className={classes.menuItemStyle}
                            classes={{ selected: classes.selected }}
                            onClick={() => { handleClose(option) }}
                            selected={option === curApp}
                        >
                            {option}
                        </MenuItem>
                    ))
                }
            </Menu>
        </div>
    );
}