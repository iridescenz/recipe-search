import React from 'react'
import Header from './Header'
import Footer from './Footer'


const backgroungImage = {
    backgroundImage: `url('diet.jpg')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw' }

const Home = () => {
    return (
        <div className='main-component'>
            <Header />
            <div className="container"
                style={backgroungImage}
        >
            THis is home</div>
            <Footer />
        </div>
    )
}

export default Home;
