import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import getIngredientImage from '../../../helper/getIngredientImage';
import DisplayItem from '../../common/DisplayItem';
import DisplayMaxAmount from './ingredientDisplayHelper/DisplayMaxAmount';
import AmountAndEditSatchel from './ingredientDisplayHelper/AmountAndEditSatchel';

const useStyles = makeStyles(() => ({
    header: {
        display: 'flex',
        alignItems: 'flex-end',
    },
    image: {
        width: '32px',
        height: '32px',
        paddingRight: '4px',
    },
    title: {
        paddingRight: '4px',
    },
    rarity: {
        fontStyle: 'italic',
        paddingRight: '4px',
    },
}));

export default function IngredientDisplay(props) {
    const classes = useStyles();

    const image = getIngredientImage(props.item.category);
    const subtitle = props.displayMaxAmount
        ? props.item.rarity + ', DC: ' + props.item.DC
        : props.item.rarity;

    return (
        <DisplayItem>
            <div className={classes.header}>
                {image && (
                    <img
                        className={classes.image}
                        src={image}
                        alt={props.item.category}
                    />
                )}

                <Typography
                    className={classes.title}
                    variant="h6"
                >
                    {props.item.item}
                </Typography>
                <Typography
                    className={classes.rarity}
                    variant="subtitle1"
                >
                    ({subtitle})
                </Typography>
                <AmountAndEditSatchel
                    displayAmount={props.displayAmount}
                    editable={props.editable}
                    category="Ingredient"
                    itemName={props.item.item}
                    amount={props.item.amount}
                />
            </div>
            {props.displayMaxAmount && (
                <DisplayMaxAmount maxAmount={props.item.maxAmount} />
            )}
        </DisplayItem>
    );
}