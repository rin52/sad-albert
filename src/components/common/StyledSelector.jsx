import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Colors from '../../helper/Colors';

const styles = theme => ({
    combo: {
        color: Colors.text,
        marginTop: '4px',
        minWidth: '150px',
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

class StyledSelector extends React.Component {
    constructor() {
        super();
        this.state = { isOpen: false };
    }

    onOpen = () => {
        this.setState({ isOpen: true });
    };

    onClose = () => {
        this.setState({ isOpen: false });
    };

    render() {
        const { classes } = this.props;
        return (
            <FormControl className={this.props.customStyle ? this.props.customStyle : undefined}>
                <InputLabel>{this.props.name}</InputLabel>
                <Select
                    value={this.props.selected}
                    onChange={this.props.onChange}
                    displayEmpty
                    name={this.props.name}
                    className={classes.combo}
                    onOpen={this.onOpen}
                    onClose={this.onClose}
                    open={this.state.isOpen}
                    native={false}
                >
                    {this.props.options.map(item => (
                        <MenuItem
                            key={item}
                            value={item}
                            className={classes.menuItemStyle}
                            classes={{ selected: classes.selected }}
                        >
                            {item}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        );
    }
}

export default withStyles(styles)(StyledSelector);