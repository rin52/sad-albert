import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { AddCircle } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { addKnownRecipe } from '../../../../actions/SatchelActions';
import DisplayRecipes from '../DisplayRecipes';
import getKnownRecipesDetails from '../../../../helper/satchel/getKnownRecipesDetails';
import AddKnownRecipeToSatchelModal from './AddKnownRecipeToSatchelModal';
import Constants from '../../../../helper/Constants';

const useStyles = makeStyles({
    root: {
        padding: '16px',
    },
    fixedAdd: {
        position: 'fixed',
        right: '32px',
        top: '90px',
    },
});

export default function KnownRecipesPanel() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const knownRecipes = useSelector(state => (getKnownRecipesDetails(
        state.satchelState.knownRecipes,
        state.systemState.chosenSetting,
    )));

    const [isAddOpen, setIsAddOpen] = React.useState(false);

    const addClicked = () => {
        setIsAddOpen(true);
    };

    const closeAdd = () => {
        setIsAddOpen(false);
    };

    const submitAdd = (type, category, item) => {
        dispatch(addKnownRecipe(type, category, item));
        closeAdd();
    };

    return (
        <div>
            <div className={classes.root}>
                <Tooltip title="Add Recipe">
                    <IconButton className={classes.fixedAdd} onClick={addClicked}>
                        <AddCircle color="primary" />
                    </IconButton>
                </Tooltip>

                <DisplayRecipes
                    category={Constants.POTIONS}
                    recipes={knownRecipes.witcherBrews.potions}
                    deleteKnownRecipe
                />
                <div style={{ height: '16px', width: '16px' }} />
                <DisplayRecipes
                    category={Constants.BLADE_OILS}
                    recipes={knownRecipes.witcherBrews.bladeOils}
                    deleteKnownRecipe
                />
                <div style={{ height: '16px', width: '16px' }} />
                <DisplayRecipes
                    category={Constants.DECOCTIONS}
                    recipes={knownRecipes.witcherBrews.decoctions}
                    deleteKnownRecipe
                />

                <div style={{ height: '32px', width: '16px' }} />
                <DisplayRecipes
                    category={Constants.NOVICE_FORMULAE}
                    recipes={knownRecipes.alchemy.novice}
                    deleteKnownRecipe
                />
                <div style={{ height: '16px', width: '16px' }} />
                <DisplayRecipes
                    category={Constants.JOURNEYMAN_FORMULAE}
                    recipes={knownRecipes.alchemy.journeyman}
                    deleteKnownRecipe
                />
                <div style={{ height: '16px', width: '16px' }} />
                <DisplayRecipes
                    category={Constants.MASTER_FORMULAE}
                    recipes={knownRecipes.alchemy.master}
                    deleteKnownRecipe
                />

            </div>
            {isAddOpen && (
                <AddKnownRecipeToSatchelModal open={isAddOpen} close={closeAdd} submit={submitAdd} />
            )}
        </div>
    );
}