import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='main-component'>
      <Header />
      <div className='container' style={{ backgroundImage: `url('diet.jpg')` }}>
        <div className='noresult' style={{ margin: '10% auto' }}>
          <div>Home in progress</div>
          <div>
            <Link
              to='/recipe-search'
              style={{ color: 'inherit', textDecoration: 'inherit' }}
            >
              Go search for recipes
            </Link>
          </div>
          <div>
            <Link
              to='/nutrition-facts'
              style={{ color: 'inherit', textDecoration: 'inherit' }}
            >
              Go find out nutritional value of food
            </Link>
          </div>
        </div>
      </div>
      {/* image categories breakfast dinner low carb egg dishes soups  */}
      {/* add diets  */}
      <Footer />
    </div>
  )
}

export default Home
