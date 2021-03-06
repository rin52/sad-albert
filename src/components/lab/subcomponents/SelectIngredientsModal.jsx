import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import StyledModal from '../../common/StyledModal';
import filterSatchelForIngredientsFromCategory from '../../../helper/satchel/filterSatchelForIngredientsFromCategory';
import getSelectedItemsObject from '../../../helper/lab/getSelectedItemsObject';
import getIngredientKey from '../../../helper/satchel/getIngredientKey';
import StyledSelector from '../../common/StyledSelector';
import { updateSatchelIngredients, removeIngredientFromSatchel } from '../../../actions/SatchelActions';
import getIngredientImage from '../../../helper/getIngredientImage';
import determinePotionRarity from '../../../helper/lab/determinePotionRarity';
import getIngredientRarity from '../../../helper/lab/getIngredientRarity';

const useStyles = makeStyles({
    root: {
        maxHeight: '300px',
        overflow: 'auto',
    },
    row: {
        display: 'flex',
        paddingBottom: '4px',
        alignItems: 'center',
    },
    image: {
        height: '32px',
        width: '32px',
        paddingRight: '16px',
    },
    rarity: {
        fontStyle: 'italic',
        paddingLeft: '4px',
    },
});


export default function SelectIngredientsModal(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const satchelIngredients = useSelector(state => state.satchelState.ingredients);
    const chosenSetting = useSelector(state => state.systemState.chosenSetting);
    const [selectedItems, setSelectedItems] = React.useState(getSelectedItemsObject(props.recipeIngredients));
    const [check, setCheck] = React.useState('');
    const [errorMsg, setErrorMsg] = React.useState('');
    const keys = Object.keys(selectedItems);

    const submit = () => {
        const submittedItems = {};
        let msg = '';
        const newIngredients = {};
        const deleteIngredients = [];

        for (let i = 0; i < keys.length; i += 1) {
            const key = keys[i];
            const ingredient = selectedItems[key];
            if (ingredient === '') {
                msg = 'Missing Ingredient';
                break;
            }
            if (submittedItems[ingredient] && submittedItems[ingredient].amount) {
                submittedItems[ingredient] = { amount: submittedItems[ingredient].amount + 1 };
            } else {
                submittedItems[ingredient] = { amount: 1 }
            }
        }

        if (check === '') {
            msg = "Missing craft check";
        }

        props.recipeSpecificIngredients.forEach((specificIngredient) => {
            if (submittedItems[specificIngredient.name] && submittedItems[specificIngredient.name].amount) {
                submittedItems[specificIngredient.name] = { amount: submittedItems[specificIngredient.name].amount + specificIngredient.amount };
            } else {
            submittedItems[specificIngredient.name] = {amount: specificIngredient.amount};
            }
        });

        if (msg === '') {
            const submittedItemsKeys = Object.keys(submittedItems);

            for (let i = 0; i < submittedItemsKeys.length; i += 1) {
                const key = submittedItemsKeys[i];
                const satchelKey = getIngredientKey(key);

                if (satchelIngredients[satchelKey].amount > submittedItems[key].amount) {
                    newIngredients[satchelKey] = { amount: satchelIngredients[satchelKey].amount - submittedItems[key].amount }
                } else if (satchelIngredients[satchelKey].amount === submittedItems[key].amount) {
                    deleteIngredients.push(satchelKey);
                } else {
                    msg = 'Too many ' + key + ' selected.';
                    break;
                }
            }
        };

        if (msg === '') {
            dispatch(updateSatchelIngredients(newIngredients));
            deleteIngredients.forEach((ingredient) => {
                dispatch(removeIngredientFromSatchel(ingredient));
            });
            if (check >= props.craftDc) {
                props.craftingSuccess(props.hasRarities ? determinePotionRarity(selectedItems, chosenSetting) : '');
            } else {
                props.craftingFail();
            }
            props.setRegenerate(true);
            props.close();
        } else {
            setErrorMsg(msg);
        }
    };

    const onChange = (event, key) => {
        const newSelectedItems = { ...selectedItems, [key]: event.target.value };
        setSelectedItems(newSelectedItems);
    };

    const onCheckChange = (event) => {
        const value = event.target.value === '' ? '' : Number(event.target.value);
        setCheck(value);
    };

    return (
        <StyledModal
            open={props.open}
            onClose={props.close}
            title="Select Ingredients"
            buttons={[
                {
                    text: 'Cancel',
                    onClick: props.close,
                },
                {
                    text: 'Craft',
                    onClick: submit
                }
            ]}
        >
            <div className={classes.root}>
                {keys.map((key) => {
                    const category = key.split('_')[0];
                    return (
                        <div key={key} className={classes.row}>
                            <img className={classes.image} alt={key} src={getIngredientImage(category)} />
                            <StyledSelector
                                name={category}
                                options={filterSatchelForIngredientsFromCategory(satchelIngredients, category, chosenSetting)}
                                selected={selectedItems[key]}
                                onChange={(event) => { onChange(event, key) }}
                            />
                            {selectedItems[key] !== '' && (
                                <Typography
                                    className={classes.rarity}
                                    variant="subtitle1"
                                >
                                    {getIngredientRarity(selectedItems[key], chosenSetting).substring(0, 1)}
                                </Typography>
                            )}
                        </div>
                    );
                })}
                {props.recipeSpecificIngredients.map((specificIngredient) => (
                    <div key={specificIngredient.key} className={classes.row}>
                        <img className={classes.image} alt={specificIngredient.key} src={getIngredientImage(specificIngredient.key)} />
                        <StyledSelector
                            options={[specificIngredient.name]}
                            selected={specificIngredient.name}
                            disable
                        />
                        <Typography
                            className={classes.rarity}
                            variant="subtitle1"
                        >
                            {getIngredientRarity(specificIngredient.name, chosenSetting).substring(0, 1)}
                        </Typography>
                    </div>
                ))}

                <TextField
                    label="DC"
                    type="number"
                    value={check}
                    onChange={onCheckChange}
                />
                <Typography color="error">{errorMsg}</Typography>
            </div>
        </StyledModal>
    );
}
