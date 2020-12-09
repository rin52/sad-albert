import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { AddCircle } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { updateSatchelAlchemy } from '../../../../actions/SatchelActions';
import DisplayRecipes from '../DisplayRecipes';
import getSatchelAlchemyDetails from '../../../../helper/satchel/getSatchelAlchemyDetails';
import AddAlchemyToSatchelModal from './AddAlchemyToSatchelModal';
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

export default function SatchelAlchemyPanel() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const alchemy = useSelector(state => (getSatchelAlchemyDetails(state.satchelState.alchemy)));
    const [isAddOpen, setIsAddOpen] = React.useState(false);

    const addClicked = () => {
        setIsAddOpen(true);
    };

    const closeAdd = () => {
        setIsAddOpen(false);
    };

    const submitAdd = (category, item) => {
        dispatch(updateSatchelAlchemy(getCategory(category), item));
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
                    category="Novice Formulae"
                    recipes={alchemy.novice}
                    displayAmount
                    editable
                />
                <div style={{ height: '16px', width: '16px' }} />
                <DisplayRecipes
                    category="Journeyman Formulae"
                    recipes={alchemy.journeyman}
                    displayAmount
                    editable
                />
                <div style={{ height: '16px', width: '16px' }} />
                <DisplayRecipes
                    category="Master Formulae"
                    recipes={alchemy.master}
                    displayAmount
                    editable
                />

            </div>
            {isAddOpen && (
                <AddAlchemyToSatchelModal open={isAddOpen} close={closeAdd} submit={submitAdd}/>
            )}
        </div>
    );
}