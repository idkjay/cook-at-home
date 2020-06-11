import React, { useState } from 'react';
import RecipeDetails from './RecipeDetails';

const Recipe = ({ recipe }) => {
    const [ show, setShow ] = useState(false);
    const { label, image, ingredients, url } = recipe.recipe;

    //  <a href={url} target="_blank" rel="noopener noreferrer">URL
    //  </a>

    // <p>Total Calories: {calories.toFixed(2)}</p>

    
    return(
        <div className="recipe">
            <h2>{label}</h2>
            <img className="image" src={image} alt="" />

            <div className="btn-holder">
                <a href={url}>
                    <button>Directions</button>
                </a>
                <button onClick={() => setShow(!show)}>Ingredients</button>
            </div>
                {show && <RecipeDetails ingredients={ingredients} />}


        </div>
    );
}

export default Recipe;