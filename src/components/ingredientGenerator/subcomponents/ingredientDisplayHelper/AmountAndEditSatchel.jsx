import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Edit, Save } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import getIngredientKey from '../../../../helper/satchel/getIngredientKey';
import { removeFromSatchel, updateSatchel } from '../../../../actions/SatchelActions';

const useStyles = makeStyles(() => ({
    header: {
        display: 'flex',
        alignItems: 'flex-end',
    },
    iconButton: {
        paddingTop: '0px',
    },
}));

export default function AmountAndEditSatchel(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [amount, setAmount] = React.useState(props.item.amount);
    const [isEditing, setIsEditing] = React.useState(false);

    React.useEffect(() => {
        setAmount(props.item.amount);
    }, [props]);

    const editClicked = () => {
        setIsEditing(true);
    };

    const handleChange = (event) => {
        setAmount(event.target.value);
    };

    const saveClicked = () => {
        console.log('save to satchel');
        setIsEditing(false);
        const key = getIngredientKey(props.item.item);

        if (amount > 0) {
            dispatch(updateSatchel({[key] : {amount: Number(amount)}}));
        } else {
            dispatch(removeFromSatchel(key));
        }
        
    };

    if (isEditing) {
        return (
            <div className={classes.header}>
                {(props.displayAmount) && (
                    <TextField
                        value={amount}
                        onChange={handleChange}
                        type="number"
                        inputProps={{
                            min: 0
                        }}
                    />
                )}
                {props.editable && (
                    <IconButton className={classes.iconButton} onClick={saveClicked}>
                        <Save color="primary" />
                    </IconButton>
                )}
            </div>
        );
    }
    return (
        <div className={classes.header}>
            {(props.displayAmount) && (
                <Typography>x{amount}</Typography>
            )}
            {props.editable && (
                <IconButton className={classes.iconButton} onClick={editClicked}>
                    <Edit color="primary" />
                </IconButton>
            )}
        </div>
    );
}