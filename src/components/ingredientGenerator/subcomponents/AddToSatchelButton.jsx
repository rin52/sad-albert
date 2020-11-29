import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DisplayItem from '../../common/DisplayItem';
import { updateSatchel } from '../../../actions/SatchelActions';
import getIngredientKey from '../../../helper/satchel/getIngredientKey';

const useStyles = makeStyles((theme) => ({
    center: {
        display: 'flex',
        justifyContent: 'center',
    },
}));

export default function AddToSatchelButton(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const ingredients = useSelector(state => state.satchelState.ingredients);

    const [beenAdded, setBeenAdded] = React.useState(false);


    React.useEffect(() => {
        setBeenAdded(false);
    }, [props]);


    const pushToSatchel = () => {
        const newIngredients = {};

        props.drops.forEach((item) => {
            const key = getIngredientKey(item.item);

            if (newIngredients[key]) {
                newIngredients[key] = {
                    amount: newIngredients[key].amount + item.amount,
                };
            } else {
                const curAmountInSatchel = (ingredients[key] && ingredients[key].amount) ? ingredients[key].amount : 0;
                newIngredients[key] = {
                    amount: curAmountInSatchel + item.amount,
                }
            }
        });

        dispatch(updateSatchel(newIngredients));
        setBeenAdded(true);
    };

    if (beenAdded) {
        return (
            <DisplayItem>
                <div className={classes.center}>
                    <Typography>Added To Satchel</Typography>
                </div>
            </DisplayItem>
        );
    }

    if (props.drops.length > 0) {
        return (
            <DisplayItem>
                <div className={classes.center}>
                    <Button onClick={pushToSatchel}>Add To Satchel</Button>
                </div>
            </DisplayItem>
        );
    }
    return (<div />)
}