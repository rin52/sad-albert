import React from 'react';
import { connect } from 'react-redux';
import CenteredTabs from '../common/CenteredTabs';
import { switchSelectedLabTab } from '../../actions/SystemActions';
import InventoryPanel from './InventoryPanel';
import Potions from '../../data/recipes/witcher/Potions';
import BladeOils from '../../data/recipes/witcher/BladeOils';
import Decoctions from '../../data/recipes/witcher/Decoctions';
import NoviceFormulae from '../../data/recipes/alchemy/NoviceFormulae';
import JourneymanFormulae from '../../data/recipes/alchemy/JourneymanFormulae';
import MasterFormulae from '../../data/recipes/alchemy/MasterFormulae';

const mapDispatchToProps = dispatch => ({
    switchSelectedLabTab: (selectedTab) => {
        dispatch(switchSelectedLabTab(selectedTab));
    },
});

const mapStateToProps = state => ({
    selectedTab: state.systemState.selectedLabTab,
});

class LabPanel extends React.Component {
    constructor() {
        super();
        this.tabs = ["Witcher Brews", "Alchemy"];
    }

    renderPanel = () => {
        if (this.props.selectedTab === 0) {
            return (
                <InventoryPanel
                    hasMutagens
                    allRecipes={[
                        {
                            name: 'Potions',
                            recipes: Potions,
                        },
                        {
                            name: 'Blade Oils',
                            recipes: BladeOils,
                        },
                        {
                            name: 'Decoctions',
                            recipes: Decoctions,
                        },
                    ]}
                    type="witcherBrews"
                />
            )
        }
        if (this.props.selectedTab === 1) {
            return (
                <InventoryPanel
                    type="alchemy"
                    allRecipes={[
                        {
                            name: 'Novice Formulae',
                            recipes: NoviceFormulae,
                        },
                        {
                            name: 'Journeyman Formulae',
                            recipes: JourneymanFormulae,
                        },
                        {
                            name: 'Master Formulae',
                            recipes: MasterFormulae,
                        },
                    ]}
                />
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
                    switchTabs={this.props.switchSelectedLabTab}
                />
                <div style={{ padding: '16px' }}>
                    {this.renderPanel()}
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LabPanel);