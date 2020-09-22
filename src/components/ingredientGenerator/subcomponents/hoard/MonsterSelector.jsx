import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Remove from '@material-ui/icons/HighlightOff';
import StyledSelector from '../../../common/StyledSelector';
import Monsters from '../../../../data/Monsters';
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

export default function MonsterSelector(props) {
    const classes = useStyles();
    const [monster, setMonster] = React.useState(props.monster);
    const [check, setCheck] = React.useState(props.check);
    React.useEffect(() => {
        setMonster(props.monster);
        setCheck(props.check);
    }, [props]);

    const onMonsterChange = (event) => {
        setMonster(event.target.value);
        props.onMonsterChange(props.id, event.target.value, check);
    }

    const onCheckChange = (event) => {
        const value = event.target.value === '' ? '' : Number(event.target.value);

        setCheck(value);
        props.onMonsterChange(props.id, monster, value);
    }

    const onRemoveClicked = () => {
        props.removeMonster(props.id);
    }

    return (
        <DisplayItem>
            <div className={classes.grid}>
                <StyledSelector
                    name="Monster"
                    options={Object.keys(Monsters)}
                    selected={monster}
                    onChange={onMonsterChange}
                />
                <div />
                <TextField
                    label="DC"
                    type="number"
                    value={check}
                    onChange={onCheckChange}
                />
                <IconButton onClick={onRemoveClicked} className={classes.shift}>
                    <Remove color="secondary"/>
                </IconButton>
            </div>
        </DisplayItem>
    );
}