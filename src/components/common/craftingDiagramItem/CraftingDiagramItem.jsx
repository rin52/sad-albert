import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DisplayItem from '../DisplayItem';
import CraftingDiagramHeader from './CraftingDiagramHeader';
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
    ingredient: {
        paddingLeft: '8px',
    },
}));

export default function CraftingDiagramItem(props) {
    const classes = useStyles();

    const onCraftClick = () => {
        props.craftRecipeClicked(props.diagram.ingredients,
            props.diagram.DC,
            props.diagram.name,
            props.category,
        );
    };

    const getAmounts = () => {
        if (props.diagram.amount) {
            return props.diagram.amount;
        }
        return 0;
    };

    const renderIngredients = () => (
        <div>
            <Typography>Ingredients:</Typography>
            {props.diagram.ingredients.map(ingredient => (
                <div key={ingredient.component} className={classes.ingredient}>
                    <Typography>{ingredient.component} x{ingredient.amount}</Typography>
                </div>
            ))}
        </div>
    );

    if (props.diagram.hide) {
        return null;
    }
    return (
        <DisplayItem>
            <div className={props.showCraft && classes.grid} >
                <div>
                    <div>
                        <CraftingDiagramHeader
                            name={props.diagram.name}
                            craftAmount={props.diagram.craftAmount}
                            DC={props.diagram.DC}
                            category={props.category}
                            amount={props.displayAmount ? getAmounts() : 0}
                            displayAmount={props.displayAmount}
                            editable={props.editable}
                            deleteKnownRecipe={props.deleteKnownRecipe}
                            deleteAcquiredFormulae={props.deleteAcquiredFormulae}
                        />
                        {props.diagram.craftTime && (
                            <Typography variant="subtitle1">
                                Craft Time: {props.diagram.craftTime}
                            </Typography>
                        )}
                        {props.diagram.investment && (
                            <div className={classes.row}>
                                <Typography variant="subtitle1">
                                    {`Investment Cost: ${props.diagram.investment}`}
                                </Typography>
                                <DisplayCost />
                            </div>
                        )}
                        {renderIngredients()}
                        {props.diagram.notes && (
                            <Typography>{props.diagram.notes}</Typography>
                        )}
                    </div>
                    <div className={classes.row}>
                        {props.diagram.weight !== undefined && (
                            <DisplayWeight weight={props.diagram.weight} />
                        )}
                        <div className={classes.separator} />
                        {props.diagram.cost !== undefined && (
                            <DisplayCost cost={props.diagram.cost} />
                        )}
                    </div>
                </div>
                {props.showCraft && (
                    <div />
                )}
                {props.showCraft && (
                    <div className={classes.button}>
                        <Button onClick={onCraftClick}>Craft Diagram</Button>
                    </div>
                )}
            </div>
        </DisplayItem>
    );
}