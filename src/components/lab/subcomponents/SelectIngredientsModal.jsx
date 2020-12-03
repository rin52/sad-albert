import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import StyledModal from '../../common/StyledModal';
import filterSatchelForIngredientsFromCategory from '../../../helper/satchel/filterSatchelForIngredientsFromCategory';
import getSelectedItemsObject from '../../../helper/lab/getSelectedItemsObject';
import getIngredientKey from '../../../helper/satchel/getIngredientKey';
import StyledSelector from '../../common/StyledSelector';
import { updateSatchel, removeFromSatchel } from '../../../actions/SatchelActions';
import getIngredientImage from '../../../helper/getIngredientImage';

const useStyles = makeStyles({
    root: {
        maxHeight: '300px',
        overflow: 'auto',
    },
    row: {
        display: 'flex',
        paddingTop: '4px',
        alignItems: 'center',
    },
    image: {
        height: '32px',
        width: '32px',
        paddingRight: '16px',
    },
});


export default function SelectIngredientsModal(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const satchelIngredients = useSelector(state => state.satchelState.ingredients);
    const [selectedItems, setSelectedItems] = React.useState(getSelectedItemsObject(props.recipeIngredients));
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
            dispatch(updateSatchel(newIngredients));
            deleteIngredients.forEach((ingredient) => {
                dispatch(removeFromSatchel(deleteIngredients));
            });
            props.setRegenerate(true);
            props.close();
        } else {
            setErrorMsg(msg);
        }
    };

    const onChange = (event, key) => {
        setSelectedItems({ ...selectedItems, [key]: event.target.value });
    };

    return (
        <StyledModal
            open={props.open}
            onClose={props.close}
            title="Select Used Ingredients"
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
                                options={filterSatchelForIngredientsFromCategory(satchelIngredients, category)}
                                selected={selectedItems[key]}
                                onChange={(event) => { onChange(event, key) }}
                            />
                        </div>
                    );
                })}
                <Typography color="error">{errorMsg}</Typography>
            </div>
        </StyledModal>
    );
}
