import React, { useState } from 'react';
import RecipeDetails from './RecipeDetails';
import RecipeInfo from './RecipeInfo';

const Recipe = ({ recipe }) => {
    const [ show, setShow ] = useState(false);
    const [ showInfo, setShowInfo ] = useState(false);
    const { label, image, ingredients, url, dietLabels, healthLabels, calories } = recipe.recipe;

    const showShow = () => {
        setShow(!show)
        setShowInfo(false)
    }
    
    const showMoreInfo = () => {
        setShowInfo(!showInfo)
        setShow(false)
    }
    
    return(
        <div className="recipe">
            <h2>{label}</h2>
            <img className="image" src={image} alt="" />

            <div className="btn-holder">
                <a href={url}>
                    <button>Directions</button>
                </a>
                <button onClick={showShow}>Ingredients</button>
                <button onClick={showMoreInfo}>More Info</button>
            </div>
                {show && <RecipeDetails ingredients={ingredients} />}
                {showInfo && 
                    <RecipeInfo 
                        dietLabels={dietLabels}
                        healthLabels={healthLabels} 
                        calories={calories}
                    />
                }
        </div>
    );
}

export default Recipe;