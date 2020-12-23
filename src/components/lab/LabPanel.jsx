import React from 'react';
import { connect } from 'react-redux';
import CenteredTabs from '../common/CenteredTabs';
import { switchSelectedLabTab } from '../../actions/SystemActions';
import InventoryPanel from './InventoryPanel';
import getNoviceFormulae from '../../helper/getData/getRecipes/alchemy/getNoviceFormulae';
import getJourneymanFormulae from '../../helper/getData/getRecipes/alchemy/getJourneymanFormulae';
import getMasterFormulae from '../../helper/getData/getRecipes/alchemy/getMasterFormulae';
import getPotions from '../../helper/getData/getRecipes/witcher/getPotions';
import getBladeOils from '../../helper/getData/getRecipes/witcher/getBladeOils';
import getDecoctions from '../../helper/getData/getRecipes/witcher/getDecoctions';

const mapDispatchToProps = dispatch => ({
    switchSelectedLabTab: (selectedTab) => {
        dispatch(switchSelectedLabTab(selectedTab));
    },
});

const mapStateToProps = state => ({
    selectedTab: state.systemState.selectedLabTab,
    chosenSetting: state.systemState.chosenSetting,
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
                            recipes: getPotions(this.props.chosenSetting),
                        },
                        {
                            name: 'Blade Oils',
                            recipes: getBladeOils(this.props.chosenSetting),
                        },
                        {
                            name: 'Decoctions',
                            recipes: getDecoctions(this.props.chosenSetting),
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
                            recipes: getNoviceFormulae(this.props.chosenSetting),
                        },
                        {
                            name: 'Journeyman Formulae',
                            recipes: getJourneymanFormulae(this.props.chosenSetting),
                        },
                        {
                            name: 'Master Formulae',
                            recipes: getMasterFormulae(this.props.chosenSetting),
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