import React from 'react';
import { connect } from 'react-redux';
import CenteredTabs from '../common/CenteredTabs';
import { switchSelectedSatchelTab } from '../../actions/SystemActions';
import ImportExportSatchel from './subcomponents/ImportExportSatchel';
import SatchelIngredientsPanel from './subcategories/SatchelIngredientsPanel';
import SatchelCraftedRecipesPanel from './subcategories/SatchelCraftedRecipesPanel';
import SatchelFormulaePanel from './subcategories/SatchelFormulaePanel';

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
        this.tabs = ["Ingredients", "Crafted Recipes", "Formulae"];
    }

    renderPanel = () => {
        if (this.props.selectedTab === 0) {
            return (
                <SatchelIngredientsPanel />
            );
        }
        if (this.props.selectedTab === 1) {
            return (
                <SatchelCraftedRecipesPanel />
            )
        }
        if (this.props.selectedTab === 2) {
            return (
                <SatchelFormulaePanel />
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
                {this.renderPanel()}
                <ImportExportSatchel />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SatchelPanel);