import React from 'react';
import Typography from '@material-ui/core/Typography';
import CenteredTabs from '../../common/CenteredTabs';
import DisplayArea from '../../common/DisplayArea';
import DisplayItem from '../../common/DisplayItem';
import Constants from '../../../helper/Constants';
import CraftingDiagramItem from '../../common/craftingDiagramItem/CraftingDiagramItem';
import GrandMasterDiagrams from '../../../data/recipes/wttrpg/elderfolkCraftingDiagrams/weaponDiagrams/GrandMasterDiagrams';
import MasterDiagrams from '../../../data/recipes/wttrpg/elderfolkCraftingDiagrams/weaponDiagrams/MasterDiagrams';

class WeaponCraftingDiagramsPanel extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedTab: 0,
        };
        this.tabs = [Constants.MASTER_DIAGRAMS, Constants.GRANDMASTER_DIAGRAMS];
    }

    renderDiagrams = (diagrams,/* knownRecipes, acquiredFormulae*/) => {
        const displayDiagrams = diagrams; //filterRecipes(this.state.filter, recipes, knownRecipes, acquiredFormulae);
        const keys = Object.keys(displayDiagrams);

        return (
            <div>
                {/* <RecipeFilter filterUpdated={this.filterUpdated} /> */}
                {keys.map(key => {
                    const diagram = displayDiagrams[key];
                    return (
                        <CraftingDiagramItem diagram={diagram} key={diagram.name} />
                    );
                })}
                {keys.length === 0 && (
                    <DisplayItem>
                        <Typography>No diagrams found.</Typography>
                    </DisplayItem>
                )}
            </div>
        )
    }


    renderPanel = () => {
        if (this.state.selectedTab === 0) {
            return this.renderDiagrams(MasterDiagrams);
        }
        if (this.state.selectedTab === 1) {
            return this.renderDiagrams(GrandMasterDiagrams);
        }
        return (
            <div />
        );
    }

    switchTab = (newTab) => {
        this.setState({selectedTab: newTab});
    };

    render() {
        return (
            <div>
                <div style={{ height: '16px' }} />
                <CenteredTabs
                    tabs={this.tabs}
                    selectedTab={this.state.selectedTab}
                    switchTabs={this.switchTab}
                />
                <div style={{ padding: '16px' }}>
                    <DisplayArea>
                        {this.renderPanel()}
                    </DisplayArea>
                </div>
            </div>
        );
    }
}

export default WeaponCraftingDiagramsPanel;