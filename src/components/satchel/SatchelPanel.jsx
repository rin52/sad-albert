import React from 'react';
import { connect } from 'react-redux';
import CenteredTabs from '../common/CenteredTabs';
import { switchSelectedSatchelTab } from '../../actions/SystemActions';
import DisplayArea from '../common/DisplayArea';
import SatchelSummary from './subcomponents/summary/SatchelSummary';
import SatchelDetailsPanel from './subcomponents/details/SatchelDetailsPanel';
import ImportExportSatchel from './subcomponents/ImportExportSatchel';

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
        this.tabs = ["Summary", "Details"];
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