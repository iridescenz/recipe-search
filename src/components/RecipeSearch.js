import React, { useState} from "react";
import Card from './Card'
import axios from "axios"


 function RecipeSearch(){
    const [query, setQuery] = useState('');
    const [data, setData] = useState('');

    const searchRecipe =  (e) => {
        e.preventDefault();
        const apiId = `a6975102&app_key=3e6a54f8480af0f1dfb6d7dc3c5cb3cd`
        const res = axios.get(`https://api.edamam.com/search?q=${query}&app_id=${apiId}&from=0&to=30&`)
        .then(res => setData(res.data))
        .catch(er => console.log(er))
        setQuery('')
    }

    const recipe = data && data.hits.map(el => el.recipe).map((el, i) => 
        <Card key={i} 
        label={el.label}
        uri={el.url} 
        image={el.image}
        ingredientLines={el.ingredientLines.map(el => <li>{el}</li>)}
        />)

    return (
        <>
        <form className="form" onSubmit={searchRecipe}>
            <label className="label" htmlFor="query">search for a recipe</label>
                <input className="input" 
                    type="text" 
                    name="query"
                    value={query}
                    onChange={(e) => {setQuery(e.target.value)}}
                    placeholder="i.e. Keto pancakes"/>
                <button className="button" type="submit">Search</button>
        </form>
      <div className='container'>{recipe}</div>
        </>
    )
}
export default RecipeSearch