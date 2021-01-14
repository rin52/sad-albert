import React from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import CenteredTabs from '../common/CenteredTabs';
import { switchSelectedAlchemyFormulaeTab } from '../../actions/SystemActions';
import DisplayArea from '../common/DisplayArea';
import RecipeItem from '../common/recipeItem/RecipeItem';
import getNoviceFormulae from '../../helper/getData/getRecipes/alchemy/getNoviceFormulae';
import getJourneymanFormulae from '../../helper/getData/getRecipes/alchemy/getJourneymanFormulae';
import getMasterFormulae from '../../helper/getData/getRecipes/alchemy/getMasterFormulae';
import RecipeFilter from '../common/RecipeFilter';
import Constants from '../../helper/Constants';
import DisplayItem from '../common/DisplayItem';
import filterRecipes from '../../helper/filterRecipes/filterRecipes';

const mapDispatchToProps = dispatch => ({
    switchSelectedAlchemyFormulaeTab: (selectedTab) => {
        dispatch(switchSelectedAlchemyFormulaeTab(selectedTab));
    },
});

const mapStateToProps = state => ({
    selectedTab: state.systemState.selectedAlchemyFormulaeTab,
    chosenSetting: state.systemState.chosenSetting,
    knownRecipes: state.satchelState.knownRecipes,
    acquiredFormulae: state.satchelState.acquiredFormulae,
});

class AlchemyFormulaePanel extends React.Component {
    constructor() {
        super();
        this.state = {
            filter: [Constants.ALL_FORMULAE],
        };
        this.tabs = [Constants.NOVICE_FORMULAE, Constants.JOURNEYMAN_FORMULAE, Constants.MASTER_FORMULAE];
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
        if (this.props[satchelKey] && this.props[satchelKey].alchemy && this.props[satchelKey].alchemy[category]) {
            return this.props[satchelKey].alchemy[category];
        }
        return [];
    }

    renderPanel = () => {
        if (this.props.selectedTab === 0) {
            return this.renderRecipeItems(getNoviceFormulae(
                this.props.chosenSetting),
                this.getRecipeSatchelData('knownRecipes', 'novice'),
                this.getRecipeSatchelData('acquiredFormulae', 'novice'),
            );
        }
        if (this.props.selectedTab === 1) {
            return this.renderRecipeItems(getJourneymanFormulae(this.props.chosenSetting),
                this.getRecipeSatchelData('knownRecipes', 'journeyman'),
                this.getRecipeSatchelData('acquiredFormulae', 'journeyman'),
            );
        }
        if (this.props.selectedTab === 2) {
            return this.renderRecipeItems(getMasterFormulae(this.props.chosenSetting),
                this.getRecipeSatchelData('knownRecipes', 'master'),
                this.getRecipeSatchelData('acquiredFormulae', 'master'),
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
                    switchTabs={this.props.switchSelectedAlchemyFormulaeTab}
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

export default connect(mapStateToProps, mapDispatchToProps)(AlchemyFormulaePanel);