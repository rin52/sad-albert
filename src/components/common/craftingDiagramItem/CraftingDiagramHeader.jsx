import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AmountAndEditSatchel from '../../ingredientGenerator/subcomponents/ingredientDisplayHelper/AmountAndEditSatchel';
import DeleteKnownRecipe from '../recipeItem/deleteKnownItem/DeleteKnownRecipe';
import DeleteAcquiredFormulae from '../recipeItem/deleteAcquiredFormulae/DeleteAcquiredFormulae';

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
}));

export default function CraftingDiagramHeader(props) {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.row}>
                <Typography className={classes.title} variant="h6">{props.name}</Typography>
                {props.craftAmount && (
                    <Typography className={classes.title}>x {props.craftAmount}</Typography>
                )}
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
                {props.deleteKnownRecipe && (
                    <DeleteKnownRecipe
                        category={props.category}
                        itemName={props.name}
                    />
                )}
                {props.deleteAcquiredFormulae && (
                    <DeleteAcquiredFormulae
                        category={props.category}
                        itemName={props.name}
                    />
                )}
            </div>
        </div>
    );
}