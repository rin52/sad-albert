import React from 'react';
import Typography from '@material-ui/core/Typography';
import DisplayItem from '../DisplayItem';
import PoisonHeader from './PoisonHeader';

export default function PoisonItem(props) {
    if (props.poison.hide) {
        return null;
    }
    return (
        <DisplayItem>
            <div>
                <PoisonHeader
                    name={props.poison.name}
                    type={props.poison.type}
                />
                <Typography>{props.poison.effects}</Typography>
                <Typography variant="caption">Price per dose: {props.poison.pricePerDose}</Typography>
                {props.poison.harvestable && (
                    <div>
                        <Typography variant="caption">
                            Harvestable with a DC 20 Nature Check (use proficiency in poisoners kit if not proficient in Nature). Failure by 5 or more results in being exposed to the poison.
                        </Typography>
                    </div>
                )}
            </div>
        </DisplayItem>
    );
}