import React, { useState } from 'react';
import RecipeDetails from './RecipeDetails';

const Recipe = ({ recipe }) => {
    const [ show, setShow ] = useState(false);
    const { label, image, url, ingredients, calories } = recipe.recipe;
    
    return(
        <div className="recipe">
            <h2>{label}</h2>
            <img className="image" src={image} alt="" />

            <button onClick={() => setShow(!show)}>Ingredients</button>
            {show && <RecipeDetails ingredients={ingredients} />}
        </div>
    );
}

export default Recipe;