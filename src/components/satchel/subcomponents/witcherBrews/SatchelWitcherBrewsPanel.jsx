import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { AddCircle } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { updateSatchelWitcherBrews } from '../../../../actions/SatchelActions';
import DisplayRecipes from '../DisplayRecipes';
import getSatchelWitcherBrewDetails from '../../../../helper/satchel/getSatchelWitcherBrewDetails';
import AddWitcherBrewToSatchelModal from './AddWitcherBrewToSatchelModal';
import { getCategory } from '../../../../actions/helper/SatchelActionsHelper';

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

export default function SatchelWitcherBrewsPanel() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const witcherBrews = useSelector(state => (getSatchelWitcherBrewDetails(
        state.satchelState.witcherBrews,
        state.systemState.chosenSetting,
    )));

    const witcherPotions = useSelector(state => ((state.satchelState.witcherBrews && state.satchelState.witcherBrews.potions)
        ? state.satchelState.witcherBrews.potions : {}));
    const [isAddOpen, setIsAddOpen] = React.useState(false);

    const addClicked = () => {
        setIsAddOpen(true);
    };

    const closeAdd = () => {
        setIsAddOpen(false);
    };

    const submitAdd = (category, item) => {
        dispatch(updateSatchelWitcherBrews(getCategory(category), item));
        closeAdd();
    };

    return (
        <div>
            <div className={classes.root}>
                <Tooltip title="Add Brew">
                    <IconButton className={classes.fixedAdd} onClick={addClicked}>
                        <AddCircle color="primary" />
                    </IconButton>
                </Tooltip>

                <DisplayRecipes
                    category="Potions"
                    recipes={witcherBrews.potions}
                    displayAmount
                    editable
                    hasRarities
                    witcherPotions={witcherPotions}
                />
                <div style={{ height: '16px', width: '16px' }} />
                <DisplayRecipes
                    category="Blade Oils"
                    recipes={witcherBrews.bladeOils}
                    displayAmount
                    editable
                />
                <div style={{ height: '16px', width: '16px' }} />
                <DisplayRecipes
                    category="Decoctions"
                    recipes={witcherBrews.decoctions}
                    displayAmount
                    editable
                />

            </div>
            {isAddOpen && (
                <AddWitcherBrewToSatchelModal open={isAddOpen} close={closeAdd} submit={submitAdd} />
            )}
        </div>
    );
}