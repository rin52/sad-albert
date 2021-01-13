import React from 'react';
import CenteredTabs from '../../common/CenteredTabs';
import DisplayArea from '../../common/DisplayArea';
import AcquiredFormulaePanel from '../subcomponents/acquiredFormulae/AcquiredFormulaePanel';
import KnownRecipesPanel from '../subcomponents/knownRecipes/KnownRecipesPanel';

class SatchelFormulaePanel extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedTab: 0,
        };
        this.tabs = [ "Memorized", "Acquired", ];
    }

    renderPanel = () => {
        if (this.state.selectedTab === 0) {
            return (
                <KnownRecipesPanel />
            );
        }
        if (this.state.selectedTab === 1) {
            return (
                <AcquiredFormulaePanel />
            )
        }
        return (
            <div />
        );
    }

    switchTab = (newTab) => {
        this.setState({selectedTab: newTab});
    };

    render() {
        return (
            <div>
                <div style={{ height: '16px' }} />
                <CenteredTabs
                    tabs={this.tabs}
                    selectedTab={this.state.selectedTab}
                    switchTabs={this.switchTab}
                />
                <div style={{ padding: '16px' }}>
                    <DisplayArea>
                        {this.renderPanel()}
                    </DisplayArea>
                </div>
            </div>
        );
    }
}

export default SatchelFormulaePanel;