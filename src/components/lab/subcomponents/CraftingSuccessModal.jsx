import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import StyledModal from '../../common/StyledModal';
import getIngredientKey from '../../../helper/satchel/getIngredientKey';
import { updateSatchelWitcherBrews, updateSatchelAlchemy } from '../../../actions/SatchelActions';

export default function CraftingSuccessModal(props) {
    const satchel = useSelector(state => state.satchelState);
    const dispatch = useDispatch();

    const submit = () => {
        const key = getIngredientKey(props.recipeName);

        let newItem = {};

        if (props.rarity) {
            if (satchel[props.type]
                && satchel[props.type][props.category]
                && satchel[props.type][props.category][key]
                && satchel[props.type][props.category][key][props.rarity]
            ) {
                newItem = {
                    [key]: {
                        ...satchel[props.type][props.category][key],
                        [props.rarity]: {
                            amount: satchel[props.type][props.category][key][props.rarity].amount + 1,
                        },
                    },
                };
            } else if (satchel[props.type]
                && satchel[props.type][props.category]
                && satchel[props.type][props.category][key]
            ) {
                newItem = {
                    [key]: {
                        ...satchel[props.type][props.category][key],
                        [props.rarity]: {
                            amount: 1,
                        },
                    },
                };
            } else {
                newItem = {
                    [key]: {
                        [props.rarity]: {
                            amount: 1,
                        },
                    },
                };
            }
        } else {
            if (satchel[props.type]
                && satchel[props.type][props.category]
                && satchel[props.type][props.category][key]
            ) {
                newItem = {
                    [key]: {
                        amount: satchel[props.type][props.category][key].amount + 1,
                    },
                };
            } else {
                newItem = {
                    [key]: {
                        amount: 1,
                    },
                };
            }
        }

        if (props.type === 'witcherBrews') {
            dispatch(updateSatchelWitcherBrews(props.category, newItem));
        } else if (props.type === 'alchemy') {
            dispatch(updateSatchelAlchemy(props.category, newItem));
        }

        props.close();
    };

    return (
        <StyledModal
            open={props.open}
            onClose={props.close}
            title="Successful Crafting"
            buttons={[
                {
                    text: 'Ok',
                    onClick: submit,
                }
            ]}
        >
            <div>
                <Typography>Successfully crafted {props.recipeName}.</Typography>
                {props.rarity !== '' && (
                    <Typography>Rarity: {props.rarity}</Typography>
                )}
            </div>
        </StyledModal>
    );
}
