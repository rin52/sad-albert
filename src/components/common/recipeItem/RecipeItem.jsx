import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DisplayItem from '../DisplayItem';
import RecipeHeader from './RecipeHeader';
import DurationAndToxicityChart from './DurationAndToxicityChart';

const useStyles = makeStyles((theme) => ({
    grid: {
        display: 'grid',
        gridTemplateColumns: 'auto 16px 136px',
    },
    button: {
        display: 'flex',
        justifyItems: 'center',
        alignItems: 'center',
    }
}));

export default function RecipeItem(props) {
    const classes = useStyles();

    const onCraftClick = () => {
        const hasRarities = (props.recipe.duration && typeof props.recipe.duration === 'object');
        props.craftRecipeClicked(props.recipe.ingredients, hasRarities, props.recipe.DC, props.recipe.name, props.category);
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
                            DC={props.recipe.DC}
                            category={props.category}
                            amount={props.displayAmount ? getAmounts() : 0}
                            displayAmount={props.displayAmount}
                            editable={props.editable}
                            hasRarities={props.hasRarities}
                            witcherPotions={props.witcherPotions}
                        />
                        <Typography>{props.recipe.effects}</Typography>
                    </div>
                    <DurationAndToxicityChart
                        duration={props.recipe.duration}
                        toxicity={props.recipe.toxicity}
                    />
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