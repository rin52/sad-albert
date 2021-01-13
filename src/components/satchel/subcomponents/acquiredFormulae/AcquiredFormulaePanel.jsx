import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { AddCircle } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { addAcquiredFormulae } from '../../../../actions/SatchelActions';
import DisplayRecipes from '../DisplayRecipes';
import getKnownRecipesDetails from '../../../../helper/satchel/getKnownRecipesDetails';
import Constants from '../../../../helper/Constants';
import AddAcquiredFormulaeToSatchelModal from './AddAcquiredFormulaeToSatchelModal';

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

export default function AcquiredFormulaePanel() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const acquiredFormulae = useSelector(state => (getKnownRecipesDetails(
        state.satchelState.acquiredFormulae,
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
        dispatch(addAcquiredFormulae(type, category, item));
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
                    recipes={acquiredFormulae.witcherBrews.potions}
                    deleteAcquiredFormulae
                />
                <div style={{ height: '16px', width: '16px' }} />
                <DisplayRecipes
                    category={Constants.BLADE_OILS}
                    recipes={acquiredFormulae.witcherBrews.bladeOils}
                    deleteAcquiredFormulae
                />
                <div style={{ height: '16px', width: '16px' }} />
                <DisplayRecipes
                    category={Constants.DECOCTIONS}
                    recipes={acquiredFormulae.witcherBrews.decoctions}
                    deleteAcquiredFormulae
                />

                <div style={{ height: '32px', width: '16px' }} />
                <DisplayRecipes
                    category={Constants.NOVICE_FORMULAE}
                    recipes={acquiredFormulae.alchemy.novice}
                    deleteAcquiredFormulae
                />
                <div style={{ height: '16px', width: '16px' }} />
                <DisplayRecipes
                    category={Constants.JOURNEYMAN_FORMULAE}
                    recipes={acquiredFormulae.alchemy.journeyman}
                    deleteAcquiredFormulae
                />
                <div style={{ height: '16px', width: '16px' }} />
                <DisplayRecipes
                    category={Constants.MASTER_FORMULAE}
                    recipes={acquiredFormulae.alchemy.master}
                    deleteAcquiredFormulae
                />

            </div>
            {isAddOpen && (
                <AddAcquiredFormulaeToSatchelModal open={isAddOpen} close={closeAdd} submit={submitAdd} />
            )}
        </div>
    );
}