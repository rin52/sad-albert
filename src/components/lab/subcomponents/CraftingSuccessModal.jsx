import React from 'react';
import Typography from '@material-ui/core/Typography';
import StyledModal from '../../common/StyledModal';

export default function CraftingSuccessModal(props) {
    const submit = () => {
        //TODO
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
