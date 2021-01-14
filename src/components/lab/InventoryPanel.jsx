import React from 'react';
import SatchelInventory from './subcomponents/SatchelInventory';

export default function InventoryPanel(props) {
    return (
        <SatchelInventory
            allRecipes={props.allRecipes}
            hasMutagens={props.hasMutagens}
            type={props.type}
            knownRecipes={props.knownRecipes}
            acquiredFormulae={props.acquiredFormulae}
        />
    );
}