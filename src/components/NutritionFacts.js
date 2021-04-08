import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import NutritionCard from './NutritionCard'
import axios from 'axios'
import { GoSearch } from 'react-icons/go'
import dailyRecomendationValues from './vitaminValue'

console.log(dailyRecomendationValues)
export const NutritionFacts = () => {
    const [product, setProduct] = useState('');
    const [productName, setProductName] = useState('');
    const [nutritionData, setNutritionData] = useState('');
    const searchNutrition = (e) => {
        e.preventDefault();
        setProductName(product);
        const apiKey = `ec4f9e290ce094b4adcf78bbfd65062e`;
        const apiId = `d3f05ade`;
        const res = axios.get(`https://api.edamam.com/api/nutrition-data?app_id=${apiId}&app_key=${apiKey}&ingr=${encodeURIComponent(product)}&img=yes`)
        .then(res => setNutritionData(res.data))
        .catch(er => console.log(er))
        setProduct('');
    }
console.log(nutritionData)
    const nutrients = nutritionData && Object.entries(nutritionData.totalNutrients).map(el => Object.entries(el)).map((el, i) =>{
        const {label, quantity, unit} = el[1][1]; 
        return <li key={i + Date.now()}> 
        {`${label}: ${quantity.toFixed(2)} ${unit} 
        ${dailyRecomendationValues
        .map(el => el.name === label && ((quantity / el.value) * 100)
        .toFixed(1))
        .filter(el => el !==false)} % DV` }
        </li>})
    const { totalWeight } = nutritionData;
 
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
            <div>
                {totalWeight === undefined && ''} 
                {totalWeight === 0  &&  <div className='noresult'> <div >{`No results found for ${productName}`}</div> </div>}
                {totalWeight !== 0 && totalWeight !== undefined && <NutritionCard label={productName}
                                nutrients={nutrients} 
                                weight={`Total weight: ${totalWeight.toFixed(0)} gram`} /> }
                
            </div>
           </div>
            <Footer />
        </div>
    )
}
