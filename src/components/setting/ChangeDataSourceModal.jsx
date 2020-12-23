import React from 'react';
import { useDispatch } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import StyledModal from '../common/StyledModal';
import { clearSatchel } from '../../actions/SatchelActions';
import { changeSetting } from '../../actions/SystemActions';

export default function ChangeDataSourceModal(props) {
    const dispatch = useDispatch();

    const submit = () => {
        dispatch(clearSatchel());
        dispatch(changeSetting(props.dataSource));
        props.close();
    };

    return (
        <StyledModal
            open={props.open}
            onClose={props.close}
            title="Update Data Source"
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
                <Typography>Changing the data source will clear your satchel, are you sure you would like to continue?</Typography>
            </div>
        </StyledModal>
    );
}
