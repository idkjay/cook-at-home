import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';
import Footer from './Footer';

const App = () => {
  const APP_ID = '30cd12a7';
  const APP_KEY = '8384a09737074e2b9dace4d37a377de1';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('egg');

  useEffect(() => {
    getRecipes();
    // eslint-disable-next-line
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = (event) => {
    setSearch(event.target.value);
  };

  const getSearch = (event) => {
    event.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <div className="App">
      <h1 className="tag"> Cook at home </h1>
      <div className="form-holder">

        <form onSubmit={getSearch} className="search-form">
          <input
            className="search-bar"
            type="text"
            value={search}
            onChange={updateSearch}
            placeholder="Enter Available Ingredients Here"
          />
          <button className="search-button" type="submit">
            Search
          </button>
        </form>
      </div>

      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe recipe={recipe} />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default App;
