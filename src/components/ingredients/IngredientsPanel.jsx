import React from 'react';
import { connect } from 'react-redux';
import CenteredTabs from '../common/CenteredTabs';
import { switchSelectedIngredientsTab } from '../../actions/SystemActions';
import IngredientsList from './IngredientsList';
import IngredientCategory from '../../helper/IngredientCategory';

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
                    <IngredientsList category={IngredientCategory.VITRIOL} />
                    <div style={{height: '16px', width: '16px'}} />
                    <IngredientsList category={IngredientCategory.REBIS} />
                    <div style={{height: '16px', width: '16px'}} />
                    <IngredientsList category={IngredientCategory.AETHER} />
                    <div style={{height: '16px', width: '16px'}} />
                    <IngredientsList category={IngredientCategory.QUEBRITH} />
                    <div style={{height: '16px', width: '16px'}} />
                    <IngredientsList category={IngredientCategory.HYDRAGENUM} />
                    <div style={{height: '16px', width: '16px'}} />
                    <IngredientsList category={IngredientCategory.SOL} />
                    <div style={{height: '16px', width: '16px'}} />
                    <IngredientsList category={IngredientCategory.VERMILION} />
                    <div style={{height: '16px', width: '16px'}} />
                    <IngredientsList category={IngredientCategory.CAELUM} />
                    <div style={{height: '16px', width: '16px'}} />
                    <IngredientsList category={IngredientCategory.FULGUR} />
                    <div style={{height: '16px', width: '16px'}} />

                    <IngredientsList category={IngredientCategory.RED_MUTAGEN} />
                    <div style={{height: '16px', width: '16px'}} />
                    <IngredientsList category={IngredientCategory.GREEN_MUTAGEN} />
                    <div style={{height: '16px', width: '16px'}} />
                    <IngredientsList category={IngredientCategory.BLUE_MUTAGEN} />
                    
                </div>

            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IngredientPanel);