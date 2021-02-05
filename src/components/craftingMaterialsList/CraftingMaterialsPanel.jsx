import React from 'react';
import { connect } from 'react-redux';
import CenteredTabs from '../common/CenteredTabs';
import IngredientsList from '../ingredients/IngredientsList';
import CraftingCategory from '../../helper/CraftingCategory';
import getCraftingComponents from '../../helper/getData/getCraftingComponents';
import runAnalytics from '../../helper/runAnalytics';

const mapStateToProps = state => ({
    chosenSetting: state.systemState.chosenSetting,
});

class CraftingMaterialsPanel extends React.Component {
    constructor() {
        super();
        this.tabs = [];
    }

    componentDidMount() {
        runAnalytics('crafting-components');
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
                    <IngredientsList category={CraftingCategory.CRAFTING_MATERIALS} data={getCraftingComponents(this.props.chosenSetting)} />
                    <div style={{height: '16px', width: '16px'}} />
                    <IngredientsList category={CraftingCategory.HIDES_AND_ANIMAL_PARTS} data={getCraftingComponents(this.props.chosenSetting)} />
                    <div style={{height: '16px', width: '16px'}} />
                    <IngredientsList category={CraftingCategory.ALCHEMICAL_TREATMENTS} data={getCraftingComponents(this.props.chosenSetting)} />
                    <div style={{height: '16px', width: '16px'}} />
                    <IngredientsList category={CraftingCategory.INGOTS_AND_MINERALS} data={getCraftingComponents(this.props.chosenSetting)} />
                    <div style={{height: '16px', width: '16px'}} />



                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, null)(CraftingMaterialsPanel);