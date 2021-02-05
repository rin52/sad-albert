import React from 'react';
import { connect } from 'react-redux';
import CenteredTabs from '../common/CenteredTabs';
import { switchSelectedIngredientsTab } from '../../actions/SystemActions';
import IngredientsList from './IngredientsList';
import IngredientCategory from '../../helper/IngredientCategory';
import getIngredients from '../../helper/getData/getIngredients';
import getMutagens from '../../helper/getData/getMutagens';
import runAnalytics from '../../helper/runAnalytics';

const mapDispatchToProps = dispatch => ({
    switchSelectedIngredientsTab: (selectedTab) => {
        dispatch(switchSelectedIngredientsTab(selectedTab));
    },
});

const mapStateToProps = state => ({
    selectedTab: state.systemState.selectedIngredientsTab,
    chosenSetting: state.systemState.chosenSetting,
});

class IngredientPanel extends React.Component {
    constructor() {
        super();
        this.tabs = [];
    }

    componentDidMount() {
        runAnalytics('ingredients');
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
                    <IngredientsList category={IngredientCategory.VITRIOL} data={getIngredients(this.props.chosenSetting)} />
                    <div style={{height: '16px', width: '16px'}} />
                    <IngredientsList category={IngredientCategory.REBIS} data={getIngredients(this.props.chosenSetting)} />
                    <div style={{height: '16px', width: '16px'}} />
                    <IngredientsList category={IngredientCategory.AETHER} data={getIngredients(this.props.chosenSetting)} />
                    <div style={{height: '16px', width: '16px'}} />
                    <IngredientsList category={IngredientCategory.QUEBRITH} data={getIngredients(this.props.chosenSetting)} />
                    <div style={{height: '16px', width: '16px'}} />
                    <IngredientsList category={IngredientCategory.HYDRAGENUM} data={getIngredients(this.props.chosenSetting)} />
                    <div style={{height: '16px', width: '16px'}} />
                    <IngredientsList category={IngredientCategory.SOL} data={getIngredients(this.props.chosenSetting)} />
                    <div style={{height: '16px', width: '16px'}} />
                    <IngredientsList category={IngredientCategory.VERMILION} data={getIngredients(this.props.chosenSetting)} />
                    <div style={{height: '16px', width: '16px'}} />
                    <IngredientsList category={IngredientCategory.CAELUM} data={getIngredients(this.props.chosenSetting)} />
                    <div style={{height: '16px', width: '16px'}} />
                    <IngredientsList category={IngredientCategory.FULGUR} data={getIngredients(this.props.chosenSetting)} />
                    <div style={{height: '16px', width: '16px'}} />

                    <IngredientsList category={IngredientCategory.RED_MUTAGEN} data={getMutagens(this.props.chosenSetting)} />
                    <div style={{height: '16px', width: '16px'}} />
                    <IngredientsList category={IngredientCategory.GREEN_MUTAGEN} data={getMutagens(this.props.chosenSetting)} />
                    <div style={{height: '16px', width: '16px'}} />
                    <IngredientsList category={IngredientCategory.BLUE_MUTAGEN} data={getMutagens(this.props.chosenSetting)} />

                    <div style={{height: '16px', width: '16px'}} />
                    <IngredientsList category={IngredientCategory.OTHER} data={getIngredients(this.props.chosenSetting)} />
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IngredientPanel);