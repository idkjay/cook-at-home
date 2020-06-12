import React from 'react';

const RecipeInfo =({ dietLabels, healthLabels, calories }) => {
    return (
        <ul className="ingredient-list">
            <li className="ingredient-text"><strong>Health Labels:</strong> {healthLabels.join(', ')}</li>
            <li className="ingredient-text"><strong>Diet Labels:</strong> {dietLabels.join(', ')}</li>
            <li className="ingredient-text"><strong>Total Calories:</strong> {calories.toFixed(2)}</li>
        </ul>
    )

}

export default RecipeInfo;