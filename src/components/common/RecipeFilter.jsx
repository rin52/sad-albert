import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Filter from '@material-ui/icons/FilterList';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import Colors from '../../helper/Colors';
import Constants from '../../helper/Constants';

const useStyles = makeStyles({
    row: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
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
    menuItemStyle: {
        color: Colors.text + '!important',
        backgroundColor: Colors.background + '!important',
    },
});

export default function RecipeFilter(props) {
    const filterOptions = [
        Constants.ALL_FORMULAE,
        Constants.MEMORIZED_FORMULAE,
        Constants.ACQUIRED_FORMULAE,
    ];

    const classes = useStyles();
    const [filter, setFilter] = React.useState([ Constants.ALL_FORMULAE ]);
    const [anchorEl, setAnchorEl] = React.useState(null);


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        
        if (filter.length === 0 || filter.indexOf(Constants.ALL_FORMULAE) !== -1) {
            setFilter([ Constants.ALL_FORMULAE ]);
        }
        props.filterUpdated(filter);
    };

    const handleChange = (option) => {
        const index = filter.indexOf(option);
        const newFilter = [...filter];

        if (index > -1) {
            newFilter.splice(index, 1);
        } else {
            newFilter.push(option);
        }
        
        setFilter(newFilter);
    };

    const print = () => {
        let string = '';
        filter.forEach((item, index) => {
            string += item;
            if (index !== filter.length - 1) {
                string += ', ';
            }
        });
        return string;
    }

    return (
        <div>
            <div className={classes.row}>
                <IconButton onClick={handleClick}>
                    <Filter color="primary" />
                </IconButton>
            </div>
            <div className={classes.row}>
                <Typography>{print()}</Typography>
            </div>

            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {filterOptions.map((filterOption) => (
                    <MenuItem
                        key={filterOption}
                        value={filterOption}
                        onClick={() => { handleChange(filterOption) }}
                        className={classes.menuItemStyle}
                    >
                        <Checkbox checked={filter.indexOf(filterOption) > -1} />
                        <Typography color="inherit">{filterOption}</Typography>
                    </MenuItem>
                ))}
            </Menu>
        </div>

    );
}
