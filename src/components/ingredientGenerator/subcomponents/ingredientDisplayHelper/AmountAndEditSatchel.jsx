import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Edit, Save } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import getIngredientKey from '../../../../helper/satchel/getIngredientKey';
import {
    removeIngredientFromSatchel,
    updateSatchelIngredients,
    removeWitcherBrewFromSatchel,
    updateSatchelWitcherBrews,
} from '../../../../actions/SatchelActions';
import { getCategory, getNewPotionItem } from '../../../../actions/helper/SatchelActionsHelper';


const useStyles = makeStyles(() => ({
    header: {
        display: 'flex',
        alignItems: 'flex-end',
    },
    rarityLabel: {
        paddingRight: '8px',
    },
    iconButton: {
        paddingTop: '0px',
    },
}));

export default function AmountAndEditSatchel(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [amount, setAmount] = React.useState(props.amount);
    const [isEditing, setIsEditing] = React.useState(false);

    React.useEffect(() => {
        setAmount(props.amount);
    }, [props]);

    const editClicked = () => {
        setIsEditing(true);
    };

    const handleChange = (event) => {
        setAmount(event.target.value);
    };

    const saveClicked = () => {
        setIsEditing(false);
        const key = getIngredientKey(props.itemName);

        if (amount > 0) {
            if (props.category === 'Ingredient') {
                dispatch(updateSatchelIngredients({ [key]: { amount: Number(amount) } }));
            } else if (props.category === "Potions") {

            } else if (props.category === "Blade Oils" || props.category === "Decoctions") {
                dispatch(updateSatchelWitcherBrews(getCategory(props.category), { [key]: { amount: Number(amount) } }));
            }
        } else {
            if (props.category === 'Ingredient') {
                dispatch(removeIngredientFromSatchel(key));
            } else if (props.category === "Blade Oils" || props.category === "Decoctions") {
                dispatch(removeWitcherBrewFromSatchel(getCategory(props.category), key));
            }
        }

        if (props.rarity) {
            if (props.category === "Potions") {
                const newItem = getNewPotionItem(props.witcherPotions, key, props.rarity, Number(amount));
                const rarityKeys = Object.keys(newItem);
                let allZero = true;

                for (let i = 0; i < rarityKeys.length; i += 1) {
                    const rarityKey = rarityKeys[i];
                    if (newItem[rarityKey].amount !== 0) {
                        allZero = false;
                        break;
                    }
                }

                if (allZero) {
                    dispatch(removeWitcherBrewFromSatchel(getCategory(props.category), key));
                } else {
                    dispatch(updateSatchelWitcherBrews(
                        getCategory(props.category),
                        {[key]: newItem},
                    ));
                }
            }
        }
    };

    if (isEditing) {
        return (
            <div className={classes.header}>
                {(props.displayAmount && props.rarity) && (
                    <Typography className={classes.rarityLabel}>{props.rarity}:</Typography>
                )}
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
            {(props.displayAmount && props.rarity) && (
                <Typography className={classes.rarityLabel}>{props.rarity}:</Typography>
            )}
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