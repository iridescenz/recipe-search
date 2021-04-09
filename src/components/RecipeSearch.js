import React, { useState} from 'react';
import Card from './Card'
import axios from 'axios'
import Form from './Form'


const RecipeSearch = () => {
    const [query, setQuery] = useState('');
    const [data, setData] = useState('');
    const searchRecipe =  (e) => {
        e.preventDefault();
        const apiId = `a6975102&app_key=3e6a54f8480af0f1dfb6d7dc3c5cb3cd`
        const res = axios.get(`https://api.edamam.com/search?q=${query}&app_id=${apiId}&from=0&to=100&ingr=15`)
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
        : data.count === 0 ? <div className='noresult'><div>No results found </div></div> : ''
    
    return (
        <div className="container" style={showList ? {background: 'rgb(226, 240, 245)'}:{backgroundImage: `url('food.jpeg')`}}>
        <Form 
            handleSubmit={searchRecipe}
            handleChange={e => setQuery(e.target.value)}
            value={query}
            name='recipe'
        />
        <div className='card-container'>{showList}</div>
        </div>
    )
}
export default RecipeSearch