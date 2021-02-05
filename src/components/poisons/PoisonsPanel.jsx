import React from 'react';
import CenteredTabs from '../common/CenteredTabs';
import DisplayArea from '../common/DisplayArea';
import PoisonItem from '../common/poisonItem/PoisonItem';
import Poisons from '../../data/recipes/dndAndHomebrew/poisons/dmgPoisons';
import runAnalytics from '../../helper/runAnalytics';

export default function PoisonsPanel(props) {
    React.useEffect(() => {
        runAnalytics('poisons');
    }, []);

    return (
        <div>
            <CenteredTabs
                tabs={[]}
                selectedTab=""
                switchTabs={() => { }}
            />
            <div style={{ padding: '16px' }}>
                <DisplayArea>
                    <div>
                        {Poisons.map(poison => (
                            <PoisonItem key={poison.name} poison={poison} />
                        ))}
                    </div>
                </DisplayArea>
            </div>
        </div>
    );
}