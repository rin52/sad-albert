import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import getIngredientImage from '../../helper/getIngredientImage';

const useStyles = makeStyles({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    image: {
        width: '32px',
        height: '32px',
        margin: 'auto',
    },
    text: {
        width: '50px',
        margin: 'auto',
    },
});

export default function InventoryItem(props) {
    const classes = useStyles();    

    const handleChange = (event) => {
        props.setValue(event.target.value);
    };

    return (
        <div className={classes.root}>
                <img src={getIngredientImage(props.category)} alt={props.category} className={classes.image} />
                {props.readOnly ? (
                    <Typography align="center">{props.value}</Typography>
                ) : (
                    <TextField
                    value={props.value}
                    onChange={handleChange}
                    className={classes.text}
                    type="number"
                    inputProps={{
                        min: 0
                    }}
                />
                )}
        </div>
    );
}
