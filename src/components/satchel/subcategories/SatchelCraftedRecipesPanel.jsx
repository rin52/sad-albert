import React from 'react';
import CenteredTabs from '../../common/CenteredTabs';
import DisplayArea from '../../common/DisplayArea';
import SatchelWitcherBrewsPanel from '../subcomponents/witcherBrews/SatchelWitcherBrewsPanel';
import SatchelAlchemyPanel from '../subcomponents/alchemy/SatchelAlchemyPanel';

class SatchelCraftedRecipesPanel extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedTab: 0,
        };
        this.tabs = [ "Witcher Brews", "Alchemy",];
    }

    renderPanel = () => {
        if (this.state.selectedTab === 0) {
            return (
                <SatchelWitcherBrewsPanel />
            );
        }
        if (this.state.selectedTab === 1) {
            return (
                <SatchelAlchemyPanel />
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

export default SatchelCraftedRecipesPanel;