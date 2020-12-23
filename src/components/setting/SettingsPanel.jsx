import React from 'react';
import { connect } from 'react-redux';
import CenteredTabs from '../common/CenteredTabs';
import { changeSetting } from '../../actions/SystemActions';
import DisplayArea from '../common/DisplayArea';
import Constants from '../../helper/Constants';
import StyledSelector from '../common/StyledSelector';
import ChangeDataSourceModal from './ChangeDataSourceModal';

const mapDispatchToProps = dispatch => ({
    changeSetting: (newSetting) => {
        dispatch(changeSetting(newSetting));
    },
});

const mapStateToProps = state => ({
    chosenSetting: state.systemState.chosenSetting,
});

class SettingsPanel extends React.Component {
    constructor() {
        super();
        this.state = {
            dataSource: '',
            isWarningOpen: false,
        };
    }

    onDataSourceChange = (event) => {
        this.setState({
            dataSource: event.target.value,
            isWarningOpen: true,
        });
    }

    closeWarningOpen = () => {
        this.setState({
            dataSource: '',
            isWarningOpen: false,
        });
    }

    render() {
        return (
            <div>
                <CenteredTabs
                    tabs={[]}
                />
                <div style={{ padding: '16px' }}>
                    <DisplayArea>
                        <div>
                            <StyledSelector
                                name="Data Source"
                                options={[Constants.WITCHER, Constants.DND_HOMEBREW]}
                                selected={this.props.chosenSetting}
                                onChange={this.onDataSourceChange}
                            />
                        </div>
                    </DisplayArea>
                </div>

                {this.state.isWarningOpen && (
                    <ChangeDataSourceModal
                        open
                        close={this.closeWarningOpen}
                        dataSource={this.state.dataSource}
                    />
                )}

            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPanel);