import React from 'react'
import Header from './Header'
import Footer from './Footer'

export const NutritionFacts = () => {
    return (
        <div className='main-component'>
            <Header />
            <script src="https://platform.fatsecret.com/js?key=XXXXX&theme=green"></script>
            <div className='container'>this is nutrition facts</div>
            <Footer />
        </div>
    )
}
