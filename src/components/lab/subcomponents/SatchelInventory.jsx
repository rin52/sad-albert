import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DisplayArea from '../../common/DisplayArea';
import IngredientCategory from '../../../helper/IngredientCategory';
import InventoryItem from '../InventoryItem';
import CraftableRecipes from '../CraftableRecipes';
import getCraftableRecipes from '../../../helper/lab/getCraftableRecipes';
import getSatchelSummary from '../../../helper/satchel/getSatchelSummary';
import SelectIngredientsModal from './SelectIngredientsModal';
import CraftingFailedModal from './CraftingFailedModal';
import CraftingSuccessModal from './CraftingSuccessModal';

const useStyles = makeStyles({
    root: {
        padding: '16px',
    },
    columnGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat( auto-fit, minmax(50px, 1fr))',
    },
    buttonRow: {
        paddingTop: '16px',
        display: 'flex',
        justifyContent: 'center',
    },
    separator: {
        paddingTop: '16px',
    },
});

export default function SatchelInventory(props) {
    const satchelIngredients = useSelector(state => getSatchelSummary(
        state.satchelState.ingredients,
        state.systemState.chosenSetting
    ));

    const [selectItemsOpen, setSelectItemsOpen] = React.useState(false);
    const [recipeIngredients, setRecipeIngredients] = React.useState([]);
    const [recipeSpecificIngredients, setSpecificIngredients] = React.useState([]);
    const [craftable, setCraftable] = React.useState([]);
    const [regenerate, setRegenerate] = React.useState(false);
    const [hasRarities, setHasRarities] = React.useState(false);
    const [craftDc, setCraftDc] = React.useState(0);
    const [recipeName, setRecipeName] = React.useState('');
    const [potionRarity, setPotionRarity] = React.useState('');
    const [category, setCategory] = React.useState('');

    const [craftingFailedOpen, setCraftingFailedOpen] = React.useState(false);
    const [craftingSuccessOpen, setCraftingSuccessOpen] = React.useState(false);

    React.useEffect(() => {
        setCraftable([]);
    }, [props]);

    const determineRecipes = useCallback(() => {
        setCraftable(getCraftableRecipes(props.allRecipes,
            satchelIngredients.Vitriol.total,
            satchelIngredients.Rebis.total,
            satchelIngredients.Aether.total,
            satchelIngredients.Quebrith.total,
            satchelIngredients.Hydragenum.total,
            satchelIngredients.Sol.total,
            satchelIngredients.Vermilion.total,
            satchelIngredients.Caelum.total,
            satchelIngredients.Fulgur.total,
            satchelIngredients['Red Mutagen'].total,
            satchelIngredients['Green Mutagen'].total,
            satchelIngredients['Blue Mutagen'].total,
            satchelIngredients['DOG_TALLOW'],
            satchelIngredients['BOTTLE_OF_SPIRITS'],
            satchelIngredients['ARACHAS'],
            satchelIngredients['FIEND'],
            satchelIngredients['GRAVE_HAG'],
            satchelIngredients['GRIFFIN'],
            satchelIngredients['KATAKAN'],
            satchelIngredients['NEKKER'],
            satchelIngredients['NOONWRAITH'],
            satchelIngredients['TROLL'],
            satchelIngredients['WEREWOLF'],
            satchelIngredients['WYVERN'],
        ));
    }, [props.allRecipes, satchelIngredients]);

    const craftRecipeClicked = (ingredients, specificIngredients, hasRarities, craftDc, recipeName, category) => {
        setSelectItemsOpen(true);
        setRecipeIngredients(ingredients);
        if (specificIngredients && specificIngredients.length > 0) {
            setSpecificIngredients(specificIngredients);
        }
        setHasRarities(hasRarities);
        setCraftDc(craftDc);
        setRecipeName(recipeName);
        setCategory(category);
    };

    const selectItemsClose = () => {
        setSelectItemsOpen(false);
        setRecipeIngredients([]);
        setSpecificIngredients([]);
        setCraftDc(0);
    };

    const craftingSuccess = (rarity) => {
        setCraftingSuccessOpen(true);
        setPotionRarity(rarity);
    };

    const craftingSuccessClose = () => {
        setPotionRarity('');
        setCraftingSuccessOpen(false);
        setRecipeName('');
        setCategory('');
    };

    const craftingFail = () => {
        setCraftingFailedOpen(true);
    };

    const craftingFailedClose = () => {
        setPotionRarity('');
        setCraftingFailedOpen(false);
        setRecipeName('');
        setCategory('');
    };

    React.useEffect(() => {
        if (regenerate) {
            determineRecipes();
            setRegenerate(false);
        }
    }, [regenerate, determineRecipes]);

    const classes = useStyles();
    return (
        <div>
            <DisplayArea>
                <div className={classes.root}>
                    <div className={classes.columnGrid} >
                        <InventoryItem category={IngredientCategory.VITRIOL} value={satchelIngredients.Vitriol.total} readOnly />
                        <InventoryItem category={IngredientCategory.REBIS} value={satchelIngredients.Rebis.total} readOnly />
                        <InventoryItem category={IngredientCategory.AETHER} value={satchelIngredients.Aether.total} readOnly />
                        <InventoryItem category={IngredientCategory.QUEBRITH} value={satchelIngredients.Quebrith.total} readOnly />
                        <InventoryItem category={IngredientCategory.HYDRAGENUM} value={satchelIngredients.Hydragenum.total} readOnly />
                        <InventoryItem category={IngredientCategory.SOL} value={satchelIngredients.Sol.total} readOnly />
                        <InventoryItem category={IngredientCategory.VERMILION} value={satchelIngredients.Vermilion.total} readOnly />
                        <InventoryItem category={IngredientCategory.CAELUM} value={satchelIngredients.Caelum.total} readOnly />
                        <InventoryItem category={IngredientCategory.FULGUR} value={satchelIngredients.Fulgur.total} readOnly />
                    </div>

                    {props.hasMutagens && (
                        <div className={classes.columnGrid} style={{ paddingTop: '16px' }}>
                            <InventoryItem category={IngredientCategory.RED_MUTAGEN} value={satchelIngredients['Red Mutagen'].total} readOnly />
                            <InventoryItem category={IngredientCategory.GREEN_MUTAGEN} value={satchelIngredients['Green Mutagen'].total} readOnly />
                            <InventoryItem category={IngredientCategory.BLUE_MUTAGEN} value={satchelIngredients['Blue Mutagen'].total} readOnly />
                        </div>
                    )}
                    <div className={classes.buttonRow}>
                        <Button onClick={determineRecipes}>Generate</Button>
                    </div>
                </div>
            </DisplayArea >

            {craftable.length !== 0 && (
                <CraftableRecipes craftable={craftable} craftRecipeClicked={craftRecipeClicked} />
            )}

            {selectItemsOpen && (
                <SelectIngredientsModal
                    open={selectItemsOpen}
                    close={selectItemsClose}
                    setRegenerate={setRegenerate}
                    recipeIngredients={recipeIngredients}
                    recipeSpecificIngredients={recipeSpecificIngredients}
                    hasRarities={hasRarities}
                    craftDc={craftDc}
                    recipeName={recipeName}
                    craftingSuccess={craftingSuccess}
                    craftingFail={craftingFail}
                />
            )}

            {craftingFailedOpen && (
                <CraftingFailedModal open={craftingFailedOpen} close={craftingFailedClose} recipeName={recipeName} />
            )}
            {craftingSuccessOpen && (
                <CraftingSuccessModal
                    open={craftingSuccessOpen}
                    close={craftingSuccessClose}
                    recipeName={recipeName}
                    rarity={potionRarity}
                    category={category}
                    type={props.type}
                />
            )}
        </div>
    );
}