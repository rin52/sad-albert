import React from 'react';
import { useDispatch } from 'react-redux';
import StyledModal from '../../../common/StyledModal';
import { removeKnownRecipe } from '../../../../actions/SatchelActions';
import { Typography } from '@material-ui/core';
import Constants from '../../../../helper/Constants';
import { getCategory } from '../../../../actions/helper/SatchelActionsHelper';
import getIngredientKey from '../../../../helper/satchel/getIngredientKey';

export default function DeleteKnownRecipeModal(props) {
    const dispatch = useDispatch();

    const submit = () => {
        console.log(props);
        dispatch(removeKnownRecipe(getCategory(getType()), getCategory(props.category), getIngredientKey(props.itemName)));
        props.close();
    };

    const getType = () => {
        if (props.category === Constants.POTIONS
            || props.category === Constants.BLADE_OILS
            || props.category === Constants.DECOCTIONS) {
            return Constants.WITCHER_BREWS;
        } else if (props.category === Constants.NOVICE_FORMULAE
            || props.category === Constants.JOURNEYMAN_FORMULAE
            || props.category === Constants.MASTER_FORMULAE) {
            return Constants.ALCHEMY_FORMULAE;
        }
        return '';
    }

    return (
        <StyledModal
            open={props.open}
            onClose={props.close}
            title="Remove Known Recipe"
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
                <Typography>{`Are you sure you would like to remove ${props.itemName} from known recipes?`}</Typography>
            </div>
        </StyledModal>
    );
}
