import React from 'react';
import CenteredTabs from '../common/CenteredTabs';
import DisplayArea from '../common/DisplayArea';
import PoisonItem from '../common/poisonItem/PoisonItem';
import Poisons from '../../data/recipes/poisons/dmgPoisons';

class PoisonsPanel extends React.Component {
    render() {
        return (
            <div>
                <CenteredTabs
                    tabs={[]}
                    selectedTab=""
                    switchTabs={()=>{}}
                />
                <div style={{ padding: '16px' }}>
                    <DisplayArea>
                        <div>
                            {Poisons.map(poison => (
                                <PoisonItem key={poison.name} poison={poison}/>
                            ))}
                        </div>
                    </DisplayArea>
                </div>
            </div>
        );
    }
}

export default PoisonsPanel;