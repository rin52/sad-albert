import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Colors from '../../helper/Colors';
import IngredientGeneratorPanel from '../ingredientGenerator/IngredientGeneratorPanel';
import WitcherRecipesPanel from '../witcherRecipes/WitcherRecipesPanel';
import AlchemyFormulaePanel from '../alchemyFormulae/AlchemyFormulaePanel';
import Banner from '../common/Banner';
import Constants from '../../helper/Constants';
import LabPanel from '../lab/LabPanel';
import IngredientsPanel from '../ingredients/IngredientsPanel';
import PoisonsPanel from '../poisons/PoisonsPanel';

const useStyles = makeStyles({
    root: {
        backgroundColor: Colors.background,
        height: '100vh',
        width: '100%',
    },
});

export default function AppsButton() {
    const classes = useStyles();
    const curApp = useSelector(state => state.systemState.app);

    const renderPanels = () => {
        if (curApp === Constants.INGREDIENT_GENERATOR) {
            return <IngredientGeneratorPanel />;
        }
        if (curApp === Constants.INGREDIENTS) {
            return <IngredientsPanel />;
        }
        if (curApp === Constants.WITCHER_RECIPES) {
            return <WitcherRecipesPanel />;
        }
        if (curApp === Constants.ALCHEMY_FORMULAE) {
            return <AlchemyFormulaePanel />;
        }
        if (curApp === Constants.LAB) {
            return <LabPanel />;
        }
        if (curApp === Constants.DMG_POISONS) {
            return <PoisonsPanel/>;
        }

        return <div />;
    }

    return (
        <div className={classes.root}>
            <Banner />
            {renderPanels()}
        </div>
    );
}