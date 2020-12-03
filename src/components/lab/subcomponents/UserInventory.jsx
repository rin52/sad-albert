import React, {useCallback} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DisplayArea from '../../common/DisplayArea';
import IngredientCategory from '../../../helper/IngredientCategory';
import InventoryItem from '../InventoryItem';
import CraftableRecipes from '../CraftableRecipes';
import getCraftableRecipes from '../../../helper/lab/getCraftableRecipes';

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

export default function InventoryPanel(props) {
    const [vitriol, setVitriol] = React.useState(0);
    const [rebis, setRebis] = React.useState(0);
    const [aether, setAether] = React.useState(0);
    const [quebrith, setQuebrith] = React.useState(0);
    const [hydragenum, setHydragenum] = React.useState(0);
    const [sol, setSol] = React.useState(0);
    const [vermilion, setVermilion] = React.useState(0);
    const [caelum, setCaelum] = React.useState(0);
    const [fulgur, setFulgur] = React.useState(0);
    const [redMutagen, setRedMutagen] = React.useState(0);
    const [greenMutagen, setGreenMutagen] = React.useState(0);
    const [blueMutagen, setBlueMutagen] = React.useState(0);
    const [craftable, setCraftable] = React.useState([]);
    const [regenerate, setRegenerate] = React.useState(false);

    React.useEffect(() => {
        setCraftable([]);
    }, [props]);

    const determineRecipes = useCallback(() => {
        setCraftable(getCraftableRecipes(props.allRecipes,
            vitriol, rebis, aether, quebrith, hydragenum, sol, vermilion, caelum, fulgur,
             redMutagen, greenMutagen, blueMutagen ));
    }, [props.allRecipes, vitriol, rebis, aether, quebrith, hydragenum, sol, vermilion, caelum, fulgur,
        redMutagen, greenMutagen, blueMutagen]);

    const craftRecipeClicked = (ingredients) => {
        ingredients.forEach((ingredient) => {
            if (ingredient.category === IngredientCategory.VITRIOL) {
                setVitriol(vitriol - ingredient.amount);
            } else if (ingredient.category === IngredientCategory.REBIS) {
                setRebis(rebis - ingredient.amount);
            } else if (ingredient.category === IngredientCategory.AETHER) {
                setAether(aether - ingredient.amount);
            } else if (ingredient.category === IngredientCategory.QUEBRITH) {
                setQuebrith(quebrith - ingredient.amount);
            } else if (ingredient.category === IngredientCategory.HYDRAGENUM) {
                setHydragenum(hydragenum - ingredient.amount);
            } else if (ingredient.category === IngredientCategory.SOL) {
                setSol(sol - ingredient.amount);
            } else if (ingredient.category === IngredientCategory.VERMILION) {
                setVermilion(vermilion - ingredient.amount);
            } else if (ingredient.category === IngredientCategory.CAELUM) {
                setCaelum(caelum - ingredient.amount);
            } else if (ingredient.category === IngredientCategory.FULGUR) {
                setFulgur(fulgur - ingredient.amount);
            } else if (ingredient.category === IngredientCategory.RED_MUTAGEN) {
                setRedMutagen(redMutagen - ingredient.amount);
            } else if (ingredient.category === IngredientCategory.GREEN_MUTAGEN) {
                setGreenMutagen(greenMutagen - ingredient.amount);
            } else if (ingredient.category === IngredientCategory.BLUE_MUTAGEN) {
                setBlueMutagen(blueMutagen - ingredient.amount);
            }
        });
        setRegenerate(true);
    }

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
                        <InventoryItem category={IngredientCategory.VITRIOL} value={vitriol} setValue={setVitriol} />
                        <InventoryItem category={IngredientCategory.REBIS} value={rebis} setValue={setRebis} />
                        <InventoryItem category={IngredientCategory.AETHER} value={aether} setValue={setAether} />
                        <InventoryItem category={IngredientCategory.QUEBRITH} value={quebrith} setValue={setQuebrith} />
                        <InventoryItem category={IngredientCategory.HYDRAGENUM} value={hydragenum} setValue={setHydragenum} />
                        <InventoryItem category={IngredientCategory.SOL} value={sol} setValue={setSol} />
                        <InventoryItem category={IngredientCategory.VERMILION} value={vermilion} setValue={setVermilion} />
                        <InventoryItem category={IngredientCategory.CAELUM} value={caelum} setValue={setCaelum} />
                        <InventoryItem category={IngredientCategory.FULGUR} value={fulgur} setValue={setFulgur} />
                    </div>

                    {props.hasMutagens && (
                        <div className={classes.columnGrid} style={{ paddingTop: '16px' }}>
                            <InventoryItem category={IngredientCategory.RED_MUTAGEN} value={redMutagen} setValue={setRedMutagen} />
                            <InventoryItem category={IngredientCategory.GREEN_MUTAGEN} value={greenMutagen} setValue={setGreenMutagen} />
                            <InventoryItem category={IngredientCategory.BLUE_MUTAGEN} value={blueMutagen} setValue={setBlueMutagen} />
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
        </div>
    );
}