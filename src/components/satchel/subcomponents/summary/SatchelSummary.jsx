import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import getSatchelSummary from '../../../../helper/satchel/getSatchelSummary';
import IngredientCategory from '../../../../helper/IngredientCategory';
import CategorySummary from './CategorySummary';

const useStyles = makeStyles({
    root: {
        padding: '16px',
    },
    columnGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat( auto-fit, minmax(200px, 1fr))',

    },
});

export default function SatchelSummary() {
    const classes = useStyles();
    const ingredients = useSelector(state => state.satchelState.ingredients);
    const chosenSetting = useSelector(state => state.systemState.chosenSetting);
    const summary = getSatchelSummary(ingredients, chosenSetting);

    const renderSummary = (category) => (
        <CategorySummary category={category} summary={summary[category]} />
    );

    return (
        <div className={classes.root}>
            <div className={classes.columnGrid}>
                {renderSummary(IngredientCategory.VITRIOL)}
                {renderSummary(IngredientCategory.REBIS)}
                {renderSummary(IngredientCategory.AETHER)}
                {renderSummary(IngredientCategory.QUEBRITH)}
                {renderSummary(IngredientCategory.HYDRAGENUM)}
                {renderSummary(IngredientCategory.SOL)}
                {renderSummary(IngredientCategory.VERMILION)}
                {renderSummary(IngredientCategory.CAELUM)}
                {renderSummary(IngredientCategory.FULGUR)}


            </div>

            <div className={classes.columnGrid} style={{ paddingTop: '16px' }}>
                {renderSummary(IngredientCategory.RED_MUTAGEN)}
                {renderSummary(IngredientCategory.GREEN_MUTAGEN)}
                {renderSummary(IngredientCategory.BLUE_MUTAGEN)}
            </div>
        </div>
    );
}