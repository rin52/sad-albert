import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import getIngredientImage from '../../../../helper/getIngredientImage';
import ItemAndAmount from './ItemAndAmount';
import Rarity from '../../../../helper/Rarity';

const useStyles = makeStyles({
    root: {
        padding: '16px',
    },
    imageRoot: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    image: {
        width: '32px',
        height: '32px',
        margin: 'auto',
    },
});

export default function CategorySummary(props) {
    const classes = useStyles();

    const renderItem = (rarity) => (
        <ItemAndAmount item={rarity} amount={props.summary[rarity]} />
    );

    return (
        <div className={classes.root}>
            <Typography align="center">{props.category}</Typography>
            <div className={classes.imageRoot}>
                <img src={getIngredientImage(props.category)} alt={props.category} className={classes.image} />
            </div>
            {renderItem(Rarity.RARE)}
            {renderItem(Rarity.UNCOMMON)}
            {renderItem(Rarity.COMMON)}
            {renderItem(Rarity.EVERYDAY)}
        </div>
    );
}
