import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import StyledModal from '../../../common/StyledModal';
import StyledSelector from '../../../common/StyledSelector';
import getWitcherBrews from '../../../../helper/satchel/getWitcherBrews';
import getIngredientKey from '../../../../helper/satchel/getIngredientKey';
import Rarity from '../../../../helper/Rarity';
import Constants from '../../../../helper/Constants';

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
});

export default function AddWitcherBrewToSatchelModal(props) {
    const classes = useStyles();
    const [category, setCategory] = React.useState('');
    const [item, setItem] = React.useState('');
    const [rarity, setRarity] = React.useState('');
    const [amount, setAmount] = React.useState(0);
    const [errorMsg, setErrorMessage] = React.useState('');

    const chosenSetting = useSelector(state => state.systemState.chosenSetting);

    const onCategoryChange = (event) => {
        setCategory(event.target.value);
        setRarity('');
        setErrorMessage('');
    };

    const onItemChange = (event) => {
        setItem(event.target.value);
        setErrorMessage('');
    };

    const onRarityChange = (event) => {
        setRarity(event.target.value);
        setErrorMessage('');
    };

    const onAmountChange = (event) => {
        setAmount(event.target.value);
        setErrorMessage('');
    };

    const isValid = () => {
        if (category === 'Potions' && chosenSetting === Constants.DND_HOMEBREW) {
            return category !== '' && item !== '' && rarity !== '' && amount > 0;
        }
        return category !== '' && item !== '' && amount > 0;
    }

    const submit = () => {
        if (isValid()) {
            const newItem = rarity !== ''
            ? {
                [getIngredientKey(item)]: { [rarity]: { amount: Number(amount) } }
            }
            : {
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
            title="Add Witcher Brew to Satchel"
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
                    options={["Potions", "Blade Oils", "Decoctions"]}
                    selected={category}
                    onChange={onCategoryChange}
                    customStyle={classes.root}
                />
                <StyledSelector
                    name="Brew"
                    options={getWitcherBrews(category, chosenSetting)}
                    selected={item}
                    onChange={onItemChange}
                    customStyle={classes.root}
                />
                {(category === "Potions" && chosenSetting === Constants.DND_HOMEBREW) && (
                    <StyledSelector
                        name="Rarity"
                        options={[Rarity.RARE, Rarity.UNCOMMON, Rarity.COMMON, Rarity.EVERYDAY]}
                        selected={rarity}
                        onChange={onRarityChange}
                        customStyle={classes.root}
                    />
                )}
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
