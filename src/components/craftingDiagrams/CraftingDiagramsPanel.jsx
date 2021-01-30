import React from 'react';
import { connect } from 'react-redux';
import CenteredTabs from '../common/CenteredTabs';
import { switchSelectedCraftingDiagramsTab } from '../../actions/SystemActions';
import ArmorCraftingDiagramsPanel from './subcomponents/ArmorCraftingDiagramsPanel';
import WeaponCraftingDiagramsPanel from './subcomponents/WeaponCraftingDiagramsPanel';
import IngredientCraftingDiagramsPanel from './subcomponents/IngredientCraftingDiagramsPanel';
import Constants from '../../helper/Constants';

const mapDispatchToProps = dispatch => ({
    switchSelectedCraftingDiagramsTab: (selectedTab) => {
        dispatch(switchSelectedCraftingDiagramsTab(selectedTab));
    },
});

const mapStateToProps = state => ({
    selectedTab: state.systemState.selectedCraftingDiagramsTab,
});

class CraftingDiagramsPanel extends React.Component {
    constructor() {
        super();
        this.tabs = [Constants.INGREDIENT_DIAGRAMS, Constants.WEAPON_DIAGRAMS, Constants.ARMOR_DIAGRAMS];
    }

    renderPanel = () => {
        if (this.props.selectedTab === 0) {
            return (
                <IngredientCraftingDiagramsPanel />
            );
        }
        if (this.props.selectedTab === 1) {
            return (
                <WeaponCraftingDiagramsPanel />
            );
        }
        if (this.props.selectedTab === 2) {
            return (
                <ArmorCraftingDiagramsPanel />
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
                    switchTabs={this.props.switchSelectedCraftingDiagramsTab}
                />
                {this.renderPanel()}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CraftingDiagramsPanel);