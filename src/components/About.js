import React from 'react'
import Header from './Header'
import Footer from './Footer'

export const About = () => {
    return (
        <div className='main-component'>
            <Header />
            <div className='container'
                style={{
                    backgroundImage: `url('about.jpeg')`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: '100%' }} 
            >This is sbout</div>
            <Footer />
        </div>
    )
}
