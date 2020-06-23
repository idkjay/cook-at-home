import React from 'react';

const RecipeInfo =({ dietLabels, healthLabels, calories }) => {
    return (
        <ul className="info-list">
            <li className="info-text"><strong>Health Labels:</strong> {healthLabels.join(', ')}</li>
            <li className="info-text"><strong>Diet Labels:</strong> {dietLabels.join(', ')}</li>
            <li className="info-text"><strong>Total Calories:</strong> {calories.toFixed(2)}</li>
        </ul>
    )

}

export default RecipeInfo;