import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import NutritionCard from './NutritionCard'
import axios from 'axios'
import { GoSearch } from 'react-icons/go'

export const NutritionFacts = () => {
    const [product, setProduct] = useState('1%oz%pasta');
    const [nutritionData, setNutritionData] = useState('')
    const searchNutrition = (e) => {
        e.preventDefault();
        const apiKey = `ec4f9e290ce094b4adcf78bbfd65062e`;
        const apiId = `d3f05ade`;
        const res = axios.get(`https://api.edamam.com/api/nutrition-data?app_id=${apiId}&app_key=${apiKey}&ingr=${encodeURIComponent(product)}`)
        .then(res => setNutritionData(res.data))
        .catch(er => console.log(er))
        setProduct('');
    }
       nutritionData && console.log(nutritionData)
  {/* const productNutritionFacts = nutritionData.totalWeight !== 0  
    ?  const {totalDaily, totalNutriens, totalWeight, totalNutrientsKCal} = nutritionData;
        <nutritionCard key={i} 
        label={el.label}
        url={el.url} 
        image={el.image}
        ingredientLines={el.ingredientLines.map((el, i) => <li key={i} >{el}</li>)}
        />) 
        : data.totalWeight === 0 ? <h1> No results found</h1> : '' */}
    return (
        <div className='main-component' >
            <Header />
            <div className='container' style={{backgroundImage: `url('nutrition.jpg')`}}>
            <form className='form' onSubmit={searchNutrition}>
                <label className='label' htmlFor='query'>search for a product</label>
                <div className='icon'> <GoSearch /></div>
                    <input className='input' 
                        type='text' 
                        name='query'
                        value={product}
                        onChange={(e) => setProduct(e.target.value)}
                        placeholder='Search...'/>
                    <button className='button' type='submit'>Search</button>
            </form>
           </div>
            <Footer />
        </div>
    )
}
