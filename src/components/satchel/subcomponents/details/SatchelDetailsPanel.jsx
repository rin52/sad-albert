import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { AddCircle } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import IngredientCategory from '../../../../helper/IngredientCategory';
import IngredientsList from '../../../ingredients/IngredientsList';
import getSatchelDetails from '../../../../helper/satchel/getSatchelDetails';
import AddIngredientToSatchelModal from './AddIngredientToSatchelModal';
import { updateSatchel } from '../../../../actions/SatchelActions';

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

export default function SatchelSummary() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const summary = useSelector(state => getSatchelDetails(state.satchelState.ingredients));
    const [isAddOpen, setIsAddOpen] = React.useState(false);

    const addClicked = () => {
        setIsAddOpen(true);
    };

    const closeAdd = () => {
        setIsAddOpen(false);
    };

    const submitAdd = (key, amount) => {
        dispatch(updateSatchel({ [key]: { amount: Number(amount) } }));
        closeAdd();
    };

    return (
        <div>
            <div className={classes.root}>
                <Tooltip title="Add Ingredient">
                    <IconButton className={classes.fixedAdd} onClick={addClicked}>
                        <AddCircle color="primary" />
                    </IconButton>
                </Tooltip>

                <IngredientsList category={IngredientCategory.VITRIOL} data={summary} displayAmount editable />
                <div style={{ height: '16px', width: '16px' }} />
                <IngredientsList category={IngredientCategory.REBIS} data={summary} displayAmount editable />
                <div style={{ height: '16px', width: '16px' }} />
                <IngredientsList category={IngredientCategory.AETHER} data={summary} displayAmount editable />
                <div style={{ height: '16px', width: '16px' }} />
                <IngredientsList category={IngredientCategory.QUEBRITH} data={summary} displayAmount editable />
                <div style={{ height: '16px', width: '16px' }} />
                <IngredientsList category={IngredientCategory.HYDRAGENUM} data={summary} displayAmount editable />
                <div style={{ height: '16px', width: '16px' }} />
                <IngredientsList category={IngredientCategory.SOL} data={summary} displayAmount editable />
                <div style={{ height: '16px', width: '16px' }} />
                <IngredientsList category={IngredientCategory.VERMILION} data={summary} displayAmount editable />
                <div style={{ height: '16px', width: '16px' }} />
                <IngredientsList category={IngredientCategory.CAELUM} data={summary} displayAmount editable />
                <div style={{ height: '16px', width: '16px' }} />
                <IngredientsList category={IngredientCategory.FULGUR} data={summary} displayAmount editable />
                <div style={{ height: '16px', width: '16px' }} />

                <IngredientsList category={IngredientCategory.RED_MUTAGEN} data={summary} displayAmount editable />
                <div style={{ height: '16px', width: '16px' }} />
                <IngredientsList category={IngredientCategory.GREEN_MUTAGEN} data={summary} displayAmount editable />
                <div style={{ height: '16px', width: '16px' }} />
                <IngredientsList category={IngredientCategory.BLUE_MUTAGEN} data={summary} displayAmount editable />
            </div>
            {isAddOpen && (
                <AddIngredientToSatchelModal
                    open={isAddOpen}
                    close={closeAdd}
                    submit={submitAdd}
                />
            )}
        </div>
    );
}