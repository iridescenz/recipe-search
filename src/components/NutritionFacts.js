import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import NutritionCard from './NutritionCard'
import axios from 'axios'
import dailyRecomendationValues from './vitaminValue'
import Form from './Form'
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


function LinearProgressWithLabel(props) {
    return (
      <Box display="flex" alignItems="center">
        <Box width="86%" mr={1}>
          <LinearProgress variant="determinate" {...props} />
        </Box>
        <Box minWidth={10}>
          <Typography >{`${Math.round(props.value,
          )}% `}</Typography>
        </Box>
      </Box>
    );
  }

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
        return <li key={i + Date.now()}> 
            {`${label}: ${quantity.toFixed(1)} ${unit}`} <br /> <LinearProgressWithLabel value={nutrientValue} className={nutrientValue > 100 && `MuiLinearProgress-barColorPrimary`}/>
        </li>})
    const { totalWeight, uri } = nutritionData;
 
    return (
        <div className='main-component' >
            <Header />
            <div className='container' style={{backgroundImage: `url('nutrition.jpg')`}}>
                <Form 
                    handleSubmit={searchNutrition}
                    placeholder={`e.g. 100 gr chicken / 1 big apple/ 3 oz nuts `}
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
