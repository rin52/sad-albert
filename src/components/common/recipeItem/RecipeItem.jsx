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
        props.craftRecipeClicked(props.recipe.ingredients);
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