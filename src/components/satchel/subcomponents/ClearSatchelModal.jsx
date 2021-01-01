import React from 'react';
import { useDispatch } from 'react-redux';
import StyledModal from '../../common/StyledModal';
import { clearSatchel } from '../../../actions/SatchelActions';
import { Typography } from '@material-ui/core';

export default function ClearSatchelModal(props) {
    const dispatch = useDispatch();

    const submit = () => {
        dispatch(clearSatchel());
        props.close();
    };

    return (
        <StyledModal
            open={props.open}
            onClose={props.close}
            title="Clear Satchel"
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
                <Typography>Are you sure you would like to clear the satchel inventory?</Typography>
            </div>
        </StyledModal>
    );
}
