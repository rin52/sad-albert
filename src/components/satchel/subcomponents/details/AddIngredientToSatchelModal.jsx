import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import StyledModal from '../../../common/StyledModal';
import StyledSelector from '../../../common/StyledSelector';
import getAllIngredients from '../../../../helper/satchel/getAllIngredients';
import getIngredientKey from '../../../../helper/satchel/getIngredientKey';

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
});

export default function AddIngredientToSatchelModal(props) {
    const classes = useStyles();
    const [item, setItem] = React.useState('');
    const [amount, setAmount] = React.useState(0);
    const ingredients = getAllIngredients();

    const onItemChange = (event) => {
        setItem(event.target.value);
    }

    const onAmountChange = (event) => {
        setAmount(event.target.value);
    };

    const submit = () => {
        props.submit(getIngredientKey(item), amount);
    };

    return (
        <StyledModal
            open={props.open}
            onClose={props.close}
            title="Add Ingredient to Satchel"
            buttons={[
                {
                    text: 'Cancel',
                    onClick: props.close,
                },
                {
                    text: 'Submit',
                    onClick: submit
                }
            ]}
        >
            <div>
                <StyledSelector
                    name="Ingredient"
                    options={ingredients}
                    selected={item}
                    onChange={onItemChange}
                    customStyle={classes.root}
                />
                <TextField
                    label="Amount"
                    value={amount}
                    onChange={onAmountChange}
                    type="number"
                    inputProps={{
                        min: 0
                    }}
                    className={classes.root}
                />
            </div>
        </StyledModal>
    );
}
