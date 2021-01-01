import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import getIngredientImage from '../../../helper/getIngredientImage';
import DisplayItem from '../../common/DisplayItem';
import DisplayMaxAmount from './ingredientDisplayHelper/DisplayMaxAmount';
import AmountAndEditSatchel from './ingredientDisplayHelper/AmountAndEditSatchel';
import IngredientCategory from '../../../helper/IngredientCategory';
import getIngredientKey from '../../../helper/satchel/getIngredientKey';
import DisplayWeight from './ingredientDisplayHelper/DisplayWeight';
import DisplayCost from './ingredientDisplayHelper/DisplayCost';

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
    row: {
        display: 'flex',
        paddingLeft: '36px',
    },
    separator: {
        width: '16px',
    },
}));

export default function IngredientDisplay(props) {
    const classes = useStyles();

    const image = getIngredientImage(props.item.category !== IngredientCategory.OTHER ? props.item.category : getIngredientKey(props.item.item));
    const dcString = props.item.DC ? ', DC: ' + props.item.DC : '';
    const subtitle = props.displayMaxAmount
        ? props.item.rarity + dcString
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

            <div className={classes.row}>
                {props.item.weight !== undefined && (
                    <DisplayWeight weight={props.item.weight} />
                )}
                <div className={classes.separator} />
                {props.item.cost !== undefined && (
                    <DisplayCost cost={props.item.cost} />
                )}
            </div>

        </DisplayItem>
    );
}