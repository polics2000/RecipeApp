import React, {Component} from 'react';
import Recipe from './Recipe';
import './RecipeList.css';
import PropTypes from 'prop-types';

class RecipeList extends Component {

	static propTypes = {
		recipes: PropTypes.arrayOf(PropTypes.object)
	}

	render() {
		const recipes = this.props.recipes.map((r,index) => (
		<Recipe key={r.id} {...r} />
		));
		
		return(
			<div className="recipe-list">
				{recipes}
			</div>
			)
	}
}

export default RecipeList;