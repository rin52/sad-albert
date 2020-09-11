import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Colors from '../../../helper/Colors';
import Rarity from '../../../helper/Rarity';

const useStyles = makeStyles((theme) => ({
    inlineBlock: {
        display: 'inline-block',
    },
    row: {
        display: 'flex',
        height: '24px',
    },
    content: {
        marginLeft: '8px',
        marginRight: '8px',
        width: '84px',
    },
    divider: {
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
        <div className={classes.row}>
            <Divider className={classes.divider} orientation="vertical" />
            <Typography className={classes.content}>{content}</Typography>
        </div>
    )

    const renderRow = (title, item) => (
        <div>
            <Divider className={classes.divider} />
            <div className={classes.row}>
                {renderCell(title)}
                {hasEveryday && (renderCell(item.everyday))}
                {hasCommon && (renderCell(item.common))}
                {hasUncommon && (renderCell(item.uncommon))}
                {hasRare && (renderCell(item.rare))}
                {hasNoScale && (renderCell(item))}
                <Divider className={classes.divider} orientation="vertical" />
                <div />
            </div>
        </div>
    );

    if (props.duration || props.toxicity) {
        return (
            <div className={classes.inlineBlock}>
                {!hasNoScale && renderRow('', { everyday: Rarity.EVERYDAY, common: Rarity.COMMON, uncommon: Rarity.UNCOMMON, rare: Rarity.RARE, })}
                {props.duration && (
                    renderRow('Duration', props.duration)
                )}
                {props.toxicity && (
                    renderRow('Toxicity', props.toxicity)
                )}
                <Divider className={classes.divider} />
            </div>
        );
    }
    return null;


}