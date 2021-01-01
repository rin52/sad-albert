import React from 'react';
import Typography from '@material-ui/core/Typography';
import DisplayArea from '../../common/DisplayArea';
import RecipeItem from '../../common/recipeItem/RecipeItem';

export default function DisplayRecipes(props) {
    const keys = props.recipes ? Object.keys(props.recipes) : [];

    return (
        <div>
            <Typography>{props.category}</Typography>
            <DisplayArea>
                <div>
                    {keys.length > 0 ?
                        keys.map((key) => {
                            const recipe = props.recipes[key];
                            return (
                                <RecipeItem
                                    recipe={recipe}
                                    key={recipe.name}
                                    displayAmount={props.displayAmount}
                                    editable={props.editable}
                                    hasRarities={props.hasRarities}
                                    category={props.category}
                                    witcherPotions={props.witcherPotions}
                                    deleteKnownRecipe={props.deleteKnownRecipe}
                                />
                            );
                        }) :
                        <div style={{ padding: '16px' }}>
                            <Typography>No {props.category.toLowerCase()} found.</Typography>
                        </div>
                    }
                </div>
            </DisplayArea>
        </div>
    );
}