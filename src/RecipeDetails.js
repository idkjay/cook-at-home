import React from 'react';

const RecipeDetails =({ ingredients }) => {
    return ingredients.map(ingredient => {
        return (
            <ol>
                <li>{ingredient.text}</li>
            </ol>
        )
    })
}

export default RecipeDetails;