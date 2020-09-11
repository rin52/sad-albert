import React from 'react';
import Typography from '@material-ui/core/Typography';
import IngredientDisplay from './IngredientDisplay';
import DisplayArea from '../../common/DisplayArea';

export default function PossibleDrops(props) {
    if (props.list[props.selected]) {
        return (
            <div>
                <Typography>Possible Drops</Typography>
                <DisplayArea>
                    {props.list[props.selected].map(item => (
                        <IngredientDisplay item={item} key={item.item} displayMaxAmount/>
                    ))}
                </DisplayArea>
            </div>
        );
    }
    return (<div/>)
}