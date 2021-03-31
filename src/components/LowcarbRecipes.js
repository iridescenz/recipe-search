import React from 'react'
import Header from './Header'
import Footer from './Footer'

export const LowcarbRecipes = () => {
    return (
        <div className='main-component' >
            <Header />
            <div className='container' 
                style={{backgroundImage: `url('keto.jpg')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100vw' }}>
                this is low carb recipes
            </div>
            <Footer />
        </div>
    )
}
