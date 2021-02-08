import React from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import CenteredTabs from '../common/CenteredTabs';
import { switchSelectedRecipesTab } from '../../actions/SystemActions';
import DisplayArea from '../common/DisplayArea';
import RecipeItem from '../common/recipeItem/RecipeItem';
import getBladeOils from '../../helper/getData/getRecipes/witcher/getBladeOils';
import getDecoctions from '../../helper/getData/getRecipes/witcher/getDecoctions';
import getPotions from '../../helper/getData/getRecipes/witcher/getPotions';
import Constants from '../../helper/Constants';
import RecipeFilter from '../common/RecipeFilter';
import DisplayItem from '../common/DisplayItem';
import filterRecipes from '../../helper/filterRecipes/filterRecipes';
import runAnalytics from '../../helper/analytics/runAnalytics';

const mapDispatchToProps = dispatch => ({
    switchSelectedRecipesTab: (selectedTab) => {
        dispatch(switchSelectedRecipesTab(selectedTab));
    },
});

const mapStateToProps = state => ({
    selectedTab: state.systemState.selectedRecipesTab,
    chosenSetting: state.systemState.chosenSetting,
    knownRecipes: state.satchelState.knownRecipes,
    acquiredFormulae: state.satchelState.acquiredFormulae,
});

class WitcherRecipesPanel extends React.Component {
    constructor() {
        super();
        this.state = {
            filter: [Constants.ALL_FORMULAE],
        };
        this.tabs = [Constants.POTIONS, Constants.BLADE_OILS, Constants.DECOCTIONS];
    }

    componentDidMount() {
        runAnalytics('witcher-recipes');
    }

    filterUpdated = (newFilter) => {
        this.setState({
            filter: newFilter,
        });
    };

    renderRecipeItems = (recipes, knownRecipes, acquiredFormulae) => {
        const displayRecipes = filterRecipes(this.state.filter, recipes, knownRecipes, acquiredFormulae);
        const keys = Object.keys(displayRecipes);

        return (
            <div>
                <RecipeFilter filterUpdated={this.filterUpdated} />
                {keys.map(key => {
                    const recipe = displayRecipes[key];
                    return (
                        <RecipeItem recipe={recipe} key={recipe.name} />
                    );
                })}
                {keys.length === 0 && (
                    <DisplayItem>
                        <Typography>No formulae found.</Typography>
                    </DisplayItem>
                )}
            </div>
        )
    }

    getRecipeSatchelData = (satchelKey, category) => {
        if (this.props[satchelKey] && this.props[satchelKey].witcherBrews && this.props[satchelKey].witcherBrews[category]) {
            return this.props[satchelKey].witcherBrews[category];
        }
        return [];
    }

    renderPanel = () => {
        if (this.props.selectedTab === 0) {
            return this.renderRecipeItems(getPotions(this.props.chosenSetting),
                this.getRecipeSatchelData('knownRecipes', 'potions'),
                this.getRecipeSatchelData('acquiredFormulae', 'potions'),
            );
        }
        if (this.props.selectedTab === 1) {
            return this.renderRecipeItems(getBladeOils(this.props.chosenSetting),
                this.getRecipeSatchelData('knownRecipes', 'bladeOils'),
                this.getRecipeSatchelData('acquiredFormulae', 'bladeOils'),
            );
        }
        if (this.props.selectedTab === 2) {
            return this.renderRecipeItems(getDecoctions(this.props.chosenSetting),
            this.getRecipeSatchelData('knownRecipes', 'decoctions'),
            this.getRecipeSatchelData('acquiredFormulae', 'decoctions'),
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
                    switchTabs={this.props.switchSelectedRecipesTab}
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

export default connect(mapStateToProps, mapDispatchToProps)(WitcherRecipesPanel);