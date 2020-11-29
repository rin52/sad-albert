import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Colors from '../../../helper/Colors';


const useStyles = makeStyles((theme) => ({
    area: {
        border: '3px',
        borderStyle: 'double',
        borderColor: Colors.text,
    },
    buttonArea: {
        display: 'flex',
        justifyContent: 'center',
        padding: '16px',
    },
    separator: {
        width: '16px',
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
            <TextField
                label="DC"
                type="number"
                value={check}
                onChange={onChange}
            />
            <div className={classes.separator} />
            <Button onClick={submit} disabled={check === ''}>Generate</Button>
        </div>
    );
}