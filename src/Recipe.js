import React, {Component} from 'react';
import './Recipe.css';

class Recipe extends Component {
	render() {
		// const {title} = this.props;
		const {title, img, instructions} = this.props;
		const ingredients = this.props.ingredients.map((ing, index) =>
			<li key={index}>{ing}</li>
		 );
		return (
			<div className="recipe-card">
			   <div className="recipe-card-image">
					<img src={img} alt={title} />
			   </div>
			   <div className="recipe-card-content">
					<h3 className="recipe-title">Hello{title}</h3>
				   <h4>Ingredients: </h4>
					<ul>
						{ingredients}	  
					</ul>
				   <h4>Instructions:</h4>
					<p>{instructions}</p>
			   </div>
			</div>
		);
	}
}

export default Recipe;