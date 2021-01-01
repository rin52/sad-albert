import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import StyledModal from '../../../common/StyledModal';
import StyledSelector from '../../../common/StyledSelector';
import getWitcherBrews from '../../../../helper/satchel/getWitcherBrews';
import getAlchemy from '../../../../helper/satchel/getAlchemy';
import getIngredientKey from '../../../../helper/satchel/getIngredientKey';
import Constants from '../../../../helper/Constants';
import { getCategory } from '../../../../actions/helper/SatchelActionsHelper';

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
});

export default function AddKnownRecipeToSatchelModal(props) {
    const classes = useStyles();
    const [type, setType] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [item, setItem] = React.useState('');
    const [errorMsg, setErrorMessage] = React.useState('');

    const chosenSetting = useSelector(state => state.systemState.chosenSetting);

    const onTypeChange = (event) => {
        setType(event.target.value);
        setCategory('');
        setItem('');
        setErrorMessage('');
    };

    const onCategoryChange = (event) => {
        setCategory(event.target.value);
        setItem('');
        setErrorMessage('');
    };

    const onItemChange = (event) => {
        setItem(event.target.value);
        setErrorMessage('');
    };

    const isValid = () => (type !== '' && category !== '' && item !== '');

    const submit = () => {
        if (isValid()) {
            props.submit(getCategory(type), getCategory(category), getIngredientKey(item));
        } else {
            setErrorMessage('All fields are required.');
        }
    };

    const getCategoryOptions = () => {
        if (type === Constants.WITCHER_BREWS) {
            return [Constants.POTIONS, Constants.BLADE_OILS, Constants.DECOCTIONS];
        } else if (type === Constants.ALCHEMY_FORMULAE) {
            return [Constants.NOVICE_FORMULAE, Constants.JOURNEYMAN_FORMULAE, Constants.MASTER_FORMULAE];
        }
        return [];
    }

    const getItemOptions = () => {
        if (type === Constants.WITCHER_BREWS) {
            return getWitcherBrews(category, chosenSetting);
        } else if (type === Constants.ALCHEMY_FORMULAE) {
            return getAlchemy(category, chosenSetting)
        }
        return [];
    }

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
                    name="Type"
                    options={[Constants.WITCHER_BREWS, Constants.ALCHEMY_FORMULAE]}
                    selected={type}
                    onChange={onTypeChange}
                    customStyle={classes.root}
                />
                <StyledSelector
                    name="Category"
                    options={getCategoryOptions()}
                    selected={category}
                    onChange={onCategoryChange}
                    customStyle={classes.root}
                />
                <StyledSelector
                    name="Formulae"
                    options={getItemOptions()}
                    selected={item}
                    onChange={onItemChange}
                    customStyle={classes.root}
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
