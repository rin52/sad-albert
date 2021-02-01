import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Colors from '../../helper/Colors';
import IngredientGeneratorPanel from '../ingredientGenerator/IngredientGeneratorPanel';
import WitcherRecipesPanel from '../witcherRecipes/WitcherRecipesPanel';
import AlchemyFormulaePanel from '../alchemyFormulae/AlchemyFormulaePanel';
import Banner from '../common/Banner';
import Footer from '../common/Footer';
import Constants from '../../helper/Constants';
import LabPanel from '../lab/LabPanel';
import IngredientsPanel from '../ingredients/IngredientsPanel';
import PoisonsPanel from '../poisons/PoisonsPanel';
import SatchelPanel from '../satchel/SatchelPanel';
import SettingsPanel from '../setting/SettingsPanel';
import CraftingMaterialsPanel from '../craftingMaterialsList/CraftingMaterialsPanel';
import CraftingDiagramsPanel from '../craftingDiagrams/CraftingDiagramsPanel';
import ElderfolkCraftingDiagramsPanel from '../elderfolkCraftingDiagrams/ElderfolkCraftingDiagramsPanel';

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

    React.useEffect(() => {
        console.log(process.env.REACT_APP_SIM);
        if (process.env.REACT_APP_SIM === undefined) {
            window.gtag('config', 'G-QY4K1FJZTN', { 'page_title': document.title, page_path: window.location.pathname + window.location.search });
        }
    }, []);

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
            return <PoisonsPanel />;
        }
        if (curApp === Constants.SATCHEL) {
            return <SatchelPanel />;
        }
        if (curApp === Constants.CRAFTING_COMPONENTS) {
            return <CraftingMaterialsPanel />;
        }
        if (curApp === Constants.CRAFTING_DIAGRAMS) {
            return <CraftingDiagramsPanel />;
        }
        if (curApp === Constants.ELDERFOLK_CRAFTING_DIAGRAMS) {
            return <ElderfolkCraftingDiagramsPanel />;
        }
        if (curApp === Constants.SETTINGS) {
            return <SettingsPanel />;
        }

        return <div />;
    }

    return (
        <div className={classes.root}>
            <Banner />
            {renderPanels()}
            <Footer />
        </div>
    );
}
