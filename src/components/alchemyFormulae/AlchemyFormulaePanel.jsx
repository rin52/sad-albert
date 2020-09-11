import React from 'react';
import { connect } from 'react-redux';
import CenteredTabs from '../common/CenteredTabs';
import { switchSelectedAlchemyFormulaeTab } from '../../actions/SystemActions';
import DisplayArea from '../common/DisplayArea';
import RecipeItem from '../common/recipeItem/RecipeItem';
import NoviceFormulae from '../../data/recipes/alchemy/NoviceFormulae';
import JourneymanFormulae from '../../data/recipes/alchemy/JourneymanFormulae';
import MasterFormulae from '../../data/recipes/alchemy/MasterFormulae';

const mapDispatchToProps = dispatch => ({
    switchSelectedAlchemyFormulaeTab: (selectedTab) => {
        dispatch(switchSelectedAlchemyFormulaeTab(selectedTab));
    },
});

const mapStateToProps = state => ({
    selectedTab: state.systemState.selectedAlchemyFormulaeTab,
});

class AlchemyFormulaePanel extends React.Component {
    constructor() {
        super();
        this.tabs = ["Novice Formulae", "Journeyman Formulae", "Master Formulae"];
    }

    renderPanel = () => {
        if (this.props.selectedTab === 0) {
            return (
                <div>
                    {NoviceFormulae.map(recipe => (
                        <RecipeItem recipe={recipe} key={recipe.name} />
                    ))}
                </div>
            )
        }
        if (this.props.selectedTab === 1) {
            return (
                <div>
                    {JourneymanFormulae.map(recipe => (
                        <RecipeItem recipe={recipe} key={recipe.name} />
                    ))}
                </div>
            )
        }
        if (this.props.selectedTab === 2) {
            return (
                <div>
                    {MasterFormulae.map(recipe => (
                        <RecipeItem recipe={recipe} key={recipe.name} />
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