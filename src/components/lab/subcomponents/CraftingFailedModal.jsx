import React from 'react';
import Typography from '@material-ui/core/Typography';
import StyledModal from '../../common/StyledModal';

export default function CraftingFailedModal(props) {
    return (
        <StyledModal
            open={props.open}
            onClose={props.close}
            title="Failed Crafting"
            buttons={[
                {
                    text: 'Ok',
                    onClick: props.close,
                },
            ]}
        >
            <Typography>Failed to craft {props.recipeName}</Typography>
        </StyledModal>
    );
}
