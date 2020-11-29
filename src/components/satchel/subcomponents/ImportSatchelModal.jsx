import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import StyledModal from '../../common/StyledModal';
import { overwriteSatchel } from '../../../actions/SatchelActions';
import Colors from '../../../helper/Colors';

const useStyles = makeStyles({
    textArea: {
        width: '100%',
        color: Colors.text,
        borderColor: Colors.borderBottomColor,
        backgroundColor: Colors.greyBorder,
    },
});

export default function AddIngredientToSatchelModal(props) {
    const classes = useStyles();
    const [satchel, setSatchel] = React.useState('');
    const dispatch = useDispatch();

    const onChange = (event) => {
        setSatchel(event.target.value);
    }

    const submit = () => {
        if (satchel !== '') {
            dispatch(overwriteSatchel(JSON.parse(satchel)))
            props.close();
        }
    };

    return (
        <StyledModal
            open={props.open}
            onClose={props.close}
            title="Import Satchel"
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
                <TextareaAutosize
                    value={satchel}
                    onChange={onChange}
                    className={classes.textArea}
                />
            </div>
        </StyledModal>
    );
}
