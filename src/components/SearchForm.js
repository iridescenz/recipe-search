import React, {useState} from 'react'
import RecipeSearch from './RecipeSearch'
import searchRecipe from './RecipeSearch'

const SearchForm = ({query, setQuery}) => {
    const [query, setQuery] = useState('');
    let [data, setData] = useState('');

    const searchRecipe =  (e) => {
        e.preventDefault();
        const apiId = `a6975102&app_key=3e6a54f8480af0f1dfb6d7dc3c5cb3cd`
        const res = axios.get(`https://api.edamam.com/search?q=${query}&app_id=${apiId}&from=0&to=30&`)
        .then(res => setData(res.data))
        .catch(er => console.log(er))
        setQuery('')
    }
    return (
        <div>
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
        </div>
    )
}
export default SearchForm