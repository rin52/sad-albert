import React from 'react';
import { connect } from 'react-redux';
import CenteredTabs from '../common/CenteredTabs';
import GeneratorPanel from './subcomponents/GeneratorPanel';
import HoardPanel from './subcomponents/hoard/HoardPanel';
import getMonsters from '../../helper/getData/getMonsters';
import getForaging from '../../helper/getData/getForaging';
import { switchSelectedIngredientsGeneratorTab } from '../../actions/SystemActions';
import runAnalytics from '../../helper/analytics/runAnalytics';

const mapDispatchToProps = dispatch => ({
    switchSelectedIngredientsTab: (selectedTab) => {
        dispatch(switchSelectedIngredientsGeneratorTab(selectedTab));
    },
});

const mapStateToProps = state => ({
    selectedTab: state.systemState.selectedIngredientsGeneratorTab,
    chosenSetting: state.systemState.chosenSetting,
});

class IngredientGeneratorPanel extends React.Component {
    constructor() {
        super();
        this.tabs = ["Monsters", "Foraging", "Hoard of Monsters", "Multiple Locations"];
    }

    componentDidMount() {
        runAnalytics('ingredient-generator');
    }

    renderPanel = () => {
        if (this.props.selectedTab === 0) {
            return (
                <GeneratorPanel title="Monster" list={getMonsters(this.props.chosenSetting)} />
            )
        }
        if (this.props.selectedTab === 1) {
            return (
                <GeneratorPanel title="Location" list={getForaging(this.props.chosenSetting)} />
            )
        }
        if (this.props.selectedTab === 2) {
            return (
                <HoardPanel title="Monster" list={getMonsters(this.props.chosenSetting)} />
            )
        }
        if (this.props.selectedTab === 3) {
            return (
                <HoardPanel title="Location" list={getForaging(this.props.chosenSetting)} />
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
                    switchTabs={this.props.switchSelectedIngredientsTab}
                />
                <div style={{ padding: '16px' }}>
                    {this.renderPanel()}
                </div>

            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IngredientGeneratorPanel);