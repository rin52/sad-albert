import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DisplayArea from '../../../common/DisplayArea';
import DisplayItem from '../../../common/DisplayItem';
import HoardItemSelector from './HoardItemSelector';
import generateIngredientDrops from '../../../../helper/generateIngredientDrops';
import IngredientDisplay from '../IngredientDisplay';

const useStyles = makeStyles((theme) => ({
    grid: {
        paddingTop: '16px',
        display: 'grid',
        gridTemplateColumns: 'auto 16px auto',
    },
    bottomRow: {
        display: 'flex',
        justifyContent: 'space-between',
    },
}));

export default function HoardPanel(props) {
    const classes = useStyles();
    const defaultMsg = 'Select ' + props.title.toLowerCase() + ', enter checks, and click \'Generate\' to generate item drops.'
    const [items, setItems] = React.useState([{ id: 1, item: '', check: '' }]);
    const [disabled, setDisabled] = React.useState(true);
    const [message, setMessage] = React.useState(defaultMsg);
    const [drops, setDrops] = React.useState([]);
    React.useEffect(() => {
        setItems([{ id: 1, item: '', check: '' }]);
        setDisabled(true);
        setMessage(defaultMsg);
        setDrops([]);
    }, [props]);

    const findIndex = (id) => (items.findIndex(item => item.id === id));

    const addItem = () => {
        const maxId = items.length > 0 ? Math.max.apply(Math.max, items.map(item => item.id)) : 0;
        setItems([...items, { id: maxId + 1, item: '', check: '' }]);
        setDisabled(true);
    }

    const removeItem = (id) => {
        const newItems = items.filter(item => item.id !== id);
        setItems(newItems);
        setDisabled(generateDisabled());
    }

    const onItemChange = (id, item, check) => {
        const index = findIndex(id);
        if (index !== -1) {
            const newItems = items;
            newItems[index].id = id;
            newItems[index].item = item;
            newItems[index].check = check;
            setItems(newItems);
        }
        setDisabled(generateDisabled());
    }

    const generateDisabled = () => {
        for (let i = 0; i < items.length; i += 1) {
            if (items[i].check === '' || items[i].item === '') {
                return true;
            }
        }
        return false;
    }


    const generate = () => {
        setDrops([]);
        setMessage('');
        let newDrops = [];

        items.forEach(item => {
            newDrops = [...newDrops, ...generateIngredientDrops(props.list, item.item, item.check)];
        });
        if (newDrops.length === 0) {
            setMessage('Nothing found');
        } else {
            setDrops(newDrops);
        }
    }

    return (
        <div className={classes.grid}>
            <div>
                <DisplayArea>
                    <div>
                        {items.map(item => {
                            return (
                                <HoardItemSelector
                                    key={item.id}
                                    item={item.item}
                                    check={item.check}
                                    id={item.id}
                                    onItemChange={onItemChange}
                                    removeItem={removeItem}
                                    type={props.title}
                                    list={props.list}
                                />
                            )
                        })}
                        <DisplayItem>
                            <div className={classes.bottomRow}>
                                <Button onClick={addItem}>Add</Button>
                                <Button onClick={generate} disabled={disabled || items.length === 0}>Generate</Button>
                            </div>
                        </DisplayItem>

                    </div>
                </DisplayArea>
            </div>
            <div />
            <div>
                <DisplayArea>
                    <div>
                        {message !== '' && (
                            <DisplayItem>
                                <Typography>
                                    {message}
                                </Typography>
                            </DisplayItem>
                        )}
                        {drops.map(item => (
                            <IngredientDisplay item={item} key={item.item} displayAmount />
                        ))}
                    </div>
                </DisplayArea>
            </div>
        </div>
    );
}