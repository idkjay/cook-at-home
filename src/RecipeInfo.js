import React from 'react';

const RecipeInfo =({ dietLabels, healthLabels, calories }) => {
    return (
        <ul className="ingredient-list">
            <li className="ingredient-text">Health Labels: {healthLabels.join(', ')}</li>
            <li className="ingredient-text">Diet Labels: {dietLabels.join(', ')}</li>
            <li className="ingredient-text">Total Calories: {calories.toFixed(2)}</li>
        </ul>
    )

}

export default RecipeInfo;