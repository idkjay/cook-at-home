import React, { useState } from 'react';
import style from './recipe.module.css';
import RecipeDetails from './RecipeDetails';

const Recipe = ({ recipe }) => {
    const [ show, setShow ] = useState(false);
    const { label, image, url, ingredients, calories } = recipe.recipe;

    return(
        <div className={style.recipe}>
            <h2>{label}</h2>
            <a href={url} target="_blank" rel="noopener noreferrer">URL
            </a>

            <p>Total Calories: {calories.toFixed(2)}</p>
            <img className={style.image} src={image} alt="" />

            <button onClick={() => setShow(!show)}>Ingredients</button>
            {show && <RecipeDetails ingredients={ingredients} />}
        </div>
    );
}

export default Recipe;