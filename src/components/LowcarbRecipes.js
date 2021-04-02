import React from 'react'
import Header from './Header'
import Footer from './Footer'


export const LowcarbRecipes = () => {
    return (
        <div className='main-component' >
            <Header />
            <div className='container' style={{backgroundImage: `url('keto.jpg')`}} >
                this is low carb recipes
                {/* 'https://api.edamam.com/search?q=&app_id=YOURAPP_ID&app_key=YOURAPP_KEY&diet=low-carb' or this 'https://api.edamam.com/search?q=&app_id=YOURAPP_ID&app_key=YOURAPP_KEY &nutrients[CA]=50%2B' */}
            </div>
            <Footer />
        </div>
    )
}
