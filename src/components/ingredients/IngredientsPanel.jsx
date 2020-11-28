import React from 'react';
import { connect } from 'react-redux';
import CenteredTabs from '../common/CenteredTabs';
import { switchSelectedIngredientsTab } from '../../actions/SystemActions';
import IngredientsList from './IngredientsList';
import IngredientCategory from '../../helper/IngredientCategory';
import Ingredients from '../../data/Ingredients';
import Mutagens from '../../data/Mutagens';

const mapDispatchToProps = dispatch => ({
    switchSelectedIngredientsTab: (selectedTab) => {
        dispatch(switchSelectedIngredientsTab(selectedTab));
    },
});

const mapStateToProps = state => ({
    selectedTab: state.systemState.selectedIngredientsTab,
});

class IngredientPanel extends React.Component {
    constructor() {
        super();
        this.tabs = [];
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
                    <IngredientsList category={IngredientCategory.VITRIOL} data={Ingredients} />
                    <div style={{height: '16px', width: '16px'}} />
                    <IngredientsList category={IngredientCategory.REBIS} data={Ingredients} />
                    <div style={{height: '16px', width: '16px'}} />
                    <IngredientsList category={IngredientCategory.AETHER} data={Ingredients} />
                    <div style={{height: '16px', width: '16px'}} />
                    <IngredientsList category={IngredientCategory.QUEBRITH} data={Ingredients} />
                    <div style={{height: '16px', width: '16px'}} />
                    <IngredientsList category={IngredientCategory.HYDRAGENUM} data={Ingredients} />
                    <div style={{height: '16px', width: '16px'}} />
                    <IngredientsList category={IngredientCategory.SOL} data={Ingredients} />
                    <div style={{height: '16px', width: '16px'}} />
                    <IngredientsList category={IngredientCategory.VERMILION} data={Ingredients} />
                    <div style={{height: '16px', width: '16px'}} />
                    <IngredientsList category={IngredientCategory.CAELUM} data={Ingredients} />
                    <div style={{height: '16px', width: '16px'}} />
                    <IngredientsList category={IngredientCategory.FULGUR} data={Ingredients} />
                    <div style={{height: '16px', width: '16px'}} />

                    <IngredientsList category={IngredientCategory.RED_MUTAGEN} data={Mutagens} />
                    <div style={{height: '16px', width: '16px'}} />
                    <IngredientsList category={IngredientCategory.GREEN_MUTAGEN} data={Mutagens} />
                    <div style={{height: '16px', width: '16px'}} />
                    <IngredientsList category={IngredientCategory.BLUE_MUTAGEN} data={Mutagens} />
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IngredientPanel);