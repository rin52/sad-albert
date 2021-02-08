import React from 'react';
import { connect } from 'react-redux';
import CenteredTabs from '../common/CenteredTabs';
import { switchSelectedCraftingDiagramsTab } from '../../actions/SystemActions';
import ArmorCraftingDiagramsPanel from './subcomponents/ArmorEnhancementCraftingDiagramsPanel';
import ArmorEnhancementCraftingDiagramsPanel from './subcomponents/ArmorEnhancementCraftingDiagramsPanel';
import WeaponCraftingDiagramsPanel from './subcomponents/WeaponCraftingDiagramsPanel';
import AmmunitionCraftingDiagramsPanel from './subcomponents/AmmunitionCraftingDiagramsPanel';
import Constants from '../../helper/Constants';
import runAnalytics from '../../helper/analytics/runAnalytics';

const mapDispatchToProps = dispatch => ({
    switchSelectedCraftingDiagramsTab: (selectedTab) => {
        dispatch(switchSelectedCraftingDiagramsTab(selectedTab));
    },
});

const mapStateToProps = state => ({
    selectedTab: state.systemState.selectedCraftingDiagramsTab,
});

class ElderFolkCraftingDiagramsPanel extends React.Component {
    constructor() {
        super();
        this.tabs = [ Constants.WEAPON_DIAGRAMS, Constants.AMMUNITION_DIAGRAMS,
            Constants.ARMOR_DIAGRAMS, Constants.ARMOR_ENHANCEMENT_DIAGRAMS ];
    }

    componentDidMount() {
        runAnalytics('elderfolk-crafting-diagrams');
    }

    renderPanel = () => {
        if (this.props.selectedTab === 0) {
            return (
                <WeaponCraftingDiagramsPanel />
            );
        }
        if (this.props.selectedTab === 1) {
            return (
                <AmmunitionCraftingDiagramsPanel />
            );
        }
        if (this.props.selectedTab === 2) {
            return (
                <ArmorCraftingDiagramsPanel />
            );
        }
        if (this.props.selectedTab === 3) {
            return (
                <ArmorEnhancementCraftingDiagramsPanel />
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

export default connect(mapStateToProps, mapDispatchToProps)(ElderFolkCraftingDiagramsPanel);