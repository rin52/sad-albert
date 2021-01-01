import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { overwriteSatchel } from '../../../actions/SatchelActions';
import StyledModal from '../../common/StyledModal';
import validateJson from '../../../jsonSchemas/ValidateJson';

export default function ImportExportSatchel() {
    const [errorMsg, setErrorMsg] = React.useState('');
    const [errorList, setErrorList] = React.useState([]);
    const [successMsg, setSuccessMsg] = React.useState('');
    const dispatch = useDispatch();
    const chosenSetting = useSelector(state => state.systemState.chosenSetting);
    const inputRef = React.useRef(null);
    let fileReader;

    const importFile = () => {
        inputRef.current.click();
    };

    const onFileChange = (event) => {
        const file = event.target.files[0];
        fileReader = new FileReader();
        fileReader.onloadend = handleFileRead;
        fileReader.readAsText(file);
        setErrorMsg('');
        setErrorList([]);
    };

    const handleFileRead = () => {
        const satchel = fileReader.result;

        if (satchel !== '') {
            const isValid = validateJson(satchel, chosenSetting);
            if (isValid.valid) {
                dispatch(overwriteSatchel(JSON.parse(satchel)))
                setSuccessMsg('Successfully updated satchel.');
            } else {
                console.log(isValid.errors);
                let msg = isValid.errors[0].dataPath + ' ' + isValid.errors[0].message;
                if (isValid.errors[0].params && isValid.errors[0].params.additionalProperty) {
                    msg += ': ' + isValid.errors[0].params.additionalProperty;
                }
                if (isValid.errors[0].params && isValid.errors[0].params.allowedValues) {
                    setErrorList(isValid.errors[0].params.allowedValues);
                    msg += ':';
                }
                setErrorMsg(msg);
            }
        }
    };

    const clearError = () => {
        setErrorMsg('');
        setErrorList([]);
    };

    const clearSuccess = () => {
        setSuccessMsg('');
    };

    return (
        <div>
            <Button onClick={importFile}> Import</Button>
            <input
                type="file"
                ref={inputRef}
                accept=".json"
                style={{ display: "none" }}
                onChange={onFileChange}
            />
            {errorMsg !== '' && (
                <StyledModal
                    open
                    onClose={clearError}
                    title="Error Importing Satchel"
                    width="auto"
                    buttons={[
                        {
                            text: 'Cancel',
                            onClick: clearError,
                        }
                    ]}
                >
                    <div style={{overflow: 'auto', maxHeight: '300px'}}>
                        <Typography color="error">{errorMsg}</Typography>
                        {errorList.map(error => (
                            <Typography
                                color="error"
                                key={error}
                                style={{ paddingLeft: '16px' }}
                            >
                                {error}
                            </Typography>
                        ))}
                    </div>
                </StyledModal>
            )}
            {successMsg !== '' && (
                <StyledModal
                    open
                    onClose={clearError}
                    title="Success Importing Satchel"
                    width="auto"
                    buttons={[
                        {
                            text: 'Cancel',
                            onClick: clearSuccess,
                        }
                    ]}
                >
                    <Typography>{successMsg}</Typography>
                </StyledModal>
            )}
        </div >
    );
}