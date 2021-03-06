import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IngredientDisplay from './IngredientDisplay';
import GenerateButton from './GenerateButton';
import generateIngredientDrops from '../../../helper/generateIngredientDrops';
import DisplayArea from '../../common/DisplayArea';
import AddToSatchelButton from './AddToSatchelButton';
import determineHasDC from '../../../helper/generator/determineHasDC';

const useStyles = makeStyles((theme) => ({
    messageArea: {
        display: 'flex',
        justifyContent: 'center',
        padding: '16px',
    },
}));

export default function GeneratedDrops(props) {
    const classes = useStyles();
    const [hasDC, setHasDC] = React.useState(determineHasDC(props.list, props.selected));
    const [drops, setDrops] = React.useState([]);
    const [message, setMessage] = React.useState('');
    React.useEffect(() => {
        setDrops([]);
        setMessage('');
        setHasDC(determineHasDC(props.list, props.selected));
    }, [props]);

    const generate = (check) => {
        setDrops([]);
        setMessage('');
        const newDrops = generateIngredientDrops(props.list, props.selected, check);
        if (newDrops.length === 0) {
            setMessage('Nothing found');
        } else {
            setDrops(newDrops);
        }
    }

    if (props.selected) {
        return (
            <div>
                <Typography>Item Drops</Typography>
                <DisplayArea>
                    {(drops.length === 0 && message === '') && (
                        <GenerateButton generate={generate} hasDC={hasDC} />
                    )}

                    {message !== '' && (
                        <div className={classes.messageArea}>
                            <Typography>{message}</Typography>
                        </div>
                    )}

                    {drops.map(item => (
                        <IngredientDisplay item={item} key={item.item} displayAmount />
                    ))}
                    <AddToSatchelButton drops={drops} />
                </DisplayArea>
                {(drops.length > 0 || message !== '') && (
                    <GenerateButton generate={generate} hasDC={hasDC} />
                )}
            </div>
        );
    }
    return (<div />)
}