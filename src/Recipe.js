import React, { useState } from 'react';
import style from './recipe.module.css';
import RecipeDetails from './RecipeDetails';

const Recipe = ({title, calories, image, ingredients}) => {
    const [ show, setShow ] = useState(false);

    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <p>Total Calories: {calories.toFixed(2)}</p>
            <img className={style.image} src={image} alt="" />

            <button onClick={() => setShow(!show)}>Ingredients</button>
            {show && <RecipeDetails ingredients={ingredients} />}
        </div>
    );
}

export default Recipe;