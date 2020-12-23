import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import StyledModal from '../../common/StyledModal';
import { overwriteSatchel } from '../../../actions/SatchelActions';
import Colors from '../../../helper/Colors';
import validateJson from '../../../jsonSchemas/ValidateJson';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
    textArea: {
        width: '100%',
        color: Colors.text,
        borderColor: Colors.borderBottomColor,
        backgroundColor: Colors.greyBorder,
    },
});

export default function ImportSatchelModal(props) {
    const classes = useStyles();
    const [satchel, setSatchel] = React.useState('');
    const [errorMsg, setErrorMsg] = React.useState('');
    const dispatch = useDispatch();
    const chosenSetting = useSelector(state => state.systemState.chosenSetting);

    const onChange = (event) => {
        setSatchel(event.target.value);
        setErrorMsg('');
    }

    const submit = () => {
        if (satchel !== '') {
            const isValid = validateJson(satchel, chosenSetting);
            if (isValid.valid) {
                dispatch(overwriteSatchel(JSON.parse(satchel)))
                props.close();
            } else {
                setErrorMsg(isValid.errors[0].dataPath + ' ' + isValid.errors[0].message);
            }
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
                    rowsMax={10}
                />
                {errorMsg !== '' && (
                    <Typography color="error">{errorMsg}</Typography>
                )}
            </div>
        </StyledModal>
    );
}
