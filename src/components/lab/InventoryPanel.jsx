import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DisplayArea from '../common/DisplayArea';
import UserInventory from './subcomponents/UserInventory';
import SatchelInventory from './subcomponents/SatchelInventory';

const useStyles = makeStyles({
    root: {
        padding: '16px',
        display: 'flex',
        justifyContent: 'center',
    },
    separator: {
        paddingTop: '16px',
    },
});

export default function InventoryPanel(props) {
    const classes = useStyles();
    const [useSatchel, setUseSatchel] = React.useState(false);

    const handleChange = (event) => {
        setUseSatchel(event.target.checked);
    };

    return (
        <div>
            <DisplayArea>
                <div className={classes.root}>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={useSatchel}
                                onChange={handleChange}
                                name="useSatchel"
                                color="primary"
                            />
                        }
                        label="Use Satchel"
                    />
                </div>
            </DisplayArea >
            <div className={classes.separator} />
            {!useSatchel && (
                <UserInventory allRecipes={props.allRecipes} hasMutagens={props.hasMutagens} />
            )}
            {useSatchel && (
                <SatchelInventory allRecipes={props.allRecipes} hasMutagens={props.hasMutagens} type={props.type} />
            )}

        </div>
    );
}