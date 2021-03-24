import React, { useState} from "react";
import Card from "./Card"
import axios from "axios"
import { GoSearch } from "react-icons/go"

const RecipeSearch = () => {
    const [query, setQuery] = useState('');
    let [data, setData] = useState('');
    const searchRecipe =  (e) => {
        e.preventDefault();
        const apiId = `a6975102&app_key=3e6a54f8480af0f1dfb6d7dc3c5cb3cd`
        const res = axios.get(`https://api.edamam.com/search?q=${query}&app_id=${apiId}&from=0&to=100&ingr=10`)
        .then(res => setData(res.data))
        .catch(er => console.log(er))
        setQuery('')
    }
    const showList = data.count  
    ? data.hits.map(el => el.recipe).map((el, i) => 
        <Card key={i} 
        label={el.label}
        url={el.url} 
        image={el.image}
        ingredientLines={el.ingredientLines.map((el, i) => <li key={i} >{el}</li>)}
        />) 
        : data.count === 0 ? <h1> No results found</h1> : ''
    
    return (
        <>
        <form className="form" onSubmit={searchRecipe}>
            <label className="label" htmlFor="query">search for a recipe</label>
            <div className="icon"> <GoSearch /></div>
                <input className="input" 
                    type="text" 
                    name="query"
                    value={query}
                    onChange={(e) => {setQuery(e.target.value)}}
                    placeholder="Search..."/>
                <button className="button" type="submit">Search</button>
        </form>
      <div className="card-container">{showList}</div>
        </>
    )
}
export default RecipeSearch