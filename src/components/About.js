import React from 'react'
import Header from './Header'
import Footer from './Footer'


export const About = () => {
    return (
        <div className='main-component'>
            <Header />
            <div className='container' style={{backgroundImage: `url('about.jpeg')`}}
            ></div>
            <Footer />
        </div>
    )
}
