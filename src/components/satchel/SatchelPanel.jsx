import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import CenteredTabs from '../common/CenteredTabs';
import { switchSelectedSatchelTab } from '../../actions/SystemActions';
import DisplayArea from '../common/DisplayArea';
import SatchelSummary from './subcomponents/summary/SatchelSummary';
import SatchelDetailsPanel from './subcomponents/details/SatchelDetailsPanel';
import ImportSatchelModal from './subcomponents/ImportSatchelModal';

const mapDispatchToProps = dispatch => ({
    switchSelectedSatchelTab: (selectedTab) => {
        dispatch(switchSelectedSatchelTab(selectedTab));
    },
});

const mapStateToProps = state => ({
    selectedTab: state.systemState.selectedSatchelTab,
    satchel: state.satchelState,
});

class SatchelPanel extends React.Component {
    constructor() {
        super();
        this.tabs = ["Summary", "Details"];
        this.state = {
            importIsOpen: false,
        };
    }

    download = (file, text) => {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8, ' + encodeURIComponent(text));
        element.setAttribute('download', file);

        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }

    export = () => {
        console.log(this.props.satchel);
        const date = new Date()
        this.download('sad-albert-satchel-' + date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + '.json',
            JSON.stringify(this.props.satchel, null, 4));
    };

    import = () => {
        this.setState({importIsOpen: true});
    };

    closeImport = () => {
        this.setState({importIsOpen: false});
    };

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
                    <div style={{ paddingTop: '16px', display: 'flex', justifyContent: 'center' }}>
                        <Button onClick={this.export}>Export</Button>
                        <div style={{ width: '16px' }} />
                        <Button onClick={this.import}>Import</Button>
                    </div>
                </div>
                {this.state.importIsOpen && (
                    <ImportSatchelModal open close={this.closeImport}/>
                )}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SatchelPanel);