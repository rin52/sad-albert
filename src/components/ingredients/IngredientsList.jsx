import React from 'react';
import Typography from '@material-ui/core/Typography';
import Ingredients from '../../data/Ingredients';
import Mutagens from '../../data/Mutagens';
import IngredientDisplay from '../ingredientGenerator/subcomponents/IngredientDisplay';
import DisplayArea from '../common/DisplayArea';

export default function IngredientsList(props) {
    let keys = [];
    let data = {};

    if (props.category.includes('Mutagen')) {
        keys = Object.keys(Mutagens);
        data = Mutagens;
    } else {
        keys = Object.keys(Ingredients);
        data = Ingredients
    }
    const filteredList = [];

    keys.forEach((key) => {
        if (data[key].category === props.category) {
            filteredList.push(data[key]);
        }
    })

    return (
        <div>
            <Typography>{props.category}</Typography>
            <DisplayArea>
                <div>
                    {filteredList.map(ingredient => (
                        <IngredientDisplay item={ingredient} key={ingredient.item} />
                    ))}
                </div>
            </DisplayArea>
        </div>
    );
}