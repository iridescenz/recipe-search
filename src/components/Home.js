import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Home = () => {
    return (
        <div className='main-component'>
            <Header />
            <div className="container" style={{backgroundImage: `url('diet.jpg')`}}>
            </div>
            <Footer />
        </div>
    )
}

export default Home;
