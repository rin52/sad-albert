import React from 'react';
import { connect } from 'react-redux';
import CenteredTabs from '../common/CenteredTabs';
import GeneratorPanel from './subcomponents/GeneratorPanel';
import HoardPanel from './subcomponents/hoard/HoardPanel';
import Monsters from '../../data/Monsters';
import Foraging from '../../data/Foraging';
import { switchSelectedIngredientsGeneratorTab } from '../../actions/SystemActions';

const mapDispatchToProps = dispatch => ({
    switchSelectedIngredientsTab: (selectedTab) => {
        dispatch(switchSelectedIngredientsGeneratorTab(selectedTab));
    },
});

const mapStateToProps = state => ({
    selectedTab: state.systemState.selectedIngredientsGeneratorTab,
});

class IngredientGeneratorPanel extends React.Component {
    constructor() {
        super();
        this.tabs = ["Monsters", "Foraging", "Hoard of Monsters"];
    }

    renderPanel = () => {
        if (this.props.selectedTab === 0) {
            return (
                <GeneratorPanel title="Monster" list={Monsters} />
            )
        }
        if (this.props.selectedTab === 1) {
            return (
                <GeneratorPanel title="Location" list={Foraging} />
            )
        }
        if (this.props.selectedTab === 2) {
            return (
                <HoardPanel/>
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