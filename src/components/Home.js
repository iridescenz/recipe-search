import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Home = () => {
    return (
        <div className='main-component'>
            <Header />
            <div className="container"
                style={{
                    backgroundImage: `url('diet.jpg')`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: '100vw' }}
        >
            THis is home</div>
            <Footer />
        </div>
    )
}

export default Home;
