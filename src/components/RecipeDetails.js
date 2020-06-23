import React from 'react';

const RecipeDetails =({ ingredients }) => {
    return ingredients.map(ingredient => {
        return (
            <ul className="ingredient-list">
                <li className="ingredient-text">{ingredient.text}</li>
                <li className="ingredient-weight">Weight: {ingredient.weight.toFixed(0)} grams</li>
            </ul>
        )
    })
}

export default RecipeDetails;