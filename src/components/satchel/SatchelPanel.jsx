import React from 'react';
import { connect } from 'react-redux';
import CenteredTabs from '../common/CenteredTabs';
import { switchSelectedSatchelTab } from '../../actions/SystemActions';
import DisplayArea from '../common/DisplayArea';
import SatchelSummary from './subcomponents/summary/SatchelSummary';
import SatchelDetailsPanel from './subcomponents/details/SatchelDetailsPanel';
import ImportExportSatchel from './subcomponents/ImportExportSatchel';
import SatchelWitcherBrewsPanel from './subcomponents/witcherBrews/SatchelWitcherBrewsPanel';
import SatchelAlchemyPanel from './subcomponents/alchemy/SatchelAlchemyPanel';

const mapDispatchToProps = dispatch => ({
    switchSelectedSatchelTab: (selectedTab) => {
        dispatch(switchSelectedSatchelTab(selectedTab));
    },
});

const mapStateToProps = state => ({
    selectedTab: state.systemState.selectedSatchelTab,
});

class SatchelPanel extends React.Component {
    constructor() {
        super();
        this.tabs = ["Summary", "Details", "Witcher Brews", "Alchemy"];
    }

    renderPanel = () => {
        if (this.props.selectedTab === 0) {
            return (
                <SatchelSummary />
            );
        }
        if (this.props.selectedTab === 1) {
            return (
                <SatchelDetailsPanel />
            )
        }
        if (this.props.selectedTab === 2) {
            return (
                <SatchelWitcherBrewsPanel/>
            );
        }
        if (this.props.selectedTab === 3) {
            return (
                <SatchelAlchemyPanel/>
            );
        }
        return (
            <div />
        );
    }

    render() {
        return (
            <div>
                <CenteredTabs
                    tabs={this.tabs}
                    selectedTab={this.props.selectedTab}
                    switchTabs={this.props.switchSelectedSatchelTab}
                />
                <div style={{ padding: '16px' }}>
                    <DisplayArea>
                        {this.renderPanel()}
                    </DisplayArea>
                    <ImportExportSatchel/>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SatchelPanel);