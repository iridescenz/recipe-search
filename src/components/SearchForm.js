import React, {useState} from 'react'
import axios from "axios"

const SearchForm = () => {
    const [query, setQuery] = useState('');
    const [result, setResult]  = useState('')
    const searchRecipe =  async (e) => {
        e.preventDefault();
        const apiId = `a6975102&app_key=3e6a54f8480af0f1dfb6d7dc3c5cb3cd`
        const res = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=${apiId}&from=0&to=30&`)
        importantData.push(res.data.hits)
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
export { importantData }
