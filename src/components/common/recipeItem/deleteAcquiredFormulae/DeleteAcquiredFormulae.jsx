import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Delete } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import DeleteAcquiredFormulaeModal from './DeleteAcquiredFormulaeModal';

const useStyles = makeStyles(() => ({
    iconButton: {
        paddingTop: '0px',
        paddingBottom: '0px',
    },
}));

export default function DeleteAcquiredFormulae(props) {
    const classes = useStyles();
    const [isOpen, setIsOpen] = React.useState(false);

    const deleteClicked = () => {
        setIsOpen(true);
    };

    const closeWarning = () => {
        setIsOpen(false);
    };

    return (
        <div>

            <IconButton className={classes.iconButton} onClick={deleteClicked}>
                <Delete color="primary" />
            </IconButton>
            {isOpen && (
                <DeleteAcquiredFormulaeModal
                    open close={closeWarning}
                    category={props.category}
                    itemName={props.itemName}
                />
            )}
        </div>
    );
}