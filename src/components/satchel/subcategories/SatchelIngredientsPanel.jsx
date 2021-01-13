import React from 'react';
import CenteredTabs from '../../common/CenteredTabs';
import DisplayArea from '../../common/DisplayArea';
import SatchelSummary from '../subcomponents/summary/SatchelSummary';
import SatchelDetailsPanel from '../subcomponents/details/SatchelDetailsPanel';

class SatchelIngredientsPanel extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedTab: 0,
        };
        this.tabs = ["Summary", "Details"];
    }

    renderPanel = () => {
        if (this.state.selectedTab === 0) {
            return (
                <SatchelSummary />
            );
        }
        if (this.state.selectedTab === 1) {
            return (
                <SatchelDetailsPanel />
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

export default SatchelIngredientsPanel;