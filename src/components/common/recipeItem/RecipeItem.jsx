import React from 'react';
import Typography from '@material-ui/core/Typography';
import DisplayItem from '../DisplayItem';
import RecipeHeader from './RecipeHeader';
import DurationAndToxicityChart from './DurationAndToxicityChart';

export default function RecipeItem(props) {
    if (props.recipe.hide) {
        return null;
    }
    return (
        <DisplayItem>
            <div >
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
        </DisplayItem>
    );
}