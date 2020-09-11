import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import StyledSelector from '../../common/StyledSelector';
import PossibleDrops from './PossibleDrops';
import GeneratedDrops from './GeneratedDrops';

const useStyles = makeStyles((theme) => ({
    selector: {
        display: 'flex',
        justifyContent: 'center',
    },
    grid: {
        paddingTop: '16px',
        display: 'grid',
        gridTemplateColumns: 'auto 16px auto',
    }
}));

export default function GeneratorPanel(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState('');
    React.useEffect(() => {
        setValue('');
    }, [props]);

    const onChange = (event) => {
        setValue(event.target.value);
    }

    return (
        <div>
            <div className={classes.selector}>
                <StyledSelector
                    name={props.title}
                    options={Object.keys(props.list)}
                    selected={value}
                    onChange={onChange}
                />
            </div>
            <div className={classes.grid}>
                <PossibleDrops
                    list={props.list}
                    selected={value}
                />
                <div />
                <GeneratedDrops
                    list={props.list}
                    selected={value}
                />
            </div>
        </div>
    );
}