import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import getIngredientImage from '../../../helper/getIngredientImage';
import AmountAndEditSatchel from '../../ingredientGenerator/subcomponents/ingredientDisplayHelper/AmountAndEditSatchel';

const useStyles = makeStyles((theme) => ({
    row: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    image: {
        width: '32px',
        height: '32px',
        paddingLeft: '4px',
    },
    title: {
        paddingRight: '16px',
    },
    ingredients: {
        paddingRight: '16px',
    },
}));

export default function PotionHeader(props) {
    const classes = useStyles();

    const renderIngredients = () => {
        const ingredientsArray = [];

        props.ingredients.forEach(ingredient => {
            ingredientsArray.push(ingredient.category);
            for (let i = 1; i < ingredient.amount; i++) {
                ingredientsArray.push(ingredient.category);
            }
        });

        if (props.specificIngredients) {
            props.specificIngredients.forEach(specificIngredient => {
                ingredientsArray.push(specificIngredient.key);
                for (let i = 1; i < specificIngredient.amount; i++) {
                    ingredientsArray.push(specificIngredient.key);
                }
            });
        }

        return (
            <div className={classes.row}>
                <div className={classes.ingredients}>
                    {ingredientsArray.map((ingredient, index) => (
                        <img src={getIngredientImage(ingredient)} className={classes.image} alt={ingredient} key={props.name + props.ingredient + index} />
                    ))}
                </div>
            </div>
        );
    }

    const renderRarityAmounts = () => {
        const keys = Object.keys(props.amount);

        return (
            <div>
                {keys.map((key) => {
                    const amount = props.amount[key].amount ? props.amount[key].amount : 0;
                    return (
                        <div key={key}>
                            <AmountAndEditSatchel
                                rarity={key}
                                displayAmount={props.displayAmount}
                                editable={props.editable}
                                category={props.category}
                                itemName={props.name}
                                amount={amount}
                                key={key}
                                witcherPotions={props.witcherPotions}
                            />
                        </div>
                    );
                })}
            </div>
        )
    }

    return (
        <div>
            <div className={classes.row}>
                <Typography className={classes.title} variant="h6">{props.name}</Typography>
                {renderIngredients()}
                {props.DC && (
                    <Typography variant="subtitle1">
                        (Craft DC: {props.DC})
                    </Typography>
                )}
                {typeof props.amount === "number" && (
                    <AmountAndEditSatchel
                        displayAmount={props.displayAmount}
                        editable={props.editable}
                        category={props.category}
                        itemName={props.name}
                        amount={props.amount}
                    />
                )}
            </div>
            {typeof props.amount === "object" && (
                renderRarityAmounts()
            )}
        </div>
    );
}