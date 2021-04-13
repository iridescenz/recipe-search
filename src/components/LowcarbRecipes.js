import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import axios from 'axios'
import Form from './Form'
import Card from './Card'

export const LowcarbRecipes = () => {
    const [query, setQuery] = useState('');
    const [data, setData] = useState('');
    const searchLowCarbRecipe =  (e) => {
        e.preventDefault();
        const apiId = `a6975102&app_key=3e6a54f8480af0f1dfb6d7dc3c5cb3cd`
        const res = axios.get(`https://api.edamam.com/search?q=${query}&app_id=${apiId}&from=0&to=100&ingr=15&diet=low-carb`)
        .then(res => setData(res.data))
        .catch(er => console.log(er))
        setQuery('')
    }
    const showLowCarbList = data.count  
    ? data.hits.map(el => el.recipe).map((el, i) => 
        <Card key={i} 
        label={el.label}
        url={el.url} 
        image={el.image}
        ingredientLines={el.ingredientLines.map((el, i) => <li key={i} >{el}</li>)}
        />) 
        : data.count === 0 ? <div className='noresult'><div>No results found </div></div> : ''
    return (
        <div className='main-component' >
            <Header />
            <div className='container' style={showLowCarbList ? {background: 'rgb(226, 240, 245)'}:{backgroundImage: `url('keto.jpg')`}} >
                <Form 
                    handleSubmit={searchLowCarbRecipe}
                    handleChange={e => setQuery(e.target.value)}
                    value={query}
                    placeholder={`e.g. keto waffles`}
                    name='low carb recipe'
                />
            <div className='card-container'>{showLowCarbList}</div>
            </div>
            <Footer />
        </div>
    )
}

