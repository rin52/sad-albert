import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import DisplayArea from '../common/DisplayArea';
import RecipeItem from '../common/recipeItem/RecipeItem';

const useStyles = makeStyles({
    root: {
        padding: '16px',
        display: 'flex',
        justifyContent: 'center',
    },
    separator: {
        paddingTop: '16px',
    },
});

export default function CraftableRecipes(props) {
    const classes = useStyles();
    return (
        <div>
            {props.craftable.map(recipeList => (
                <div key={recipeList.name} className={classes.separator}>
                    <Typography>{recipeList.name}</Typography>

                    <DisplayArea>
                        <div>
                            {recipeList.recipes.length > 0 &&
                                recipeList.recipes.map(recipe => (
                                    <RecipeItem recipe={recipe} key={recipe.name} />
                                ))
                            }
                            {
                                recipeList.recipes.length === 0 && (
                                    <div className={classes.root}>
                                        <Typography>No craftable recipes</Typography>
                                    </div>
                                )
                            }

                        </div>
                    </DisplayArea>
                </div>
            ))}
        </div>
    );
}