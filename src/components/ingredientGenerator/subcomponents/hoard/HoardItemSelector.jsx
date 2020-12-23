import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Remove from '@material-ui/icons/HighlightOff';
import StyledSelector from '../../../common/StyledSelector';
import DisplayItem from '../../../common/DisplayItem';

const useStyles = makeStyles((theme) => ({
    grid: {
        display: 'grid',
        gridTemplateColumns: 'auto 16px auto 36px',
    },
    shift: {
        marginLeft: '12px',
    },
}));

export default function HoardItemSelector(props) {
    const classes = useStyles();
    const [item, setItem] = React.useState(props.item);
    const [check, setCheck] = React.useState(props.check);
    React.useEffect(() => {
        setItem(props.item);
        setCheck(props.check);
    }, [props]);

    const onItemChange = (event) => {
        setItem(event.target.value);
        props.onItemChange(props.id, event.target.value, check);
    }

    const onCheckChange = (event) => {
        const value = event.target.value === '' ? '' : Number(event.target.value);

        setCheck(value);
        props.onItemChange(props.id, item, value);
    }

    const onRemoveClicked = () => {
        props.removeItem(props.id);
    }

    return (
        <DisplayItem>
            <div className={classes.grid}>
                <StyledSelector
                    name={props.type}
                    options={Object.keys(props.list)}
                    selected={item}
                    onChange={onItemChange}
                />
                <div />
                {props.hasDC ? (
                    <TextField
                    label="DC"
                    type="number"
                    value={check}
                    onChange={onCheckChange}
                />
                ) : (
                    <div/>
                )}
                
                <IconButton onClick={onRemoveClicked} className={classes.shift}>
                    <Remove color="secondary"/>
                </IconButton>
            </div>
        </DisplayItem>
    );
}