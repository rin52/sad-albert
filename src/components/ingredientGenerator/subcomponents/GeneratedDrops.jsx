import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IngredientDisplay from './IngredientDisplay';
import GenerateButton from './GenerateButton';
import getRandomInt from '../../../helper/getRandomInt';
import DisplayArea from '../../common/DisplayArea';

const useStyles = makeStyles((theme) => ({
    messageArea: {
        display: 'flex',
        justifyContent: 'center',
        padding: '16px',
    },
}));

export default function GeneratedDrops(props) {
    const classes = useStyles();
    const [drops, setDrops] = React.useState([]);
    const [message, setMessage] = React.useState('');
    React.useEffect(() => {
        setDrops([]);
        setMessage('');
    }, [props]);

    const generate = (check) => {
        const possibleDrops = [];
        setDrops([]);
        setMessage('');

        props.list[props.selected].forEach((item) => {
            if (item.DC <= check) {
                possibleDrops.push(item);
            }
        });

        if (possibleDrops.length === 0) {
            setMessage('Nothing found');
        } else {
            const numDropped = getRandomInt(possibleDrops.length) + 1;
            let newDrops = [];

            if (numDropped === possibleDrops.length) {
                newDrops = possibleDrops;
                newDrops.forEach((item) => {
                    item.amount = getRandomInt(item.maxAmount) + 1;
                })
            } else {
                let counter = 0;
                let selectedArray = [];

                while (counter < numDropped) {
                    let index = getRandomInt(possibleDrops.length);

                    if (selectedArray.indexOf(index) === -1) {
                        const droppedItem = possibleDrops[index];
                        droppedItem.amount = getRandomInt(droppedItem.maxAmount) + 1;
                        newDrops.push(droppedItem);
                        selectedArray.push(index);
                        counter++;
                    }
                }
            }

            setDrops(newDrops);
        }
    }

    if (props.selected) {
        return (
            <div>
                <Typography>Item Drops</Typography>
                <DisplayArea>
                    {(drops.length === 0 && message === '') && (
                        <GenerateButton generate={generate} />
                    )}

                    {message !== '' && (
                        <div className={classes.messageArea}>
                            <Typography>{message}</Typography>
                        </div>
                    )}

                    {drops.map(item => (
                        <IngredientDisplay item={item} key={item.item} displayAmount />
                    ))}

                </DisplayArea>
                {(drops.length > 0 || message !== '') && (
                    <GenerateButton generate={generate} />
                )}
            </div>
        );
    }
    return (<div />)
}