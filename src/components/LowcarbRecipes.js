import React from 'react'
import Header from './Header'
import Footer from './Footer'

const image = {
    backgroundImage: `url('keto.jpg')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw' };

export const LowcarbRecipes = () => {
    return (
        <div className='main-component' >
            <Header />
            <div className='container' 
                style={image} 
            >
                this is low carb recipes
                {/* 'https://api.edamam.com/search?q=&app_id=YOURAPP_ID&app_key=YOURAPP_KEY&diet=low-carb' or this 'https://api.edamam.com/search?q=&app_id=YOURAPP_ID&app_key=YOURAPP_KEY &nutrients[CA]=50%2B' */}
            </div>
            <Footer />
        </div>
    )
}
