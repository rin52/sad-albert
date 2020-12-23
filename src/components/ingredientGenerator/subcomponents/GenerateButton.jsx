import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    buttonArea: {
        display: 'flex',
        justifyContent: 'center',
        padding: '16px',
    },
    separator: {
        paddingRight: '16px',
    },
}));

export default function GenerateButton(props) {
    const classes = useStyles();
    const [check, setCheck] = React.useState('');

    const onChange = (event) => {
        setCheck(Number(event.target.value));
    }

    const submit = () => {
        props.generate(check);
        setCheck('');
    }

    return (
        <div className={classes.buttonArea}>
            {props.hasDC && (
                <TextField
                label="DC"
                type="number"
                value={check}
                onChange={onChange}
                className={classes.separator}
            />
            )}
            <Button onClick={submit} disabled={check === '' && props.hasDC}>Generate</Button>
        </div>
    );
}