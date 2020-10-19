import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import getIngredientImage from '../../../helper/getIngredientImage';

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
        })


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

    return (
        <div className={classes.row}>
            <Typography className={classes.title} variant="h6">{props.name}</Typography>
            {renderIngredients()}
            {props.DC && (
                <Typography variant="subtitle1">
                    (Craft DC: {props.DC})
                </Typography>
            )}

        </div>
    );
}