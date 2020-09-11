import React from 'react';
import { connect } from 'react-redux';
import CenteredTabs from '../common/CenteredTabs';
import { switchSelectedRecipesTab } from '../../actions/SystemActions';
import DisplayArea from '../common/DisplayArea';
import Potions from '../../data/recipes/witcher/Potions';
import BladeOils from '../../data/recipes/witcher/BladeOils';
import Decoctions from '../../data/recipes/witcher/Decoctions';
import RecipeItem from '../common/recipeItem/RecipeItem';

const mapDispatchToProps = dispatch => ({
    switchSelectedRecipesTab: (selectedTab) => {
        dispatch(switchSelectedRecipesTab(selectedTab));
    },
});

const mapStateToProps = state => ({
    selectedTab: state.systemState.selectedRecipesTab,
});

class WitcherRecipesPanel extends React.Component {
    constructor() {
        super();
        this.tabs = ["Potions", "Blade Oils", "Decoctions"];
    }

    renderPanel = () => {
        if (this.props.selectedTab === 0) {
            return (
                <div>
                    {Potions.map(potion => (
                        <RecipeItem recipe={potion} key={potion.name} />
                    ))}
                </div>
            )
        }
        if (this.props.selectedTab === 1) {
            return (
                <div>
                    {BladeOils.map(bladeOil => (
                        <RecipeItem recipe={bladeOil} key={bladeOil.name} />
                    ))}
                </div>
            )
        }
        if (this.props.selectedTab === 2) {
            return (
                <div>
                    {Decoctions.map(decoction => (
                        <RecipeItem recipe={decoction} key={decoction.name} />
                    ))}
                </div>
            )
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