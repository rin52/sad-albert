import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DisplayItem from '../DisplayItem';
import RecipeHeader from './RecipeHeader';
import DurationAndToxicityChart from './DurationAndToxicityChart';
import DisplayCost from '../../ingredientGenerator/subcomponents/ingredientDisplayHelper/DisplayCost';
import DisplayWeight from '../../ingredientGenerator/subcomponents/ingredientDisplayHelper/DisplayWeight';

const useStyles = makeStyles((theme) => ({
    grid: {
        display: 'grid',
        gridTemplateColumns: 'auto 16px 136px',
    },
    button: {
        display: 'flex',
        justifyItems: 'center',
        alignItems: 'center',
    },
    row: {
        display: 'flex',
        alignItems: 'center',
    },
    separator: {
        width: '16px',
    },
}));

export default function RecipeItem(props) {
    const classes = useStyles();

    const onCraftClick = () => {
        const hasRarities = (props.recipe.duration && typeof props.recipe.duration === 'object');
        props.craftRecipeClicked(props.recipe.ingredients,
            props.recipe.specificIngredients,
            hasRarities,
            props.recipe.DC,
            props.recipe.name,
            props.category,
        );
    };

    const getAmounts = () => {
        if (props.recipe.amount) {
            return props.recipe.amount;
        }
        if (props.hasRarities) {
            return {
                Rare: props.recipe.Rare ? props.recipe.Rare : 0,
                Uncommon: props.recipe.Uncommon ? props.recipe.Uncommon : 0,
                Common: props.recipe.Common ? props.recipe.Common : 0,
                Everyday: props.recipe.Everyday ? props.recipe.Everyday : 0,
            };
        }
        return 0;
    };

    const renderSpecificIngredientsText = () => {
        let ingredientString = 'Specific Ingredient(s): ';
        props.recipe.specificIngredients.forEach((specificIngredient, index) => {
            const endingStr = index !== props.recipe.specificIngredients.length - 1 ? ', ' : '.';
            const string = `${specificIngredient.name} x${specificIngredient.amount}${endingStr}`;
            ingredientString += string
        });
        return (
            <Typography>
                {ingredientString}
            </Typography>
        )
    };

    if (props.recipe.hide) {
        return null;
    }
    return (
        <DisplayItem>
            <div className={props.showCraft && classes.grid} >
                <div>
                    <div>
                        <RecipeHeader
                            name={props.recipe.name}
                            ingredients={props.recipe.ingredients}
                            specificIngredients={props.recipe.specificIngredients}
                            DC={props.recipe.DC}
                            category={props.category}
                            amount={props.displayAmount ? getAmounts() : 0}
                            displayAmount={props.displayAmount}
                            editable={props.editable}
                            hasRarities={props.hasRarities}
                            witcherPotions={props.witcherPotions}
                            deleteKnownRecipe={props.deleteKnownRecipe}
                        />
                        {props.recipe.craftTime && (
                            <Typography variant="subtitle1">
                                Craft Time: {props.recipe.craftTime}
                            </Typography>
                        )}
                        {props.recipe.formulaeCost && (
                            <div className={classes.row}>
                                <Typography variant="subtitle1">
                                    {`Formulae Cost: ${props.recipe.formulaeCost}`}
                                </Typography>
                                <DisplayCost />
                            </div>
                        )}
                        {props.recipe.specificIngredients && renderSpecificIngredientsText()}
                        <Typography>{props.recipe.effects}</Typography>
                        {props.recipe.notes && (
                            <Typography>{props.recipe.notes}</Typography>
                        )}
                    </div>
                    <DurationAndToxicityChart
                        duration={props.recipe.duration}
                        toxicity={props.recipe.toxicity}
                    />
                    <div className={classes.row}>
                        {props.recipe.weight !== undefined && (
                            <DisplayWeight weight={props.recipe.weight} />
                        )}
                        <div className={classes.separator} />
                        {props.recipe.cost !== undefined && (
                            <DisplayCost cost={props.recipe.cost} />
                        )}
                    </div>
                </div>
                {props.showCraft && (
                    <div />
                )}
                {props.showCraft && (
                    <div className={classes.button}>
                        <Button onClick={onCraftClick}>Craft Recipe</Button>
                    </div>
                )}
            </div>
        </DisplayItem>
    );
}