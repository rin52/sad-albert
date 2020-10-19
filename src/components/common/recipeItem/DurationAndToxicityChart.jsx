import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Colors from '../../../helper/Colors';
import Rarity from '../../../helper/Rarity';

const useStyles = makeStyles((theme) => ({
    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'auto auto auto',
        rowGap: '1px',
        columnGap: '1px',
        backgroundColor: Colors.greyBorder,
    },
    gridTwoColumns: {
        display: 'grid',
        gridTemplateColumns: 'auto auto',
        rowGap: '1px',
        columnGap: '1px',
        backgroundColor: Colors.greyBorder,
    },
    gridOneColumn: {
        display: 'grid',
        gridTemplateColumns: 'auto',
        rowGap: '1px',
        columnGap: '1px',
        backgroundColor: Colors.greyBorder,
    },
}));

export default function PotionHeader(props) {
    const classes = useStyles();

    const hasRarity = (rarityKey) => {
        if ((props.toxicity && props.toxicity[rarityKey])
            || (props.duration && props.duration[rarityKey])) {
            return true
        }
        return false;
    }

    const hasEveryday = hasRarity('everyday');
    const hasUncommon = hasRarity('uncommon');
    const hasCommon = hasRarity('common');
    const hasRare = hasRarity('rare');

    const hasNoScale = !hasEveryday && !hasCommon && !hasUncommon && !hasRare;

    const renderCell = (content) => (
        <Typography className={classes.content}>{content}</Typography>
    )

    if (props.duration || props.toxicity) {

        if (hasNoScale) {
            return (
                <div className={(props.duration && props.toxicity) ? classes.gridTwoColumns : classes.gridOneColumn}>
                    {props.duration && renderCell('Duration')}
                    {props.toxicity && renderCell('Toxicity')}

                    {(hasNoScale && props.duration) && renderCell(props.duration)}
                    {(hasNoScale && props.toxicity) && renderCell(props.toxicity)}
                </div>
            )
        }

        return (
            <div className={classes.grid}>
                {renderCell('')}
                {props.duration && renderCell('Duration')}
                {props.toxicity && renderCell('Toxicity')}

                {hasEveryday && renderCell(Rarity.EVERYDAY)}
                {(hasEveryday && props.duration) && renderCell(props.duration.everyday)}
                {(hasEveryday && props.toxicity) && renderCell(props.toxicity.everyday)}

                {hasCommon && renderCell(Rarity.COMMON)}
                {(hasCommon && props.duration) && renderCell(props.duration.common)}
                {(hasCommon && props.toxicity) && renderCell(props.toxicity.common)}

                {hasUncommon && renderCell(Rarity.UNCOMMON)}
                {(hasUncommon && props.duration) && renderCell(props.duration.uncommon)}
                {(hasUncommon && props.toxicity) && renderCell(props.toxicity.uncommon)}

                {hasRare && renderCell(Rarity.RARE)}
                {(hasRare && props.duration) && renderCell(props.duration.rare)}
                {(hasRare && props.toxicity) && renderCell(props.toxicity.rare)}
            </div>
        );
    }
    return null;


}