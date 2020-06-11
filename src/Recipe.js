import React, { useState } from 'react';
import RecipeDetails from './RecipeDetails';
import ReactCardFlip from "react-card-flip";

const Recipe = ({ recipe }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const { label, image, ingredients } = recipe.recipe;

    const handleClick = () => {
        setIsFlipped(!isFlipped)
    }
    //  <a href={url} target="_blank" rel="noopener noreferrer">URL
    //  </a>

    // <p>Total Calories: {calories.toFixed(2)}</p>

    
    return(
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">

            <div className="recipe">
                <h2>{label}</h2>
                <img className="image" src={image} alt="" />
                <button onClick={handleClick}>Ingredients</button>
            </div>

            <div className="recipe">
                <RecipeDetails className="ingred" ingredients={ingredients}/>
                <button onClick={handleClick}>Return</button>
            </div>
        </ReactCardFlip>
    );
}

export default Recipe;