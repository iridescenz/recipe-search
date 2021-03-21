import React, { useState} from "react";
import Card from './Card'
import axios from "axios"


const RecipeSearch = () => {
   

    const showList = data.count  
    ? data.hits.map(el => el.recipe).map((el, i) => 
        <Card key={i} 
        label={el.label}
        uri={el.url} 
        image={el.image}
        ingredientLines={el.ingredientLines.map((el, i) => <li key={i} >{el}</li>)}
        />) 
        : data.count === 0 ? <h1> No results found</h1> : ''
    
    return (
        <>
      <div className='card-container'>{showList}</div>
        </>
    )
}
export default RecipeSearch