import React from 'react';

const RecipeInfo =({ dietLabels, healthLabels }) => {
    return (
        <ul className="ingredient-list">
            <li className="ingredient-text">{healthLabels}</li>
            <li className="ingredient-weight">Weight - {dietLabels}</li>
        </ul>
    )

}

export default RecipeInfo;