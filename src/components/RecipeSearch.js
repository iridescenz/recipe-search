import React from "react";
import Card from './Card'
import {importantData} from './SearchForm'

const RecipeSearch = () => {
    console.log(importantData)
    const elem = importantData && importantData.map(el => el.recipe.map((el, i) => 
            <Card key={i} 
            label={el.label}
            uri={el.url} 
            image={el.image}
            ingredientLines={el.ingredientLines.map((el, i) => <li key={i} >{el}</li>)}
            />))
    return (
        <div className='card-container'>{elem}</div>
    )
}
export default RecipeSearch
