import React from 'react';

const RecipeDetails =({ ingredients }) => {
    return ingredients.map(ingredient => {
        return (
            <ul>
                <li>{ingredient.text}</li>
            </ul>
        )
    })
}

export default RecipeDetails;