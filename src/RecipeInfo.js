import React from 'react';

const RecipeInfo =({ dietLabels, healthLabels, calories }) => {
    return (
        <ul className="ingredient-list">
            <li>Health Labels: {healthLabels}</li>
            <li>Diet Labels: {dietLabels}</li>
            <li>Total Calories: {calories}</li>
        </ul>
    )

}

export default RecipeInfo;