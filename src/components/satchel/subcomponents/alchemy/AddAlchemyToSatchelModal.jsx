import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import StyledModal from '../../../common/StyledModal';
import StyledSelector from '../../../common/StyledSelector';
import getAlchemy from '../../../../helper/satchel/getAlchemy';
import getIngredientKey from '../../../../helper/satchel/getIngredientKey';

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
});

export default function AddAlchemyToSatchelModal(props) {
    const classes = useStyles();
    const [category, setCategory] = React.useState('');
    const [item, setItem] = React.useState('');
    const [amount, setAmount] = React.useState(0);
    const [errorMsg, setErrorMessage] = React.useState('');

    const onCategoryChange = (event) => {
        setCategory(event.target.value);
        setErrorMessage('');
    };

    const onItemChange = (event) => {
        setItem(event.target.value);
        setErrorMessage('');
    };

    const onAmountChange = (event) => {
        setAmount(event.target.value);
        setErrorMessage('');
    };

    const isValid = () => (category !== '' && item !== '' && amount > 0);

    const submit = () => {
        if (isValid()) {
            const newItem = {
                [getIngredientKey(item)]: { amount: Number(amount) }
            };
        props.submit(category, newItem);
        } else {
            setErrorMessage('All fields are required.');
        }
    };

    return (
        <StyledModal
            open={props.open}
            onClose={props.close}
            title="Add Alchemy to Satchel"
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
                    name="Category"
                    options={["Novice Formulae", "Journeyman Formulae", "Master Formulae"]}
                    selected={category}
                    onChange={onCategoryChange}
                    customStyle={classes.root}
                />
                <StyledSelector
                    name="Formulae"
                    options={getAlchemy(category)}
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
                {errorMsg !== '' && (
                    <Typography color="error">
                        {errorMsg}
                    </Typography>
                )}
            </div>
        </StyledModal>
    );
}
