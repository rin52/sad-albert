import React from 'react';
import Typography from '@material-ui/core/Typography';
import IngredientDisplay from '../ingredientGenerator/subcomponents/IngredientDisplay';
import DisplayArea from '../common/DisplayArea';

export default function IngredientsList(props) {
    let keys = Object.keys(props.data);
    const filteredList = [];

    keys.forEach((key) => {
        if (props.data[key].category === props.category) {
            filteredList.push(props.data[key]);
        }
    })

    return (
        <div>
            <Typography>{props.category}</Typography>
            <DisplayArea>
                <div>
                    {filteredList.length > 0 ?
                        filteredList.map(ingredient => (
                            <IngredientDisplay
                                item={ingredient}
                                key={ingredient.item}
                                displayAmount={props.displayAmount}
                                editable={props.editable}
                            />
                        )) :
                        <div style={{ padding: '16px' }}>
                            <Typography>No ingredients found.</Typography>
                        </div>
                    }
                </div>
            </DisplayArea>
        </div>
    );
}