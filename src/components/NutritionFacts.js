import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import NutritionCard from './NutritionCard'
import axios from 'axios'
import { GoSearch } from 'react-icons/go'
import dailyRecomendationValues from './vitaminValue'
import Form from './Form'

export const NutritionFacts = () => {
    const [product, setProduct] = useState('');
    const [productName, setProductName] = useState('');
    const [nutritionData, setNutritionData] = useState('');
    const searchNutrition = (e) => {
        e.preventDefault();
        setProductName(product);
        const apiKey = `ec4f9e290ce094b4adcf78bbfd65062e`;
        const apiId = `d3f05ade`;
        const res = axios.get(`https://api.edamam.com/api/nutrition-data?app_id=${apiId}&app_key=${apiKey}&ingr=${encodeURIComponent(product)}`)
        .then(res => setNutritionData(res.data))
        .catch(er => console.log(er))
        setProduct('');
    }
    const nutrients = nutritionData && Object.entries(nutritionData.totalNutrients).map(el => Object.entries(el)).map((el, i) =>{
        const {label, quantity, unit} = el[1][1]; 
        const nutrientValue = dailyRecomendationValues
                              .filter(el => el.name === label)
                              .map(el => ((quantity / el.value) * 100))
                              .map(el => el.toFixed(0))
        return <li key={i + Date.now()}> 
            {`${label}: ${quantity.toFixed(2)} ${unit} - ${nutrientValue} % DV`}
        </li>})
    const { totalWeight, uri } = nutritionData;
    console.log(nutritionData)
 
    return (
        <div className='main-component' >
            <Header />
            <div className='container' style={{backgroundImage: `url('nutrition.jpg')`}}>
                <Form 
                    handleSubmit={searchNutrition}
                    handleChange={e => setProduct(e.target.value)}
                    value={product}
                    name='product'
                />
                {totalWeight === undefined && ''} 
                {totalWeight === 0  &&  <div className='noresult'> <div >{`No results found for ${productName}`}</div> </div>}
                {totalWeight !== 0 && totalWeight !== undefined 
                    && <NutritionCard 
                        label={productName}
                        nutrients={nutrients} 
                        weight={`Total weight: ${totalWeight.toFixed(0)} gram`} /> }
            </div>
            <Footer />
        </div>
    )
}
