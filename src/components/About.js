import React from 'react'
import Header from './Header'
import Footer from './Footer'

const image = {
    backgroundImage: `url('about.jpeg')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%' }

export const About = () => {
    return (
        <div className='main-component'>
            <Header />
            <div className='container'
                style={image}
            >This is sbout</div>
            <Footer />
        </div>
    )
}
