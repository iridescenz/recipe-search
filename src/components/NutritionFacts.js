import React from 'react'
import Header from './Header'
import Footer from './Footer'

export const NutritionFacts = () => {
    return (
        <div className='main-component' >
            <Header />
            <div className='container'
                style={{
                    backgroundImage: `url('nutrition.jpg')`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: '100vw' }}
            >
            this is nutrition facts</div>
            <Footer />
        </div>
    )
}
